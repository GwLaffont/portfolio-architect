
// Trigger on pressing submit button
// Fetching email and apssword from form
// Error messages and others
// comparing elements from the form to the database
// If valid, login, if invalid, error
// Store the value / token if successfully logged in


async function login() {

    //making a 'fetch' request to obtain the user profiles from the API
        //let response = await fetch("http://localhost:5678/api/users/login");
        //request result in json format
        //let login = await response.json(); // Holds the array of data
        // Causes error messages


    /*
    //Request array to enter email / pwd
    let request = {
        "email": "",
        "password": "",
    };
    */
    // Creating an item containing form data
    const form = document.querySelector("#loginForm");
    console.log(form);

    //Submit Button
    let logButton = document.getElementById('subButton');
    //Event listener, when submit button is clicked
    logButton.addEventListener("click", () => {
        const email = document.getElementById('userEmail').value;
        const password = document.getElementById('pwd').value;

        // Making sure everything is filled properly
        if (!email || !password) {
            alert('Veuillez remplir tous les champs');
            return;
        };

        // Find User

        const user = ;

        if (user) {
            // If there is a match, store data within browser
            localStorage.setItem("token", "value");
            console.log("connexion reussie")

            // Redirect to home page after 0.5s second
            setTimeout(() => {
                window.location.href = 'home.html';
            }, 500);
        } else {
            alert(' Combinaison invalide');
        }

    });


    // Redirecting to main page once logged in. Apply 'if'?
    // window.location.replace("../index.html");
    
};
login();

// Getting the user data from local storage
let currentUser = localStorage.getItem("token");

let logHeader = document.getElementById('edition');
let logInButton = document.getElementById('login');
let logOutButton = document.getElementById('logout');
let filterButton = document.getElementById('filters');
let editButton = document.getElementById('edit');

//If not logged in (probably not needed)
if (currentUser == null){};

//If logged in
if (currentUser){

    logHeader.style.display = 'block';
    logInButton.style.display = 'none';
    logOutButton.style.display = 'block';
    filterButton.style.display = 'none';
    editButton.style.display = 'block';
};


// Deleting items from local storage
// localStorage.clear();
