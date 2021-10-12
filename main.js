const home = document.getElementById('home');
const contact = document.getElementById('contact');
const here = document.getElementById('here');
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