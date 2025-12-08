
// Trigger on pressing submit button
// Fetching email and apssword from form
// Error messages and others
// comparing elements from the form to the database
// If valid, login, if invalid, error
// Store the value / token if successfully logged in


//setting up the const
const sButton = document.getElementById("subButton");


//Trigger on pressing submit button
sButton.addEventListener('click', (event) => {
    //Preventing the page from auto-refreshing when pressing submit
    event.preventDefault()
    console.log('click');
    //logging in the values within the form
    const email = document.getElementById('userEmail').value;
    const password = document.getElementById('pwd').value;
    console.log('email: ', email);
    console.log('password: ', password);
    
    
    
    // Making a call to the server.
    async function login() {
        const response = await fetch("http://localhost:5678/api/users/login", {
            //Sending the values email and password to the server
            method: "POST",
            body: JSON.stringify({
                email: email, //'sophie.bluel@test.tld'
                password: password, //'S0phie'
            }),
            headers: {
                "Content-type": "application/json",
            },
        })
        //Creating a variable to hold the server's response
        let user = await response.json();
        console.log(user);

        if (!user.token) {
            alert("Erreur dans l\'identifiant ou le mot de passe");
            return;
        }
        
        //Extracting user token from the server reply
        let userToken = user.token;
        console.log("User Token: ", userToken);

        
        // If there is a match, store data within browser
        localStorage.setItem("userID", userToken);
        console.log("connexion reussie");
        console.log(localStorage);
        
        //Error message when redirecting
        // Redirect to home page after 0.5s second
        
        setTimeout(() => {
            window.location.href = '/index.html';
        }, 500);
        
        
        /*  Try 2: Same error message about security policy directive
        window.location.replace("../index.html");
        */
        
    };
    login();

    // Making sure everything is filled properly
    if (!email || !password) {
        alert('Veuillez remplir tous les champs');
        return;
    };

});


/*
async function login() {

    //making a 'fetch' request to obtain the user profiles from the API
        //let response = await fetch("http://localhost:5678/api/users/login");
        //request result in json format
        //let login = await response.json(); // Holds the array of data
        // Causes error messages
    
    const response = await fetch("http://localhost:5678/api/users/login", {
        method: "POST",
        body: JSON.stringify({
            email: email, //'sophie.bluel@test.tld'
            password: password, //'S0phie'
        }),
        headers: {
            "Content-type": "application/json",
        },
    })

    let user = await response.json();
    console.log(user);

        

    /*
    //Request array to enter email / pwd
    let request = {
        "email": "",
        "password": "",
    };
    

    
    // Creating an item containing form data
    const form = document.querySelector("#loginForm");
    console.log(form);

    //Submit Button
    let logButton = document.getElementById('subButton');
    //Event listener, when submit button is clicked
    logButton.addEventListener("click", () => {
        

        // Making sure everything is filled properly
        if (!email || !password) {
            alert('Veuillez remplir tous les champs');
            return;
        };
        
        if (user) {
            // If there is a match, store data within browser
            localStorage.setItem("token", "value");
            console.log("connexion reussie")

            // Redirect to home page after 0.5s second
            setTimeout(() => {
                window.location.href = 'home.html';
            }, 500);
        } else {
            alert("Erreur dans l\'identifiant ou le mot de passe");
        }

    });


    // Redirecting to main page once logged in. Apply 'if'?
    // window.location.replace("../index.html");
    
    
};
*/



