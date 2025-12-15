// Fetching project categories form the database

async function categoryFetch () {
    //making a 'fetch' request to obtain the 'categories' from the API
    let response = await fetch("http://localhost:5678/api/categories");
    //request result in json format
    let categories = await response.json(); // Holds the array of data
    let categoryLength = categories.length;

    console.log("categories:", categories)
    console.log("category length:", categoryLength);
    
    /*
    //Setting up a collector array

    const collector = [];

    // Fetch the different worktypes within the works database : Doesn't extract a category if a type is deleted?
    for (i = 0; i < worksLength; i++) {
        //Collecting work types from the request result
        let workType = works[i].categoryId;
        //Pushing the results in the collector array
        let count = collector.push(workType);
    };
    
    console.log("collector array:", collector);

    //Sorting out unique values in a new array
    let unique = [...new Set(collector)];

    console.log("Sorted Array:", unique);
    */

    //Setting up the target area for insertion
    const targetArea = document.getElementById('work-select');

    // Setting up a for loop to process the contents of the array
    for (i = 0; i < categoryLength; i++) {

        //Creating a container for each option
        const optionCreation = document.createElement("option");

        //Extracting the values from the array
        let variableID = categories[i].id;
        let variableName = categories[i].name;
        let name = document.createElement("p");
        name.innerText = variableName;

        //Inserting the containers in the targeted area
        targetArea.appendChild(optionCreation);

        //Attaching the values to the created containers
        optionCreation.appendChild(name);
        optionCreation.id = variableID;
        

    };
};
categoryFetch();



/*
//Checking the form for input

function checkInput () {

    //setting up the variables
    
    //disabling the submit button
    //submitButton.disabled = true

    const formElements = document.forms["uploadForm"].elements;

    if (imgSubmit === 0) {
        submitButton.disabled = true;
        return
    }
    else if (titleSubmit === 0 ) {
        submitButton.disabled = true;
        return
    }
    else if (categorySelect === 0) {
        submitButton.disabled = true;
        return
    }



    
};
checkInput()*/

// Setting up variables

const form = document.getElementById('uploadForm');
const submitButton = document.getElementsByClassName('addWork')[0];
const fileInput = document.querySelector('#uploadInput').value;
const title = document.querySelector('#workTitle').value;
const workSelect = document.getElementById('work-select').value;



//disabing the submit button
submitButton.disabled = true;

/*
//styling the disabled button: Color doesn't really change?
if (submitButton.disabled === true) {
    submitButton.style.background = '#A7A7A7';
} else if (submitButton.disabled === true) {
    submitButton.style.background = '#1D6154';
}*/

form.addEventListener('keypress', () => {
    if (fileInput === "" && title === "" && workSelect === "") {
        submitButton.disabled = false
    }
})

//Testing the button
 /*
submitButton.addEventListener('click', () => {
    console.log("test test");
    console.log("testing values:", fileInput);
})*/