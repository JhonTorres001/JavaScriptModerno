// variables
const listaTweets  = document.getElementById('lista-tweets');

//event listeners
addEventListener();
function addEventListener(){
    document.querySelector('#formulario').addEventListener('submit', agregarTweets);
    listaTweets.addEventListener('click', borrarTweet)

    document.addEventListener('DOMContentLoaded', CargarLocalStorge)

};
//fuciones

///agregar tweets
function agregarTweets(e){
    e.preventDefault();
    const tweets = document.getElementById('tweet').value;
   
    //  CrearElementosDOMTweets(tweets);  
      const botonEliminar = document.createElement('a');
        botonEliminar.classList = 'borrar-tweet';
        botonEliminar.innerText = 'X';

        const li = document.createElement('li');
        li.textContent = tweets;   
        li.appendChild(botonEliminar);
        listaTweets.appendChild(li);

    agregarTweetsaLocalStorage(tweets);
}

function borrarTweet(e){
    e.preventDefault();
    if(e.target.parentElement.parentElement.className === 'borrar-tweet'){
        e.target.parentElement.parentElement.parentElement.remove();
     borraTweetLocalStorage(e.target.parentElement.parentElement.parentElement.textContent);
    }


    if(e.target.className === 'borrar-tweet'){
        e.target.parentElement.remove();
     borraTweetLocalStorage(e.target.parentElement.textContent);
    }
}

function agregarTweetsaLocalStorage(tweet){

    let tweets;
    tweets = obtenerTweetsLocalStorage();
    tweets.push(tweet);
    localStorage.setItem('Tweet', JSON.stringify(tweets));

}

function obtenerTweetsLocalStorage(){

    let tweets;
    if(localStorage.getItem('Tweet') === null){
        tweets = [];
    }
    else{
        tweets = JSON.parse ( localStorage.getItem('Tweet') );
    }
    return tweets
}

function CargarLocalStorge(){
    let tweets;
    tweets = obtenerTweetsLocalStorage();

    tweets.forEach(function(element) {
       CrearElementosDOMTweets(element);      
    });

}

function CrearElementosDOMTweets(tweets){
        const botonEliminar = document.createElement('a');
        botonEliminar.classList = 'borrar-tweet';
        botonEliminar.innerText = 'X';

        const li = document.createElement('li');
        li.textContent = tweets;   
        li.appendChild(botonEliminar);
        listaTweets.appendChild(li);
}

function borraTweetLocalStorage(tweet){

    let tweets , tweetBorrar;

    tweetBorrar = tweet.substring(0,tweet.length -1)
    tweets = obtenerTweetsLocalStorage();

    tweets.forEach(function(tweetElement, index){       
        if(tweetBorrar  === tweetElement){
            tweets.splice(index,1);
        }
    });

    localStorage.setItem('Tweet', JSON.stringify(tweets))
}