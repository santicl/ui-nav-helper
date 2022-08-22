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

export function NavHelper(ID = null, { imgContent = { URL: null, ALT: null }, lists = [], colors = { toRight: '', atLeft: '' }, styles = '' } = {}) {
    try {
        let dataArguments = { imgContent, lists, colors, styles };
        document.getElementById(ID).firstChild.nextSibling // Add nav in first position at container by ID
            .insertAdjacentElement("beforebegin", createNav(dataArguments));
    } catch (err) {
        return console.log(err);
    }
}

function createNav(data) {
    let { imgContent, lists, colors, styles } = data;
    let { toRight, atLeft } = colors;
    let navElement = document.createElement('nav');
    let className = 'normal' ? 'nav' : styles;
    navElement.setAttribute('class', className);
    navElement.appendChild(createTagImg(imgContent));
    navElement.appendChild(createTagUl(lists));
    navElement.appendChild(createTagI());
    navElement.style.background = styles == 'normal' ? `${toRight}`
        : `linear-gradient(to right, ${toRight}, ${atLeft})`;
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

function createTagImg(imgContent) {
    let { URL, ALT } = imgContent;
    let imgElement = document.createElement('img');
    imgElement.setAttribute('src', URL);
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