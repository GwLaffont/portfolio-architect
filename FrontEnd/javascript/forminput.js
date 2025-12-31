// Fetching project categories from the database

async function categoryFetch () {
    //making a 'fetch' request to obtain the 'categories' from the API
    let response = await fetch("http://localhost:5678/api/categories");
    //request result in json format
    let categories = await response.json(); // Holds the array of data
    let categoryLength = categories.length;

    console.log("categories:", categories)
    console.log("category length:", categoryLength);


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

// Setting up variables

const form = document.getElementById('uploadForm');
const submitButton = document.getElementsByClassName('addWork')[0];
const fileInput = document.querySelector('#uploadInput').value;
const title = document.querySelector('#workTitle').value;
const workSelect = document.getElementById('work-select').value;



//disabing the submit button
submitButton.disabled = true;


//styling the disabled button: Color doesn't really change?
if (submitButton.disabled === true) {
    submitButton.style.background = '#A7A7A7';
} else if (submitButton.disabled === true) {
    submitButton.style.background = '#1D6154';
};

form.addEventListener('keypress', () => {
    if (fileInput === "" && title === "" && workSelect === "") {
        submitButton.disabled = false
    }
})
