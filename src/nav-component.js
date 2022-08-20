export function NavHelper(ID = null, { urlImg = null, lists = [], ALT = String } = {}) {
    console.log(lists)
    document.getElementById(ID)
        .appendChild(createNav(lists, urlImg, ALT));
}

function createNav( lists, urlImg, ALT ) {
    let navElement = document.createElement('nav');
    navElement.setAttribute('class', 'nav');
    navElement.appendChild(createTagImg(urlImg, ALT));
    navElement.appendChild(createTagUl(lists));
    navElement.appendChild(createTagI());
    return navElement;
}

function createTagUl(LI) {
    let ulElement = document.createElement('ul');
    for (let i = 0; i < LI.length; i++) {
        let { tag, href } = LI[i];
        let liElement = document.createElement('li');
        let aElement = createTagA();
        aElement.innerHTML = tag;
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