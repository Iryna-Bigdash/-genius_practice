const titleEl = document.querySelector('h1');
titleEl.addEventListener('mouseover', onHover, false);
titleEl.addEventListener('mouseout', outHover, false);

function onHover() {
    titleEl.innerHTML = 'Helloy! It is my first code on Java Script whith Genius';
    titleEl.setAttribute('style', "color:blue;");
}

function outHover() {
    titleEl.innerHTML = "It is my first lesson"; 
    titleEl.setAttribute('style', 'color:red;');
}