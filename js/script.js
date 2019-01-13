/******************************************
Luca Tardito
FSJS project 2 - List Filter and Pagination
******************************************/

let studentsList = document.querySelectorAll('.student-item');

// input: 2 numbers - output: none - functionality: it hides students not in the range min,max
const showPage = (min,max) => {
  studentsList.forEach(student => student.style.display = '');
  Array.from(studentsList)           // needed to use filter on a Node array
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