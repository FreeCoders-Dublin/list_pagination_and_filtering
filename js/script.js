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

let studentsList = document.querySelectorAll('.student-item');


/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.
   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/

const showPage = (min,max) => {
  studentsList.forEach(student => student.style.display = '');
  Array.from(studentsList) // needed to use filter on a Node array
  .filter((student, index) => index < min || index >= max)
  .forEach(student => student.style.display = 'none');
};

const numberPages =  Math.ceil((studentsList.length) / 10);

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

const appendPageLinks = (pages) => {
  let listButtons = document.createElement("ol");
  listButtons.className = 'pagination';
  var counter = 0;
  do{
  counter ++;
  let li = document.createElement("li");
  li.innerHTML = `<a href="#">${counter}</a>`;

  listButtons.appendChild(li);
  } while(counter < pages);

  document.querySelector('.page').appendChild(listButtons);
}

// const createListButtons = () => {
//   let listButtons = document.createElement("ol");
//   listButtons.className = 'pagination';
// }

// const createButton = () => {
//   let li = document.createElement("li");
//   li.innerHTML = `<a class="active"></a>`;
// }


appendPageLinks(numberPages);
showPage(0, 10);
document.querySelector('a').className = 'active';

document.querySelectorAll('a').forEach(button => button.addEventListener(
  "click", event => {
    document.querySelectorAll('a').forEach(button => button.classList.remove('active'));
    let firstElement = event.target.innerText * 10 - 10;
    console.log(firstElement);
    showPage(firstElement, firstElement + 10);
    event.target.className = 'active';
  }
));

const setUp = () => {
  appendPageLinks(numberPages);
  showPage(0, 10);

}



// setUp();
// Remember to delete the comments that came with this file, and replace them with your own code comments.