/******************************************
Luca Tardito
FSJS project 2 - List Filter and Pagination
******************************************/

const studentsList = document.querySelectorAll('.student-item');

// input: int, array[node] - output: none - functionality: it hides {students} not in the {page}.
const showPage = (page, students) => {
  let indexMin = page * 10 - 10;
  let indexMax = page * 10 - 1;
  students.forEach((student,index) => {
    if(indexMin <= index && index <= indexMax) {
      student.style.display = '';
    } else {
      student.style.display = 'none';
    }
  });
};

// input: Array - output: none - functionality: it creates a button for any ten {studentslist}.
const appendPageLinks = (studentsList) => {
  pages = Math.ceil((studentsList.length) / 10);
  if(document.querySelector('.pagination')) {
    var select = document.querySelector('.pagination');
    select.parentNode.removeChild(select);
  }
  let listButtons = document.createElement("ol");
  listButtons.className = 'pagination';
  var counter = 0;
  while(counter < pages) {
  counter ++;
  let li = document.createElement("li");
  li.innerHTML = `<a href="#">${counter}</a>`;
  listButtons.appendChild(li);
  };
  document.querySelector('.page').appendChild(listButtons);
  // it reacts moving the active class to the pressed button
  document.querySelectorAll('a').forEach(button => button.addEventListener(
    "click", event => {
      document.querySelectorAll('a').forEach(button => button.classList.remove('active'));
      showPage(event.target.innerText, studentsList);
      event.target.className = 'active';
    }
  ));
}

const search = () => {
  let inputValue = document.querySelector('input').value;
  let studentsMatching = [];
  studentsList.forEach((student) => {
    if(student.querySelector('h3').innerText.includes(inputValue)) {
      student.style.display = '';
      studentsMatching.push(student);
    } else {
      student.style.display = 'none';
    }
  });
  if(studentsMatching.length === 0) {
    // check if the element doesn't exist
    if(!document.querySelector('.message')) {
      // create element
      let message = document.createElement("div");
      message.className = 'message';
      message.innerHTML = `<h2>No Results</h2>`;
      document.querySelector('ul').appendChild(message);
      appendPageLinks(studentsMatching);
    }
  } else {
    // remove element
    if(document.querySelector('.message')) {
      document.querySelector('.message').parentNode.removeChild(document.querySelector('.message'));
    }

    showPage(1, studentsMatching);
    appendPageLinks(studentsMatching);
    document.querySelector('a').className = 'active';
  }
}

// input: none - output: none - functionality: it adds an input field on the header.
const searchInput = () => {
  let searchField = document.createElement('div');
  searchField.className = 'student-search';
  searchField.innerHTML = `<input placeholder="Search for students...">
                          <button>Search</button>`;
  document.querySelector('.page-header').appendChild(searchField);
}

// input: none - output: none - functionality: it controls the program flow.
const setUp = () => {
  appendPageLinks(studentsList);
  showPage(1, studentsList);
  document.querySelector('a').className = 'active';
  searchInput();
  document.querySelector('button').addEventListener('click',search);
  document.addEventListener('keyup',search);
}

setUp();
// Remember to delete the comments that came with this file, and replace them with your own code comments.