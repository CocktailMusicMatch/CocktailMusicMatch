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
            musicApi()
        }
    })
})

function musicApi(){
    var apiKey = '1e4aeaed93da5dfa3bb4d1955e3db59a'

    var apiURL = `http://api.musixmatch.com/ws/1.1/f_music_genre_id=${apiKey}`


return fetch(apiURL, {  
       method: 'GET',  
       withCredentials: true,  
       crossorigin: true,  
       mode: 'no-cors',     
     })  
       .then(res => {
        // console.log(res)
        // res.json()
    })  
       .then((data) => {  
        //  console.log(data);  
       })  
       .catch((error) => {  
         console.error(error);  
       });  
   };  

    //    },fetch(apiURL, {
    //         mode: 'no-cors',
    //         method: "post",
    //         headers: {
    //              "Content-Type": "application/json"
         
            // body: JSON.stringify(ob)
//  })
//     fetch(apiURL)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//     })
// }

function drinkApi(){
    fetch("http://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
}

document.getElementById("Blues").addEventListener("click", addMusicToLocalStorage)
document.getElementById("Country").addEventListener("click", addMusicToLocalStorage)
document.getElementById("Dance").addEventListener("click", addMusicToLocalStorage)
document.getElementById("Jazz").addEventListener("click", addMusicToLocalStorage)
document.getElementById("Rhythm & Blues").addEventListener("click", addMusicToLocalStorage)
document.getElementById("Rock & Roll").addEventListener("click",addMusicToLocalStorage)
document.getElementById("Soul").addEventListener("click",addMusicToLocalStorage)
document.getElementById("Rock").addEventListener("click",addMusicToLocalStorage)

document.getElementById("Light Beer").addEventListener("click", addDrinksToLocalStorage)
document.getElementById("Dark Beer").addEventListener("click", addDrinksToLocalStorage)
document.getElementById("Red Wine").addEventListener("click", addDrinksToLocalStorage)
document.getElementById("White Wine").addEventListener("click", addDrinksToLocalStorage)
document.getElementById("Rum").addEventListener("click", addDrinksToLocalStorage)
document.getElementById("Tequila").addEventListener("click", addDrinksToLocalStorage)
document.getElementById("Vodka").addEventListener("click", addDrinksToLocalStorage)
document.getElementById("Whisky").addEventListener("click", addDrinksToLocalStorage)

function addMusicToLocalStorage(event){
    event.preventDefault();
    console.log("addMusicToLocalStorage");
    var clickedElementValue = event.target.getAttribute('id')
    console.log(clickedElementValue);
    localStorage.setItem("Music", clickedElementValue)
}


function addDrinksToLocalStorage(event){
    event.preventDefault();
    console.log("addDrinksToLocalStorage");
    var clickedElementValue = event.target.getAttribute('id')
    console.log(clickedElementValue);
    localStorage.setItem("Drink", clickedElementValue)
}
