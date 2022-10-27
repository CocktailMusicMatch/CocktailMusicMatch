//Add event listener to music and cocktail classes
document.querySelectorAll(".menuItem").forEach (function(button){
    button.addEventListener("click", function(event){
        console.log(event)
        var type=event.target.dataset.type
        var selection=event.target.innerText
        // debugger
        console.log(type)

        if (type === "game"){

            // call drink api here
            drinkApi(selection)
        } else if (type === "drinks") {
            // call music api here

            drinkApi(selection)

        }
    })

})


// All of the drink ids turned into values 
// document.getElementById("Light Beer").addEventListener("click", addDrinksToLocalStorage)
// document.getElementById("Dark Beer").addEventListener("click", addDrinksToLocalStorage)
// document.getElementById("Red Wine").addEventListener("click", addDrinksToLocalStorage)
// document.getElementById("White Wine").addEventListener("click", addDrinksToLocalStorage)
// document.getElementById("Rum").addEventListener("click", addDrinksToLocalStorage)
// document.getElementById("Tequila").addEventListener("click", addDrinksToLocalStorage)
// document.getElementById("Vodka").addEventListener("click", addDrinksToLocalStorage)
// document.getElementById("Whisky").addEventListener("click", addDrinksToLocalStorage)

// The key and function for local storage values
function addDrinksToLocalStorage(event){
    event.preventDefault();
    console.log("addDrinksToLocalStorage");
    var clickedElementValue = event.target.getAttribute('id')
    console.log(clickedElementValue);
    localStorage.setItem("Drink", clickedElementValue)

}


// pull random drink
function drinkApi(selection){
    console.log(selection);
    var apiURL=('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i='+ selection)
    console.log(apiURL);
    fetch(apiURL).then(function(response) {
        return response.json();
    }) .then(function(data) {
        var random = Math.floor(Math.random()*data.drinks.length);
        var randomDrink = (data.drinks[random].strDrink);
        console.log(randomDrink);
        var cocktailUrl = ('https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+randomDrink);
        console.log(cocktailUrl);
        fetch(cocktailUrl).then(function(response) {
            return response.json();
        }) .then(function(data) {
            console.log(data);
            console.log(data.drinks[0].strDrink)
            console.log(data.drinks[0].strInstructions)
            console.log(data.drinks[0].strMeasure1 , data.drinks[0].strIngredient1)
            console.log(data.drinks[0].strMeasure2 , data.drinks[0].strIngredient2)
            console.log(data.drinks[0].strMeasure3 , data.drinks[0].strIngredient3)
            console.log(data.drinks[0].strMeasure4 , data.drinks[0].strIngredient4)
            console.log(data.drinks[0].strMeasure5 , data.drinks[0].strIngredient5)
            console.log(data.drinks[0].strMeasure6 , data.drinks[0].strIngredient6)
            console.log(data.drinks[0].strMeasure7 , data.drinks[0].strIngredient7)
            console.log(data.drinks[0].strMeasure8 , data.drinks[0].strIngredient8)
            console.log(data.drinks[0].strMeasure9 , data.drinks[0].strIngredient9)
            console.log(data.drinks[0].strMeasure10 , data.drinks[0].strIngredient10)
            console.log(data.drinks[0].strMeasure11 , data.drinks[0].strIngredient11)
            console.log(data.drinks[0].strMeasure12 , data.drinks[0].strIngredient12)
            console.log(data.drinks[0].strMeasure13 , data.drinks[0].strIngredient13)
            console.log(data.drinks[0].strMeasure14 , data.drinks[0].strIngredient14)
            console.log(data.drinks[0].strMeasure15 , data.drinks[0].strIngredient15)

        })
    });

}

// Modal

window.openModal = function(modalId) {
    document.getElementById(modalId).style.display = 'block'
    document.getElementsByTagName('body')[0].classList.add('overflow-y-hidden')
  }
  
  window.closeModal = function(modalId) {
    document.getElementById(modalId).style.display = 'none'
    document.getElementsByTagName('body')[0].classList.remove('overflow-y-hidden')
  }


