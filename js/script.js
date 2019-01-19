
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
//prendi tutti gli elementi studente dalla pagina
const allItems = document.querySelectorAll('.student-item');
//crea un numero di pagine corrispondente a quanti elementi sono nella lista
const numeroPagine = Math.floor(allItems.length / 10) + 1;
//crea un elemento lista 
const listBottom = document.createElement("ol"); 
//aggiungo la classe pagination
listBottom.classList.add('pagination');
//creo tanti <li> quanti numeroPagine e gli inserisco il numero corrispondente
for(let i = 1; i <= numeroPagine; i++ ) {
  let li = document.createElement("li");
  let a =  document.createElement("a");
  let newNumber = document.createTextNode(`${i}`)
  a.appendChild(newNumber);
  li.appendChild(a);
  listBottom.appendChild(li);
}
//aggiungo la lista di pulsanti alla pagina
document.querySelector('.page').appendChild(listBottom);
//seleziono la lista di pulsanti
const linksPagination = document.querySelectorAll('.pagination a');



10 




const showPage = (list, page) => {
  //loop over the list parameter
  for(let i = 0; i < list.length; i++) {
    if (i > page * 10 && i < (page * 10) - 10) {
      allItems[i].classList.add('hide');
    }
  } 
}


for(let i = 0; i < linksPagination.length; i++) {
//aggiungo la classe active al primo on page load 
showPage(allItems, 1);
linksPagination[0].classList.add('active');
//quando clikko su un pulsante
 linksPagination[i].addEventListener('click', ()=>{
      //rimuovo active da tutti  
      linksPagination.forEach((item)=>{
                item.classList.remove('active');
       });
//aggiungo active a quello cliccato
   linksPagination[i].classList.add('active');  
   //richiamo la funzione showpage con i come parametro
   let currentPage = (i + 1); 
   console.log(currentPage);
   
 });
}


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




/***
   Create the `appendPageLinks function` to generate, append, and add
   functionality to the pagination buttons.
***/





// Remember to delete the comments that came with this file, and replace them with your own code comments.

