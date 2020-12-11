document.addEventListener('DOMContentLoaded', ()=>{

const form = document.querySelector('#new-item-form'); // listen for the new-item-form id
form.addEventListener('submit', handleFormSubmit); // when the submit i.e save button is clicked invoke the handleFormSubmit function

// create a delete button in here which has an event listener for when clicked

});


const handleFormSubmit = function(event) {

// stops the post request so that we can see our changes
event.preventDefault();



// resets the form
event.target.reset();

};