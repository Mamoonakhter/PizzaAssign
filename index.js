// Get the pizza base element
const pizzaBase = document.querySelector('.pizza-base');
// Get the ingredient elements
const ingredients = document.querySelectorAll('.ingredient');
// Set up event listeners for each ingredient
ingredients.forEach(ingredient => {
    // Set the draggable attribute to true
    ingredient.setAttribute('draggable', true);

    // Add event listener for when the drag starts
    ingredient.addEventListener('dragstart', event => {
        // Set the data transfer object with the ID of the ingredient
        event.dataTransfer.setData('text/plain', ingredient.id);
    });
});
// Add event listener for when the pizza base is dragged over
pizzaBase.addEventListener('dragover', event => {
    // Prevent the default action
    event.preventDefault();
});


// Add event listener for when the ingredient is dropped onto the pizza base
pizzaBase.addEventListener('drop', event => {
    // Prevent the default action
    event.preventDefault();

    // Get the ID of the ingredient from the data transfer object
    const ingredientId = event.dataTransfer.getData('text/plain');

    // Get the ingredient element
    const ingredient = document.getElementById(ingredientId);

    // Clone the ingredient element
    const clonedIngredient = ingredient.cloneNode(true);

    // Add the cloned ingredient to the pizza base
    pizzaBase.appendChild(clonedIngredient);
});
