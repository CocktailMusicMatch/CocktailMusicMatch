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
//Free-to-Play Games Database API from Rapid API
function gameApi(){
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c35a4bee2emsh6c315d3399c090bp11f346jsnc0801ef84967',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};
function musicApi(){
fetch('https://free-to-play-games-database.p.rapidapi.com/api/game?id=452', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
}
}
//Drink API to select randomized drinks
function drinkApi(){
    fetch("http://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
}
// ___________________________________________________
// Music API that throughs CORS errors
// function musicApi(){
//     var apiKey = '1e4aeaed93da5dfa3bb4d1955e3db59a'
//     var apiURL = `http://api.musixmatch.com/ws/1.1/music.genres.get${apiKey}`

//     fetch(apiURL, {
//             mode: 'no-cors',
//             method: "post",
//             headers: {
//                  "Content-Type": "application/json"
//             },
//             // body: JSON.stringify(ob)
//  })
//     fetch(apiURL)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//     })
// }
//_________________________________________________

