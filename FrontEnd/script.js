
//fetching tests
/*
async function showList() {

    //making a 'fetch' request to obtain the 'works' from the API
    let response = await fetch("http://localhost:5678/api/works");
    //request result in json format
    let works = await response.json(); // Holds the array of data
    let worksLength = works.length; // Length = 11

    console.log(works);
    console.log(worksLength);
};
showList();
*/



/*

const responseList = await fetch("http://localhost:5678/api/works");
const worksList =  await responseList.json();

console.log(worksList);

function fetchWorks(worksList) {
    
    for(i = 0; i < worksList.length; i++){
        //Isolating specific items in the array depending on i
        const articles = worksList[i];
        //Selecting the container for the new articles
        //const gallery = document.getElementsByClassName("gallery")[0];
        //creation of a container for each work
        //const workCreation = document.createElement("article");
        //Creating categories
        //Image 
        const imageElement = document.createElement("img");
        imageElement.src = articles.imageUrl;
        console.log(imageElement);
    }
};

fetchWorks();

*/

async function showTest() {

    //making a 'fetch' request to obtain the 'works' from the API
    let response = await fetch("http://localhost:5678/api/works");
    //request result in json format
    let works = await response.json(); // Holds the array of data
    let worksLength = works.length; // Length = 11

    console.log(works);
    //console.log(worksLength);

    function itemProcess(){
        for (i = 0; i < worksLength; i++) {
            //console.log("test");
            //let testVariable = works[i];
            //console.log(testVariable);
            //let testPicture = works[i].imageUrl;
            //console.log(testPicture);

            //Isolating specific items in the array depending on i
            const articles = works[i];

            //Selecting the container for the new articles
            const gallery = document.getElementsByClassName("gallery")[0];

            //creation of a container for each article
            const workCreation = document.createElement("figure");

            //Defining Varialbles within the array -- Test
            let workID = works[i].id; // Transcribes item ID
            let workImg = works[i].imageUrl; // Transcribes item Picture
            let workType = works[i].categoryId; // Transcribes item type/category
            let workName = works[i].title; // Transcribes item name
            let workUser = works[i].userId;

            // Creating the test items
            //Picture
            let image = document.createElement("img");
            image.src = workImg;
            //Name
            let name = document.createElement("figcaption");
            name.innerText = workName;

            //attaching the test items
            gallery.appendChild(workCreation);
            //console.log(gallery);
            //console.log(workImg)
            workCreation.appendChild(image);
            workCreation.appendChild(name);
            workCreation.id = workID;
            workCreation.classList.add("type" + workType);

        }

        
        
    };
    itemProcess();
};
showTest();
