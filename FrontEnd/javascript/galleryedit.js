//creating the miniature pictures within the gallery from the database

async function gallery() {
    //making a 'fetch' request to obtain the 'works' from the API
    let response = await fetch("http://localhost:5678/api/works");
    //request result in json format
    let works = await response.json(); // Holds the array of data

    //selecting the target container for the pictures
    let gallery = document.getElementsByClassName('mini-gallery')[0];

    //creating variable to determine for loop length
    let worksLength = works.length;

    //generating the pictures
    for (i = 0; i < worksLength; i++) {
        //creation of a container for each article
        const workCreation = document.createElement("figure");
        let workImg = works[i].imageUrl; // Transcribes item Picture
        let workID = works[i].id; // Transcribes item ID
        // Creating the test items
        //Picture
        let image = document.createElement("img");
        image.src = workImg;
        //Bin picture here later
        //attaching the test items
        gallery.appendChild(workCreation);
        workCreation.appendChild(image);
        workCreation.classList.add("minipic");
        workCreation.id = workID + "-mod";
        //Set a different ID
    };

};
gallery();

//Selecting the works
/*
let projects = document.querySelectorAll('.minipic');
console.log('projects: ', projects);

projects.forEach( item => {
    item.addEventListener('click', event => {
        console.log('clicked this!')
    })
})
*/

// getting the token out of the localstorage
const token = localStorage.getItem('userID');
console.log(token);

//Selection by delegation
let miniGallery = document.getElementsByClassName('mini-gallery')[0];

//Creating Holder values
let deleteID;

miniGallery.addEventListener('click', (e) => {
    if (e.target.classList.contains('minipic')) {

        //Obtained clicked item's ID
        let targetID = e.target.id;

        //creating target's URL
        let deleteTarget = "http://localhost:5678/api/works" + "/" + targetID;

        //Filling the holder with the deletion address
        deleteID = deleteTarget;

        //Calling the deletion function
        deletion();

        //Deleting HTML elements from the miniature gallery
        miniRemove(e);

        //Deleting elements from the main gallery
        galleryRemove(e);
        
    }
})

//Removing Mini Gallery Element
function miniRemove(e){
    //naming the target element
    let element = e.target;
    //using the remove function
    element.remove();
}

//Removing Main Gallery Element
function galleryRemove(e){
    //fetchign the id of target element
    let element = e.target.id;
    console.log(element);
    //getting the ID of the original element
    let elemeReplace = element.replace("-mod", "");
    console.log(elemeReplace);
    // Fetching the corresponding gallery element
    let mainID = document.querySelector(`#${CSS.escape(elemeReplace)}`);
    console.log(mainID);
    //using the remove function
    mainID.remove();

};

/*
//Removing elements from the main gallery
function galleryRemove(e){
    
    //getting the ID from the selected miniature picture
    let mainID = e.target.id;
    let mainTarget = document.getElementById(mainID);
    console.log(mainID);
    console.log(mainTarget);
    //targetting the corresponding picture from the main gallery
    return mainTarget.parentNode.removeChild(mainTarget);

    Only affects mini Gallery
    
    let mainID = e.target.id;
    //let container = document.getElementsByClassName("gallery")[0];
    //let deletionTarget = container.getElementById(mainID);
    let container = document.querySelector(".gallery");
    let deletionTarget = container.getElementById(`#${CSS.escape(mainID)}`)
    console.log(deletionTarget);
    deletionTarget.style.display = 'none';
    
    //originTarget.style.display = 'none';
}*/


// Creating an async function to work with the server
async function deletion () {
    //Selecting the target's URL
    const response = await fetch( deleteID , {
        //Choosing the method
        method : "DELETE",
        headers : {
        //Declaring the authorization
        "Authorization": `Bearer ${token}`
        }
    });
    console.log(response);
}


// Sélectionne l'élément
//const element = document.getElementById('monId');

// Supprime directement l'élément du DOM
//element.remove();


//Creating preview image
const preview = document.querySelector("img");
const imgInput = document.getElementById('uploadInput');


imgInput.addEventListener("change", () => {

    //Selecting target to generate preview image
    const imgPreview = document.getElementById('img-output');

    //Rendering preview image
    imgPreview.src = URL.createObjectURL(event.target.files[0]);

});


/*
imgInput.addEventListener("change", () => {
    //target input
    const file = imgInput.files[0];
    //clear previous input
    imgPreview.textContent = ""; 
    // Read the file
    const reader = new FileReader();

    reader.addEventListener("load", () => {
        // convert image file to base64 string
        preview.src = reader.result;
    });

  if (file) {
    reader.readAsDataURL(file);
  }
})
*/

//Declaring the variable for the form

const formInfo = document.getElementById('uploadForm')

//Making the submit button functionnal
formInfo.addEventListener("submit", () => {
    
    //deactivating auto-refresh
    event.preventDefault();
    //creating new work

    /*
    newWork = {
        title: event.target.querySelector("[name=work-title]").value,
        image: event.target.querySelector("[name=work-photo]").value, //send picture instead of string (see Formdata?)
        category: selectedWork,
    };
    */
    //Generating dropdown menu information
    
    //console.log(newWork);
    //Turning the contents of the new work into strings
    //const workString = JSON.stringify(newWork);

    //createWork(workString);

    createWork();
})



// Sending new works to the database
async function createWork() {

    //Extracting the image from the form
    const fileInput = document.querySelector('#uploadInput');
    const file = fileInput.files[0];
    console.log("Image file", file);

    //Turning it into a FormData object
    const formData = new FormData();
    formData.append('image', file);
    console.log("Form Data:", formData);

    //Extracting the title
    const title = document.querySelector('#workTitle').value;
    console.log("title:", title)

    //Extracting item category
    const workSelect = document.getElementById('work-select').value;
    console.log("selected work:", workSelect);

    console.log("token:", token);

    //creating the body of the sent object
    const newWork = {
        title: title,
        image: formData,
        category: workSelect,
    };

    //Selecting the target's URL
    const createdWork = await fetch("http://localhost:5678/api/works", {
        //Choosing the method
        method: "POST",
        headers: {
            //Declaring the authorization
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newWork)
    });
    console.log(createdWork);
    
}


// collecting form info using formdata

