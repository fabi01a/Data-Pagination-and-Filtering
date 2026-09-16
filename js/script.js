/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*
Would love some feedback on my comments - would it make more sense to have them in present terms
instead of past? I'd like to turn the extra credit portion of this assignment in at a later time,
not for points but for the experience and feedback, if possible. Thank you!

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list, page) {
   // created two variables that will represent the index for the first
   const startIndex = (page * 9) - 9;
   // and last student on the pagea
   const lastIndex = page * 9;
  // created a variable to select the element with a class of `student-list
   const studentList = document.querySelector('.student-list');
  // set the innerHTML property of studentList to an empty string
   studentList.innerHTML = '';
  // loop over the length of the `list` parameter
   for(let i = 0; i < list.length;i++) {
    // inside the loop - created a conditional to display the proper students
      // inside the conditional:
      if (i >= startIndex && i < lastIndex) {
         // created the elements needed to display the student information
         const studentItem = `
            <li class="student-item cf">
               <div class="student-details">
                  <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
                  <h3>${list[i].name.first} ${list[i].name.last}</h3>
                  <span class="email">${list[i].email}</span>
               </div>
               <div class="joined-details">
                  <span class="date">Joined ${list[i].registered.date}</span>
               </div>
            </li>
         `;
         // inserted the above elements
         studentList.insertAdjacentHTML('beforeend', studentItem);
      }
   }
}

/*
The `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list) {
   // created a variable to calculate the 9 number of pages needed
   const numOfPages = Math.ceil(list.length / 9);
  // created a variable to select the element with a class of `link-list`
   const linkList = document.querySelector('.link-list');
  // set the innerHTML property of linkList to an empty string
   linkList.innerHTML = '';
  // loop over the number of pages needed
   for(let i = 1; i <= numOfPages;i++) {
       // created a variable to contain the elements needed to display the pagination button
      const button = `
         <li>
            <button type="button">${i}</button>
         </li>`;
      // inserting the above elements
      linkList.insertAdjacentHTML('beforeend', button);
   }
   // created a variable holding the first pagination button a class of "active"
   const firstButton = linkList.querySelector('button');
   firstButton.className = 'active';
   // created an event listener on the `link-list` element
   linkList.addEventListener('click', (event) => {
      // if the click target is a button:
      if (event.target.tagName === 'BUTTON') {
         //selecting the currently active pagination button
         const activeButton = linkList.querySelector('.active');
         // remove the "active" class from the previous button by updating to an empty string
         activeButton.className = '';
         // add the active class to the clicked button
         event.target.className = 'active';
         // call the showPage function passing the `list` parameter and page to display as arguments
         showPage(list, event.target.textContent);
      }
   });
}



// Call functions
showPage(data, 1);
addPagination(data);