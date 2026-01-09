
// Creating the maing Gallery for works
async function createGallery() {
    
    //making a 'fetch' request to obtain the 'works' from the API
    let response = await fetch("http://localhost:5678/api/works");
    //request result in json format
    let works = await response.json(); // Holds the array of data
    let worksLength = works.length; // Length = 11

    //Creating the container for the new articles
    const gallery = document.getElementsByClassName("gallery")[0];

    for (i = 0; i < worksLength; i++) {

        //creation of a container for each article
        const workCreation = document.createElement("figure");

        //Defining Varialbles within the array -- Test
        let workID = works[i].id; // Transcribes item ID
        let workImg = works[i].imageUrl; // Transcribes item Picture
        let workType = works[i].categoryId; // Transcribes item type/category
        let workName = works[i].title; // Transcribes item name

        // Creating the test items
        //Picture
        let image = document.createElement("img");
        image.src = workImg;
        //Name
        let name = document.createElement("figcaption");
        name.innerText = workName;

        //attaching the test items
        gallery.appendChild(workCreation);
        workCreation.appendChild(image);
        workCreation.appendChild(name);
        workCreation.id = workID;
        workCreation.classList.add("type" + workType);
        workCreation.classList.add("workItems");

    };
}
createGallery();


//Creating the miniature gallery
async function smallGallery() {
    //making a 'fetch' request to obtain the 'works' from the API
    let response = await fetch("http://localhost:5678/api/works");

    //request result in json format
    let works = await response.json(); // Holds the array of data

    //creating variable to determine for loop length
    let worksLength = works.length;

    //targeting container
    let miniGallery = document.getElementsByClassName('mini-gallery')[0];

    //generating the pictures (mini gallery)
    for (i = 0; i < worksLength; i++) {
        //creation of a container for each article
        let workCreation = document.createElement("figure");
        let workImg = works[i].imageUrl; // Transcribes item Picture
        let workID = works[i].id; // Transcribes item ID
        // Creating the test items
        //Picture
        let image = document.createElement("img");
        image.src = workImg;
        //attaching the test items
        miniGallery.appendChild(workCreation);
        workCreation.appendChild(image);
        workCreation.classList.add("minipic");
        workCreation.id = workID + "-mod";
        //Set a different ID
    };
}
smallGallery();