
//Selecting all created items in the gallery
const allItems = document.getElementsByClassName('workItems');
console.log('all items:', allItems);

// Fetching the filter categories from the API
async function fetchFilter () {
    //making a 'fetch' request to obtain the 'categories' from the API
    let response = await fetch("http://localhost:5678/api/categories");
    //request result in json format
    let categories = await response.json(); // Holds the array of data
    let categoryLength = categories.length;

    console.log("categories:", categories)
    console.log("category length:", categoryLength);

    //Setting up the target area for insertion
    const targetArea = document.getElementById('filters');

    //Creating the "All" button
    const allButton = document.createElement("div");
    allButton.id = "all-filter";
    allButton.textContent = "Tous";
    allButton.classList.add("filter-button", "active");
    targetArea.appendChild(allButton);

    //Creating the other category buttons
    // For each category within the databasee (categories)
    categories.forEach(category => {
        const option = document.createElement("div");
        //Use the escape method to assign variable IDs to each filter button
        option.id = `${category.id}-filter`;
        option.textContent = category.name;
        option.classList.add("filter-button");
        targetArea.appendChild(option);
    });

    // Creating the container array for the buttons
    const allButtons = document.querySelectorAll('.filter-button');
    console.log("All Buttons:",allButtons)

    //Triggering on-click effect for every filter button pressed
    allButtons.forEach(button => {
        button.addEventListener('click', () => {
            console.log('click');
            //For every button
            allButtons.forEach(allButtons => {
                //removes active class from all buttons
                allButtons.classList.remove('active');
            });
            //adds active class
            button.classList.add('active');
            // Hiding all unselected images
            for(i = 0; i < allItems.length; i++) {
                allItems[i].style.display = 'none';
            };

            // Show all items if "All" is clicked
            // If the clicked button is the "All" filter
            if (button.id === "all-filter") {
                //Create a copy array of 'allItems', and once per item within
                Array.from(allItems).forEach(item => {
                    //make the picture visible
                    item.style.display = 'block';
                });
                //If the All button was the one press, stop the function here
                return;
            };

            // Show only items matching the selected category
            // Extract the original ID from the clicked button
            const categoryId = button.id.replace("-filter", "");
            //Use the extracted ID to target the pictures' classes
            const targetedClass = `type${categoryId}`;
            //Get the elements matching the selected class
            const filteredItems = document.getElementsByClassName(targetedClass);
            //Loop through matching items and make them all visible.
            Array.from(filteredItems).forEach(item => {
                item.style.display = 'block';
            });
            
        })

         
    })
        
};
fetchFilter();



