/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
/***** Elements in HTML *****/
const divPage = document.querySelector('div.page');
const header = document.querySelector('.page-header');
const studentList = document.querySelector('.student-list');
const allStudents = document.querySelectorAll('.student-item');
const studentNames = document.querySelectorAll('.student-details h3');
const studentJoinDates = document.querySelectorAll('.date');


/***** Initial page *****/
let studentPages = Math.ceil(allStudents.length / 10);
let activePage = 1;


/***** Dynamic search engine as you type *****/
const searchBar = document.createElement ('div');
searchBar.classList.add('student-search');
const searchInput = document.createElement('input');
searchInput.setAttribute('placeholder', 'Search for students...');
searchBar.appendChild(searchInput);
header.appendChild(searchBar);
let userInput = searchInput.value.toLowerCase();
// Error message when search doesn't find anything
let errorMessage = document.createElement ('h2');
errorMessage.innerText = 'No students match your criteria :-(';
errorMessage.style.display = 'none';
divPage.appendChild(errorMessage);


/***** Page list with links *****/
const appendPageLinks = () => {
  let pageList = document.createElement('ol');
  pageList.classList.add('pagination');

  // Creates amount of pages based on number of students
  for (let i = 0; i < studentPages; i++){
    let pageButton = document.createElement('li');
    let pageLink = document.createElement('a');
    pageLink.innerHTML = i + 1;
    pageLink.setAttribute('href', '#');
    if (pageLink.innerHTML == activePage){
      pageLink.classList.add('active');
    }
    pageButton.appendChild(pageLink);
    pageList.appendChild(pageButton);
  }

  // Adds event listeners to the pages, using the number inside to set Active page
  pageList.addEventListener ('click', (event) => {
    if (event.target.tagName === 'A') {
      pageList.querySelectorAll('a')
      .forEach ( (e) => {
        e.classList.remove('active');
      });
      event.target.classList.add('active');
      activePage = event.target.innerHTML;
      showPage();
    }
  }, false);

  // Appends child to the div to then be removed everytime you search
  divPage.appendChild(pageList);
};


/***** Appends Pages on first page load *****/
appendPageLinks ();


/***** Shows students on each page *****/
const showPage = () => {
  // Checks the new input
  userInput = searchInput.value.toLowerCase();

  // Adds class visibile to students matching search
  for (let i = 0; i < allStudents.length; i++) {
  	allStudents[i].style.display = 'none';
  	if (allStudents[i].classList.contains('visible')) {
  	allStudents[i].classList.remove('visible');
    }
    if (studentNames[i].innerText.includes(userInput) || studentJoinDates[i].innerText.includes(userInput)) {
      allStudents[i].classList.add('visible');
<<<<<<< HEAD
      // highlightSpan = `<span class="highlight">${userInput}</span>`;
      // highlightSpan = studentNames[i].innerHTML.replace(userInput, highlightSpan);
      // studentNames[i].innerHTML = highlightSpan;
    } else if (allStudents[i].classList.contains('visible')) {
      allStudents[i].classList.remove('visible')
=======
>>>>>>> a49ad6c069a99a98f4fe9e4c4319f7d24ac3e36b
    }
  };

  // Selects all new visibile students
  let visibleStudents = document.querySelectorAll('li.visible');

  // Display error message if there are no students matching search
  if (visibleStudents.length === 0) {
    errorMessage.style.display = 'block';
  } else {
    errorMessage.style.display = 'none';
  }

  // With the new index of visibile, it displays users according to activePage
  for (let i = 0; i < visibleStudents.length; i++) {
    if (i < activePage * 10 && i >= (activePage * 10) - 10) {
      visibleStudents[i].style.display = 'block';
      visibleStudents[i].querySelector('.student-details h3').style.textTransform = 'capitalize';
    }
  };


  // Returns a new total of pages based on visible students after Search
  studentPages = Math.ceil(visibleStudents.length / 10);
};


/***** Shows Page on page load, since input is '' then it shows them all *****/
showPage ();


/***** Adds event listener to search input *****/
searchInput.addEventListener ('keyup', () => {
    activePage = 1;
    showPage ();
    divPage.removeChild(pageList);
    appendPageLinks ();
}, false);
