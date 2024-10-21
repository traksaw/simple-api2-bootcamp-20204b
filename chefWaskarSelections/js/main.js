import { apiKey } from "./apiKeys.js";
document.querySelector('#btnInput').addEventListener('click',getMeFood)

function getMeFood(){
    //this is input field's value
const foodChoice = document.querySelector('#foodInput').value
const url = `https://api.api-ninjas.com/v1/recipe?query=${foodChoice}`;
const options = {
	method: 'GET',
	headers: {
		'X-Api-Key': `${apiKey}`,
		'Content-Type': 'application/json'
	},
};

fetch (url, options)
.then (res => res.json())
.then(data => {
    // console.log(data,'data')
    //creates a randomizer for items in array
    const randomNum = Math.floor(Math.random() * 10)
    //variables for each part of the array
    const recipe = data[randomNum]
    const ingredients = recipe.ingredients
    // console.log(ingredients)
    const instructions = recipe.instructions
    const servings = recipe.servings
    const title = recipe.title
    
    function nameMyMeal(){
    document.querySelector('#dishTitle').textContent = `${title}`
    document.querySelector('#dishIngredients').textContent = `Ingredients -- ${ingredients}`
    document.querySelector('#dishInstructions').textContent = instructions
    document.querySelector('#dishServings').textContent = `Servings -- ${servings}`
    foodChoice.value.textContent = ' '
    }
    nameMyMeal()
})
.catch(err =>{
    console.log(`error ${err}`)
})
}