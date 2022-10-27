//Add event listener to music and cocktail classes
document.querySelectorAll(".menuItem").forEach (function(button){
    button.addEventListener("click", function(event){
        console.log(event)
        var type=event.target.dataset.type
        console.log(type)
        if (type === "music"){
            // call drink api here
            drinkApi()
        } else if (type === "drinks") {
            // call music api here
            gameApi()
        }
    })
})
//randomly selects a game
function gameApi(selection){
    console.log(selection);
    var apiURL=('free-to-play-games-database.p.rapidapi.com'+ selection)
    console.log(apiURL);
    fetch(apiURL).then(function(response) {
        return response.json();
    }) .then(function(data) {
        var random = Math.floor(Math.random()*data.drinks.length);//look in JSON to replace drinks
        var randomGame = (data.drinks[random].strGame);
        console.log(randomGame);
        var gamesUrl = ('https://free-to-play-games-database.p.rapidapi.com/api/games?platform=browser'+randomGame);
        console.log(gamesUrl);
        fetch(gamesUrl).then(function(response) {
            return response.json();
        });
    };
//drink API
function drinkApi(){
    fetch("http://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then(res => res.json())
    .then(data => {
        console.log(data)
    });
}