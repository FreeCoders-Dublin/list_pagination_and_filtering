/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
// Elements in HTML
let allStudents = document.querySelectorAll('.student-item');
let studentList = document.querySelector('.student-list');
let pageList = document.querySelector('.pagination');
const divPage = document.querySelector('div.page');

// Global Varial
let studentPages = Math.ceil(allStudents.length / 10);
let activePage = 1;

// Search engine
const searchBar = document.createElement ('div');
searchBar.classList.add('student-search');
const searchInput = document.createElement('input');
searchInput.setAttribute('placeholder', 'Search for students...');
searchBar.appendChild(searchInput);
const header = document.querySelector('.page-header').appendChild(searchBar);

let userInput = searchInput.value.toLowerCase();



// Page Link Creation
const appendPageLinks = () => {
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
      showPage();
    }
  }, false);
  divPage.appendChild(pageList);
};

// Append Pages
appendPageLinks ();


// Add students to page function
const showPage = () => {
  const studentNames = document.querySelectorAll('.student-details h3');
  const studentEmails = document.querySelectorAll('.student-details .email');
  const studentJoinDates = document.querySelectorAll('.date');
  userInput = searchInput.value.toLowerCase();

  for (let i = 0; i < allStudents.length; i++) {
    if (studentNames[i].innerText.includes(userInput) || studentEmails[i].innerText.includes(userInput) || studentJoinDates[i].innerText.includes(userInput)) {
      allStudents[i].classList.add('visible')
    } else if (allStudents[i].classList.contains('visible')) {
      allStudents[i].classList.remove('visible')
    }
    allStudents[i].style.display = 'none';
  };

  let visibleStudents = document.querySelectorAll('li.visible');

  for (let i = 0; i < visibleStudents.length; i++) {
    if (i < activePage * 10 && i >= (activePage * 10) - 10) {
      visibleStudents[i].style.display = 'block';
      visibleStudents[i].querySelector('.student-details h3').style.textTransform = 'capitalize';
    }
  };

  studentPages = Math.ceil(visibleStudents.length / 10);
};

showPage ();


searchInput.addEventListener ('keyup', () => {
    activePage = 1;
    showPage ();
    divPage.removeChild(pageList);
    appendPageLinks ();
}, false);
