
//Declaring variables

let editButton = document.getElementById('edit');
let closeEdit = document.getElementsByClassName('close-cross')[0];
let popWindow = document.getElementsByClassName('popup')[0];
let logHeader = document.getElementById('edition');
let logInButton = document.getElementById('login');
let logOutButton = document.getElementById('logout');
let filterButton = document.getElementById('filters');
let darkBG = document.getElementsByClassName('popup-background')[0];

// Making the Edit button functionnal

editButton.addEventListener('click', () => {
    console.log('click');
    popWindow.style.display = 'flex';
    darkBG.style.display = 'block';
})

closeEdit.addEventListener('click', () => {
    console.log('click');
    popWindow.style.display = 'none';
    darkBG.style.display = 'none';
})


function editMode() {
    let storage = localStorage.length;
    if (storage > 0) {
        console.log('connected')
        logHeader.style.display = 'flex';
        logInButton.style.display = 'none';
        logOutButton.style.display = 'block';
        filterButton.style.display = 'none';
        editButton.style.display = 'flex';
    } else {
        console.log('not connected')
        logHeader.style.display = 'none';
        logInButton.style.display = 'block';
        logOutButton.style.display = 'none';
        filterButton.style.display = 'flex';
        editButton.style.display = 'none';
    }
};
editMode();

console.log(localStorage);

//Making the logout button functionnal
logOutButton.addEventListener('click', () => {    
    // Deleting items from local storage
    localStorage.clear();
    // Reloading page to apply logout
    window.location.reload();
});



//If not logged in (probably not needed)
//if (currentUser == null){};

//If logged in
/*
if (currentUser){

    logHeader.style.display = 'block';
    logInButton.style.display = 'none';
    logOutButton.style.display = 'block';
    filterButton.style.display = 'none';
    editButton.style.display = 'block';
};
*/


// Deleting items from local storage
// localStorage.clear();