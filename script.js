const h1 = document.createElement('h1');
const div = document.createElement('div');
const h2 = document.createElement('h2');
const el = document.getElementById('el');

document.body.append(h1);
document.body.append(h2);

div.classList.add('el');
document.body.append(div);

setTimeout(() => {
    h1Vaxt(h1,'ASPA GROUP', 'black')
}, 1000);
setTimeout(() => {
    h1Vaxt(h2,'TEAM NERV', 'gold')
}, 1000);

function h1Vaxt(node, text, color) {
    node.textContent = text;
    node.style.color = 'white'; 
    node.style.textAlign = 'center';
    node.style.backgroundColor = color;
    node.style.padding = '2rem';
}

setTimeout(() => {
    div.style.backgroundImage = 'url(nerv.png)'
}, 2000);

h1.onclick = () => {
    h1.style.color = 'yellow';
}
h2.onclick = () => {
   if (h2.style.backgroundColor == green) {
    h2.style.backgroundColor = 'yellow';
    h2.style.color = 'black';
   } else{
    h2.style.backgroundColor = 'black';
    h2.style.color = 'yellow';
   }
}

h2.addEventListener('dblclick', sariQara)


function sariQara() {
    h2.style.backgroundColor = 'black';
    h2.style.color = 'yellow';
    
}


div.addEventListener('dblclick', logo1)


function logo1() {
    h1.style.background = 'black';
    h1.style.color = 'white';
    h2.style.background = 'yellow';
    h2.style.color = 'white';
    h2.style.backgroundClip = 'initial';
    h1.style.backgroundClip = 'initial';
     document.body.style.backgroundColor = 'white';
    
}


div.addEventListener('click', logo)

function logo() {
    document.body.style.backgroundColor = 'black';
    h2.style.color = 'transparent';
    h2.style.background = 'linear-gradient(rgba(169,168,78,255), #141505)';
    h2.style.backgroundClip = 'text';
    h1.style.color = 'transparent';
    h1.style.background = 'linear-gradient(rgba(169,168,78,255), #141505)';
    h1.style.backgroundClip = 'text';
}



