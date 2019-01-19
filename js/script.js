/******************************************
Treehouse Techdegree:
Valerio - List Filter and Pagination
******************************************/

//Add your global variables that store the DOM elements you will 
//need to reference and/or manipulate. 

let studentList = document.querySelectorAll('.student-item');
let visiblePage = 1;
let numberPages = Math.ceil((studentList.length) / 10);


//Create the `showPage` function to hide all of the items in the 
//list except for the ten you want to show.

function showPage(visiblePage) {
   for (i=0; i <studentList.length; i++) {
      if (i < visiblePage * 10 && i >= (visiblePage * 10) - 10) {
      studentList[i].style.display = '';
   }  else {
      studentList[i].style.display = 'none';
   }
 }
};

showPage(visiblePage);

//Create the `appendPageLinks function` to generate, append, and add 
//functionality to the pagination buttons.

const appendPageLinks = (pages) => {
   let listButtons = document.createElement('ol');
   listButtons.className = 'pagination';
   var counter = 0;
   do {
   counter ++;
   let li = document.createElement('li');
   li.innerHTML = `<a href='#'>${counter}</a>`;
   listButtons.appendChild(li); 
   } while (counter < pages) 

   document.querySelector('.page').appendChild(listButtons);
}

appendPageLinks(numberPages);
document.querySelector('a').className = 'active';

document.querySelectorAll('a').forEach(button => button.addEventListener(
   'click', (event) => {
   document.querySelectorAll('a').forEach(button => button.classList.remove('active'));
   visiblePage = event.target.innerText;
   showPage(visiblePage);
   event.target.className = 'active';
   }
));