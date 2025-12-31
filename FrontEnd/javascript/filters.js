

// Creating the container array for the buttons
const allButtons = document.querySelectorAll('.filter-button');

async function showTest() {

    //making a 'fetch' request to obtain the 'works' from the API
    let response = await fetch("http://localhost:5678/api/works");
    //request result in json format
    let works = await response.json(); // Holds the array of data
    let worksLength = works.length; // Length = 11

    //Creating the container for the new articles
    const gallery = document.getElementsByClassName("gallery")[0];

    console.log(works);
    //console.log(worksLength);
    
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
        //console.log(gallery);
        //console.log(workImg)
        workCreation.appendChild(image);
        workCreation.appendChild(name);
        workCreation.id = workID;
        workCreation.classList.add("type" + workType);
        workCreation.classList.add("workItems");

    };

    //Selecting all created items
    const allItems = document.querySelectorAll(".gallery figure");

    //For every element (button) in allButtons
    allButtons.forEach(button => {
        //Add an event listener
        button.addEventListener('click', () => {
            //For every button
            allButtons.forEach(allButtons => {
                //removes active class from all buttons
                allButtons.classList.remove('active');
            });
            //adds active class
            button.classList.add('active');
            // Hiding all unselected images
            allItems.forEach(allItems => {
                allItems.style.display = 'none';
            })

            
            //Creating the filter function for the arrays
            //Creating array filter
            const filterItems = works.filter((itemFilter) => itemFilter.categoryId == 1);
            //console.log(filterItems);
            //creating housing filter
            const filterHousing = works.filter((housingFilter) => housingFilter.categoryId == 2);
            //console.log(filterHousing);
            //Creating business filter
            const filterBusiness = works.filter((businessFilter) => businessFilter.categoryId == 3);
            //console.log(filterBusiness);

            let allPicItems = document.getElementsByClassName('type1');
            let allPicHousing = document.getElementsByClassName('type2');
            let allPicBusiness = document.getElementsByClassName('type3');

            let buttonZero = allButtons[0];
            let buttonAll = buttonZero.classList.contains("active");
            let buttonOne = allButtons[1];
            let buttonItems = buttonOne.classList.contains("active");
            let buttonTwo = allButtons[2];
            let buttonHousing = buttonTwo.classList.contains("active");
            let buttonThree = allButtons[3];
            let buttonBusiness = buttonThree.classList.contains("active");
            
            for (let i = 0; i < allItems.length; i++){
                if (buttonItems) {
                    for (let i = 0; i < filterItems.length; i++){
                        allPicItems[i].style.display = 'block';
                    }
                } else if (buttonHousing) {
                    for (let i = 0; i < filterHousing.length; i++){
                        allPicHousing[i].style.display = 'block';
                    }
                } else if (buttonBusiness) {
                    for (let i = 0; i < filterBusiness.length; i++){
                        allPicBusiness[i].style.display = 'block';
                    }
                } else if (buttonAll) {
                    for (let i = 0; i < allItems.length; i++){
                        allItems[i].style.display = 'block';
                    }
                }
            }
            
            
            
            
        });
    });
    
};
showTest();

//Miniature gallery
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




