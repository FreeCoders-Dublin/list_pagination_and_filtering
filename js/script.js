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
let allStudents = document.querySelectorAll('.student-item');
const studentPages = Math.ceil(allStudents.length / 10);
let studentList = document.querySelector('.student-list');
let pageList = document.querySelector('.pagination');
const divPage = document.querySelector('div.page');
let activePage = 1;
const studentNames = document.querySelectorAll('.student-details h3');
const studentEmails = document.querySelectorAll('.student-details .email');

// Search engine
const searchBar = document.createElement ('div');
searchBar.classList.add('student-search');
const searchInput = document.createElement('input');
searchInput.setAttribute('placeholder', 'Search for students...');
searchBar.appendChild(searchInput);
const header = document.querySelector('.page-header').appendChild(searchBar);

let userInput = searchInput.value.toLowerCase();



// Page Link Creation
const appendPageLinks = (studentPages) => {
  pageList = document.createElement('ol');
  pageList.classList.add('pagination');

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
  pageList.addEventListener ('click', (event) => {
    if (event.target.tagName === 'A') {
      pageList.querySelectorAll('a')
      .forEach ( (e) => {
        e.classList.remove('active');
      });
      event.target.classList.add('active');
      activePage = event.target.innerHTML;
      showPage(activePage, allStudents);
    }
  }, false);
  divPage.appendChild(pageList);
};

// Append Pages
appendPageLinks (studentPages);


// Add students to page function
const showPage = (activePage, allStudents) => {
  for (let i = 0; i < allStudents.length; i++) {
    let studentName = studentNames[i].innerText;
    let studentEmail = studentEmails[i].innerText;
    let userInput = searchInput.value.toLowerCase();
    console.log(userInput);
    if (studentName.includes(userInput) || studentEmail.includes(userInput)) {
      allStudents[i].classList.add('visible')
    } else if (allStudents[i].classList.contains('visible')) {
      allStudents[i].classList.remove('visible')
    }
    allStudents[i].style.display = 'none';
  }
  let visibleStudents = document.querySelectorAll('li.visible');
  for (let i = 0; i < visibleStudents.length; i++) {
    if (i < activePage * 10 && i >= (activePage * 10) - 10) {
      visibleStudents[i].style.display = 'block';
      visibleStudents[i].querySelector('.student-details h3').style.textTransform = 'capitalize';
    }
  }
};
showPage (activePage, allStudents);


searchInput.addEventListener ('keyup', (foundStudents) => {
  if (userInput !== '') {
    showPage (activePage, allStudents);
  } else {
    showPage (activePage, allStudents);
  }
}, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
