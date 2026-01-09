// Fetching project categories from the database

async function categoryFetch () {
    //making a 'fetch' request to obtain the 'categories' from the API
    let response = await fetch("http://localhost:5678/api/categories");
    //request result in json format
    let categories = await response.json(); // Holds the array of data
    let categoryLength = categories.length;



    //Setting up the target area for insertion
    const targetArea = document.getElementById('work-select');

    // Clear any existing options
    targetArea.innerHTML = '';

    // Add a default option
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "Sélectionnez une catégorie";
    targetArea.appendChild(defaultOption);

    // Loop through categories
    categories.forEach(category => {
        const option = document.createElement("option");
        option.value = category.id; // Set value to the category ID
        option.textContent = category.name; // Set text to the category name
        targetArea.appendChild(option);
    });
};
categoryFetch();


// Locking up the submit button
// Setting up variables for the lock

const form = document.getElementById('uploadForm');
const submitButton = document.getElementsByClassName('addWork')[0];
const fileInput = document.querySelector('#uploadInput');
const titleInput = document.querySelector('#workTitle');
const workSelect = document.getElementById('work-select');
const label = document.querySelector('.photoLabel');

// Checking the form as it updates
function checkForm(){
    const fileSelected = fileInput.files.length > 0;
    const titleFilled = titleInput.value.trim() !== '';
    const categorySelected = workSelect.value !== '';

    if (fileSelected && titleFilled && categorySelected) {
        submitButton.disabled = false;
        submitButton.style.background = '#1D6154';
    } else {
        submitButton.disabled = true;
        submitButton.style.background = '#A7A7A7';
    }
}

// Disable button by default
submitButton.disabled = true;
submitButton.style.background = '#A7A7A7';

// Listen for changes on all relevant fields
form.addEventListener('input', checkForm);
fileInput.addEventListener('change', checkForm);
workSelect.addEventListener('change', checkForm);

//Hiding label contents when file is selected

fileInput.addEventListener('change', () => {
    const elementsToHide = label.querySelectorAll('.photoLogo, .addPhoto, .photoType');
    elementsToHide.forEach(el => el.style.display = 'none');
});

// Showing the label contents again once the form is cleared

submitButton.addEventListener('click', () => {
    const elementsToShow = label.querySelectorAll('.photoLogo, .addPhoto, .photoType');
    elementsToShow.forEach(el => el.style.display = 'block');
})
