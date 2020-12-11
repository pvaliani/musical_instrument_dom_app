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
  
    // stops the post request
    event.preventDefault();
  
    const owner = event.target.owner.value
    const model = event.target.model.value
    const type = event.target.type.value
  
    // create li element i.e list
    // 
  
    const newListItem = document.createElement('li');
  
    // Title
    const newOwnerItem = document.createElement('h2');
    newOwnerItem.textContent = `Owner: ${owner}`;
    newListItem.appendChild(newOwnerItem);
  
    // Author
    const newModelItem = document.createElement('h3');
    newModelItem.textContent = `Model: ${model}`;
    newListItem.appendChild(newModelItem);
  
    // Category
  
    const newInstrumentType = document.createElement('h4');
    newInstrumentType.textContent = `Instrument Type: ${type}`;
    newListItem.appendChild(newInstrumentType);
  
  
    const instrumentList = document.querySelector("#instrument-list");
  
  
    instrumentList.appendChild(newListItem);
    event.target.reset();
  };
  
  
  const handleButtonClick = function (event) {
    const instrumentList = document.querySelector("#instrument-list");
    instrumentList.textContent = "";
  

  
    
  };