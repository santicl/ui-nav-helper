/**
 * 
 * @param 
 * ID name by element into DOM
 * { urlImg = null, lists = [], color = '', styles = '', ALT = String } = {}
 * urlImg = url image
 * lists = array of object { tag, href }
 * color = color of background
 * styles = class name of element
 * ALT = alt of image
 * 
 */

export function NavHelper(ID = null, { urlImg = null, lists = [], colors = [ length = 2 ], styles = '', ALT = String } = {}) {
    let dataArguments = { urlImg, lists, colors, styles, ALT };
    document.getElementById(ID).appendChild(createNav(dataArguments));
}

function createNav(data) {
    let { urlImg, lists, colors, styles, ALT } = data;
    let navElement = document.createElement('nav');
    let className = 'normal' ? 'nav' : styles;
    navElement.setAttribute('class', className);
    navElement.appendChild(createTagImg(urlImg, ALT));
    navElement.appendChild(createTagUl(lists));
    navElement.appendChild(createTagI());
    navElement.style.background = styles == 'normal' ? '#d1b7b7' : `linear-gradient(to right, ${colors[0]}, ${colors[1]})`;
    return navElement;
}

function createTagUl(LI) {
    let ulElement = document.createElement('ul');
    for (let i = 0; i < LI.length; i++) {
        let { tagText, href } = LI[i];
        let liElement = document.createElement('li');
        let aElement = createTagA();
        aElement.innerHTML = tagText;
        aElement.setAttribute('href', href);
        liElement.setAttribute('class', 'li');
        liElement.appendChild(aElement);
        ulElement.appendChild(liElement);
    }
    return ulElement;
}

function createTagImg(urlImg, ALT) {
    let imgElement = document.createElement('img');
    imgElement.setAttribute('src', urlImg);
    imgElement.setAttribute('alt', ALT);
    return imgElement;
}

function createTagI() {
    let tagI = document.createElement('i');
    tagI.setAttribute('class', 'fas fa-bars');
    return tagI;
}

function createTagA() {
    let tagA = document.createElement('a');
    tagA.setAttribute('class', 'a');
    return tagA;
}