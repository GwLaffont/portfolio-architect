// Set variables

const addPhoto = document.querySelector(".add-photo-form");
let newPhoto = document.getElementById('input').value;
let newTitle = document.getElementById('workTitle').value;
let newType = document.getElementById('work-select').value;


//Add event listener to the form

addPhoto.addEventListener('submit', (event) => {
    //prevent form's default behaviour url change
    event.preventDefault();
    //create new item
    const createWork = {
        categoryId: newType,
        title: newTitle,
    };
    console.log(createWork);
})