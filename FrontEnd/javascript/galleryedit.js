

// getting the token out of the localstorage
const token = localStorage.getItem('userID');
//console.log(token);

//Selection by delegation
let miniGallery = document.getElementsByClassName('mini-gallery')[0];

//Creating Holder values
let deleteID;

miniGallery.addEventListener('click', async (e) => {
    if (e.target.classList.contains('minipic')) {
        
        //Obtained clicked item's ID
        let targetID = e.target.id;
        console.log("Clicked minipic with ID:", targetID);

        let originalTarget = targetID.replace("-mod", "");

        //Calling the deletion function
        deletion(originalTarget);

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
    //fetching the id of target element
    let element = e.target.id;
    //getting the ID of the original element
    let elemeReplace = element.replace("-mod", "");
    console.log("Extracted ID:", elemeReplace);
    // Fetching the corresponding gallery element
    let mainID = document.querySelector(`#${CSS.escape(elemeReplace)}`);
    console.log(mainID);
    //using the remove function
    mainID.remove();

};

// Creating an async function to work with the server
async function deletion (originalTarget) {

    //creating target's URL
    let deleteTarget = "http://localhost:5678/api/works" + "/" + originalTarget;

    //Selecting the target's URL
    const response = await fetch( deleteTarget , {
        //Choosing the method
        method : "DELETE",
        headers : {
        //Declaring the authorization
        "Authorization": `Bearer ${token}`
        }
    });
    console.log(response);
}


//Creating preview image
const preview = document.querySelector("img");
const imgInput = document.getElementById('uploadInput');


imgInput.addEventListener("change", () => {

    //Selecting target to generate preview image
    const imgPreview = document.getElementById('img-output');

    //Rendering preview image
    imgPreview.src = URL.createObjectURL(event.target.files[0]);

});


//Declaring the variable for the form
const formInfo = document.getElementById('uploadForm')

//Making the submit button functionnal
formInfo.addEventListener("submit", (event) => {
    
    //deactivating auto-refresh
    event.preventDefault();
    //creating new work
    createWork();
})

// Sending new works to the database
async function createWork() {

    //Extracting the title
    const title = document.querySelector('#workTitle').value;
    //console.log("title:", title)

    //Extracting item category
    const workSelect = document.getElementById('work-select').value;
    //console.log("selected work:", workSelect);


    //Extracting the image from the form
    const fileInput = document.querySelector('#uploadInput');
    const file = fileInput.files[0];
    if (!file) {
        alert("Veuillez sélectionner une image.");
        return;
    };
    //console.log("Image file", file);

    //Turning it into a FormData object
    const sendData = new FormData();
    sendData.append('image', file);
    sendData.append('title', title);
    sendData.append('category', workSelect);
    console.log("Form Data:", sendData);
    console.log("Token:", token);

    //Selecting the target's URL
    const createdWork = await fetch("http://localhost:5678/api/works", {
        //Choosing the method
        method: "POST",
        headers: {
            //Declaring the authorization
            "Authorization": `Bearer ${token}`,
            //"Content-Type": "application/json",
        },
        body: sendData, 
    });
    console.log(createdWork);
    
    if (!createdWork.ok) {
        const error = await createdWork.json();
        console.error("Server error:", error);
        throw new Error(`Erreur HTTP: ${createdWork.status}`);
    }



}



