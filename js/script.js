/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/***
   Add your global variables that store the DOM elements you will
   need to reference and/or manipulate.

   But be mindful of which variables should be global and which
   should be locally scoped to one of the two main functions you're
   going to create. A good general rule of thumb is if the variable
   will only be used inside of a function, then it can be locally
   scoped to that function.
***/
let studentList = document.querySelectorAll('.student-item');
const studentPages = Math.ceil(studentList.length / 10);
let pageList = document.querySelector('.pagination');
const divPage = document.querySelector('div.page');
let activePage = 1;


const showPage = (activePage) => {
  for (let i = 0; i < studentList.length; i++) {
    studentList[i].style.display = 'none';
    if (i < activePage * 10 && i >= (activePage * 10) - 10) {
      studentList[i].style.display = 'block';
      studentList[i].querySelector('.student-details h3').style.textTransform = 'capitalize';
    }
  }
};
showPage (activePage);


const appendPageLinks = () => {
  pageList = document.createElement('ol');
  pageList.classList.add('pagination');

  for (let i = 0; i < studentPages; i++){
    let pageButton = document.createElement('li');
    let pageLink = document.createElement('a');
    pageLink.innerHTML = i + 1;
    if (pageLink.innerHTML == activePage){
      pageLink.classList.add('active');
    }
    pageButton.appendChild(pageLink);
    pageList.appendChild(pageButton);
  }

  pageList.addEventListener ('click', (event) => {
    if (event.target.tagName === 'A') {
      pageList.querySelectorAll('a')
      .forEach ( (e) => {
        e.classList.remove('active');
      });
      event.target.classList.add('active');
      event.target.setAttribute('href', '#');
      activePage = event.target.innerHTML;
      showPage(activePage);
    }
  }, false);

  divPage.appendChild(pageList);
}
appendPageLinks ();


// Search engine
const searchBar = document.createElement ('div');
searchBar.classList.add('student-search');
const searchInput = document.createElement('input');
searchInput.setAttribute('placeholder', 'Search for students...');
searchBar.appendChild(searchInput);
document.querySelector('.page-header').appendChild(searchBar);

searchInput.addEventListener ('keyup', (foundStudents) => {

  let userInput = searchInput.value.toLowerCase();
  if (userInput !== '') {
    // studentsList;
    for (let i = 0; i < studentList.length; i++) {
      studentList[i].style.display = 'none';
      pageList.style.display = 'none';
      let studentName = document.querySelectorAll('.student-details h3')[i].innerText;
      if (studentName.includes(userInput)) {
        studentList[i].style.display = 'block';
      }
    }
  } else {
    showPage (activePage);
    appendPageLinks ();
  }
}, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
