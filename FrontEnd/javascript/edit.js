
//Declaring variables

let editButton = document.getElementById('edit');
let closeEdit = document.getElementsByClassName('close-cross')[0];
let popWindow = document.getElementsByClassName('pop1')[0];
let popTwo = document.getElementsByClassName('pop2')[0];
let logHeader = document.getElementById('edition');
let logInButton = document.getElementById('login');
let logOutButton = document.getElementById('logout');
let filterButton = document.getElementById('filters');
let darkBG = document.getElementsByClassName('popup-background')[0];
let addOpen = document.getElementsByClassName('add-photo')[0];
let addReturn = document.getElementsByClassName('back-arrow')[0];
let closeAdd = document.getElementsByClassName('close-cross-2')[0];

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

addOpen.addEventListener('click', () => {
    console.log('click');
    popWindow.style.display = 'none';
    popTwo.style.display = 'flex';
})

addReturn.addEventListener('click', () => {
    console.log('click');
    popWindow.style.display = 'flex';
    popTwo.style.display = 'none';
})

closeAdd.addEventListener('click', () => {
    console.log('click');
    popWindow.style.display = 'none';
    popTwo.style.display = 'none';
    darkBG.style.display = 'none';
})

// Making the Add button functionnal


function editMode() {
    // getting the token out of the localstorage
    const token = localStorage.getItem('userID');
    //If there is a login token, switch to edit mode
    if (token) {
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

function addMode(){};

console.log(localStorage);

//Making the logout button functionnal
logOutButton.addEventListener('click', () => {    
    // Deleting items from local storage
    localStorage.clear();
    // Reloading page to apply logout
    window.location.reload();
});

//Closing the modal window if clicking the BG

darkBG.addEventListener('click' , () => {
    popWindow.style.display = 'none';
    darkBG.style.display = 'none';
    popTwo.style.display = 'none';
})

