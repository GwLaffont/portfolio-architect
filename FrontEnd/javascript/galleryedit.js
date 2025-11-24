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
        workCreation.id = workID;
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

miniGallery.addEventListener('click', (e) => {
    if (e.target.classList.contains('minipic')) {
        console.log('deletion!!!');
        //Obtained clicked item's ID
        let targetID = e.target.id;
        console.log( "http://localhost:5678/api/works" + "/" + targetID);
        //creating target's URL
        let deleteTarget = "http://localhost:5678/api/works" + "/" + targetID;
        console.log(deleteTarget);

        /*
        let erase = {
            method: "DELETE",
            headers: {
                header: 'content-type: application/json',
                authorization: 'Bearer ${token}',
            }
            
        };
        

        fetch(deleteTarget, erase);*/
        
        // Creating an async function to work with the server
        async function deletion () {
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
        deletion(); // DOesn't actualize to show the new picture list
        
    }
})