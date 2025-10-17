/*
//Filter Objects
let filterObjects = document.getElementsByClassName('items')[0];
let allPictures = document.querySelectorAll('div.gallery > img');

filterObjects.addEventListener("click", () => {
    console.log('click');
    if (filterObjects.classList.contains("active")) {
        filterObjects.classList.remove("active")
    } else {
        filterObjects.classList.add("active");
        for (let i = 0; i < allPictures.length; i++){
            if (allPictures[i].categoryId === 1) {
                console.log (allPictures[i]);
            }
            else {
                allPictures[i].style.display = 'none';
            }
        }
    }
    
})
*/

//let itemList = document.getElementsByClassName('gallery')[0].children;
// Doesn't open the children, need to look into the Backend

//Works but unwieldy?
/*
itemsFilter.addEventListener('click', () => {
    console.log('clicked');
    for (let i = 0; i < allHousing.length; i++) {
        allHousing[i].style.display = 'none';
    };
    for (let i = 0; i < allBusinesses.length; i++) {
        allBusinesses[i].style.display = 'none';
    }
})
*/
/*
function hideAll(){

    for (let i = 0; i < allItems.length; i++) {
        allItems[i].style.display = 'none';
    };
};
hideAll()



allFilter.addEventListener('click', () => {
    for (let i = 0; i < allItems.length; i++) {
        allItems[i].style.display = 'block';
    };
})


*/

/*
Filters plan:

Make buttons (Done)
Switch active class between them
If active, Fetch pictures in the Dom corresponding to the class/id and display them?
Better to have them all and hide them if they dont have the right ID?
*/

/*example to display within function
if (allItems.classList.contains('active')) {
    for (let i = 0; i < allItems.length; i++) {
        allItems[i].style.display = 'block';
    };
}

*/



//Creating a container for all buttons within the filter div
//let allButtons = document.getElementsByClassName('button');

//Loop through all buttons and add the active class to the current button
/*for (let i = 0; i < allButtons.length; i++){
    //Adds event listener to all buttons
    allButtons[i].addEventListener("click", () => {
        console.log("clicked");
        //Creating a container for all elements with the active class
        let activeButton = document.querySelectorAll("active");
        //removes active class from unselected buttons
        activeButton[0].classList = activeButton[0].classList.replace("active", "");
        //adds active class to selected button
        this.classList += " active";
    })
}

//doesn't work, tryign For Each */

///Brute force method
//Miracle! It works!

let allItems = document.querySelectorAll(".gallery figure");

console.log(allItems);
let allObjects = document.getElementsByClassName('type1');
console.log(allObjects);
let allHousing = document.getElementsByClassName('type2');
console.log(allHousing);
let allBusinesses = document.getElementsByClassName('type3');
console.log(allBusinesses);

let filterAll = document.getElementById('all');
let filterItems = document.getElementById('item');
let filterHousing = document.getElementById('housing;')
let filterBusiness = document.getElementById('business')
/*
filterAll.addEventListener('click', () => {
    for (let i = 0; i < allItems.length; i++) {
        allItems[i].style.display = 'block';
    };
});

filterItems.addEventListener('click', () => {
    for (let i = 0; i < allObjects.length; i++) {
        allObjects[i].style.display = 'block';
    };
    for (let i = 0; i < allHousing.length; i++) {
        allHousing[i].style.display = 'none';
    };
    for (let i = 0; i < allBusinesses.length; i++) {
        allBusinesses[i].style.display = 'none';
    };
});*/



let allButtons = document.querySelectorAll('.button');

allButtons.forEach(button => {
    button.addEventListener('click', () => {
        allButtons.forEach(allButtons => {
            allButtons.classList.remove('active');
        });
        button.classList.add('active');
    });
});
/*
for (let i = 0; i < allItems.length; i++) {
    if (filterAll.classList.contains('active')){
        allItems[i].style.display = 'block';
    };

    if (filterItems.classList.contains('active')){
        allObjects[i].style.display = 'block';
    };
    if (filterHousing.classList.contains('active')){
        allHousing[i].style.display = 'block';
    };
    if (filterBusiness.classList.contains('active')){
        allBusinesses[i].style.display = 'block';
    };
};
*/

/*

Test Hide function
function hideAll() {
    for (let i = 0; i < allItems.length; i++) {
        allItems[i].style.display = 'none';
    }
}
hideAll()*/

function switchTest (){
    for (i = 0; i < allButtons.length; i++){
        
    }
}