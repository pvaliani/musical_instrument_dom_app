document.addEventListener('DOMContentLoaded', () => {


  
    const form = document.querySelector('#new-item-form');
    form.addEventListener('submit', handleFormSubmit);
  
    const deleteButtonItem = document.createElement('button');
    deleteButtonItem.id = 'delete';
    deleteButtonItem.textContent = "delete all"
    document.body.appendChild(deleteButtonItem);
  
    const button = document.querySelector('#delete');
    button.addEventListener('click', handleButtonClick);
  
  })
  
  
  const handleFormSubmit = function (event) {
  
    // Stops the post request from completing so results can be viewed
    event.preventDefault();
  
    const owner = event.target.owner.value
    const model = event.target.model.value
    const type = event.target.type.value
  
    // create li element i.e list
    // 
  
    const newListItem = document.createElement('li');
    newListItem.id = "results";
  
    // Owner
    const newOwnerItem = document.createElement('h2');
    newOwnerItem.textContent = `Owner: ${owner}`;
    newListItem.appendChild(newOwnerItem);
  
    // Model
    const newModelItem = document.createElement('h3');
    newModelItem.textContent = `Model: ${model}`;
    newListItem.appendChild(newModelItem);
  
    // Instrument Type
  
    const newInstrumentType = document.createElement('h4');
    newInstrumentType.textContent = `Instrument Type: ${type}`;
    newListItem.appendChild(newInstrumentType);
  
    // Selects the instrument list to the be appended
    const instrumentList = document.querySelector("#instrument-list");
  
    // Append the full list of owner, model and instrument to the instrument list
    instrumentList.appendChild(newListItem);

    // Resets the form
    event.target.reset();
  };
  
  
  const handleButtonClick = function (event) {
    const instrumentList = document.querySelector("#instrument-list");
    instrumentList.textContent = "";
  

  
    
  };