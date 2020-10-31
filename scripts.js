

// Scroll To Top
function ScrollToTop() 
{
    window.scrollTo({top: 0, behavior: 'smooth'});
}

//Alerta Viva España
function Arriba(){
    alert('Vive l\'Espagne');
}

//API gatitos nekos kawaiis nya~~
function getNekos(){
    $.get("https://api.thecatapi.com/v1/images/search", function(data, status){
        var img = document.getElementById("Neko");
        img.src = data['0']['url'];
    });
}

//API Repository Starring
function getStars(){
    $.get("https://api.github.com/repos/Ayarina/ayarina.github.io", function(data, status){
        
        document.getElementById("stars").innerHTML = data['stargazers_count'];
        console.log(data.stargazers_count);
    });
}


//Página CatApi: https://docs.thecatapi.com/

//Añadir audio y demás apis