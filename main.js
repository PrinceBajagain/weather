const home = document.getElementById('home');
const contact = document.getElementById('contact');
const here = document.getElementById('here');
const inputValue = document.getElementById('search');
const search = document.getElementById('searchbtn');
const namecity = document.getElementById('nameofcity');
const conditioncity = document.getElementById('conditionofcity');
const tempcity = document.getElementById("tempofcity");
function menu(){
    home.classList.add('hidden');
    home.classList.add('hidden');
    contact.classList.add('hidden');
    about.classList.add('hidden');
    here.classList.add('hidden');

}

function herebtn(){
    home.classList.add('hidden');
    contact.classList.add('hidden');
    about.classList.add('hidden');
    here.classList.remove('hidden');
    
}
function homebtn(){
    home.classList.remove('hidden');
    contact.classList.add('hidden');
    about.classList.add('hidden');
    here.classList.add('hidden');
}
function contactbtn(){
    home.classList.add('hidden');
    contact.classList.remove('hidden');
    about.classList.add('hidden');
    here.classList.add('hidden');
}
function aboutbtn(){
    home.classList.add('hidden');
    contact.classList.add('hidden');
    about.classList.remove('hidden');
    here.classList.add('hidden');
}
search.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=a6ac5b17a0b6eea2fddc8b3e58fade6d')
    .then(response => response.json())
    .then(data => {
        var nameval = data['name'];
        var tempvalue = data['main']['temp'];
        var conditionvalue = data['weather'][0]['description'];

        namecity.innerHTML = nameval;
        tempcity.innerHTML = tempvalue+"K";
        conditioncity.innerHTML = conditionvalue;

    })
    .catch (err => alert("wrong city name"))
})
