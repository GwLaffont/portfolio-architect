//creating the miniature pictures within the gallery

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
        // Creating the test items
        //Picture
        let image = document.createElement("img");
        image.src = workImg;
        //Bin picture here later
        //attaching the test items
        gallery.appendChild(workCreation);
        workCreation.appendChild(image);
        workCreation.classList.add("minipic");
    };


};
gallery();
