//Add event listener to game and cocktail classes
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
            // call game api here
            
            drinkApi(selection)
            
        }
    })
    
})

// Modal
window.openModal = function(modalId) {
    document.getElementById(modalId).style.display = 'block'
    document.getElementsByTagName('body')[0].classList.add('overflow-y-hidden')
}

window.closeModal = function(modalId) {
    document.getElementById(modalId).style.display = 'none'
    document.getElementsByTagName('body')[0].classList.remove('overflow-y-hidden')
}



// All of the drink ids turned into values 
document.getElementById("Light Beer").addEventListener("click", addDrinksToLocalStorage)
document.getElementById("Dark Beer").addEventListener("click", addDrinksToLocalStorage)
document.getElementById("Red Wine").addEventListener("click", addDrinksToLocalStorage)
document.getElementById("White Wine").addEventListener("click", addDrinksToLocalStorage)
document.getElementById("Rum").addEventListener("click", addDrinksToLocalStorage)
document.getElementById("Tequila").addEventListener("click", addDrinksToLocalStorage)
document.getElementById("Vodka").addEventListener("click", addDrinksToLocalStorage)
document.getElementById("Whisky").addEventListener("click", addDrinksToLocalStorage)

// The key and function for local storage values
function addDrinksToLocalStorage(event){
    event.preventDefault();
    console.log("addDrinksToLocalStorage");
    var clickedElementValue = event.target.getAttribute('id')
    console.log(clickedElementValue);
    localStorage.setItem("Drink", clickedElementValue)
    
}

//pull random game
function gameApi(){
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'c35a4bee2emsh6c315d3399c090bp11f346jsnc0801ef84967',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };
    return fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?platform=browser', options)
      .then(response => response.json())
      .then(games => {
        console.log(games)
        var randomIndex = Math.floor(Math.random()*games.length);
        console.log(randomIndex);
        var randomGame = games[randomIndex];
        console.log(randomGame);
        console.log(randomGame.title);
        console.log(randomGame.game_url);
        console.log(randomGame.thumbnail);
      })
      .catch(err => console.error(err));
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
            openModal('modal');
            var modalHead = document.getElementById("modalHead");
            var modalP = document.getElementById("modalP");
            var ingredientsList = document.getElementById("ingredientsList");
            var modalImage = document.getElementById('modalImage');
            modalHead.textContent = (data.drinks[0].strDrink);
            for(let i=1; i<16; i++) {
                if (data.drinks[0][`strMeasure${i}`] === null) {
                break;
                }
                var ingredient = document.createElement('li');
                ingredient.innerHTML = data.drinks[0][`strMeasure${i}`]+data.drinks[0][`strIngredient${i}`];
                ingredientsList.appendChild(ingredient);
            }

            modalP.textContent = (data.drinks[0].strInstructions);
            modalImage.src = (data.drinks[0].strDrinkThumb);

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


