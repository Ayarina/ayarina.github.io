

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

//Página CatApi: https://docs.thecatapi.com/
