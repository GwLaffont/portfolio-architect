
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
        
        // Redirect to home page after 0.5s second
        
        setTimeout(() => {
            window.location.href = '/index.html';
        }, 500);
        
    };
    login();

    // Making sure everything is filled properly
    if (!email || !password) {
        alert('Veuillez remplir tous les champs');
        return;
    };

});




