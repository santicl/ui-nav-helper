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

/**
 * let dataArguments = { imgContent, lists, colors, styles };
        document.getElementById(ID).firstChild.nextSibling // Add nav in first position at container by ID
            .insertAdjacentElement("beforebegin", createNav(dataArguments));
 * 
 * **/

export function NavHelper(ID = null, { imgContent = { URL: null, ALT: null }, lists = [], dropdown = [text = { tagText: '', href: '' }], colors = { toRight: '', atLeft: '' }, styles = '' } = {}) {
    try {
        let dataArguments = { imgContent, lists, colors, styles };
        document.getElementById(ID).firstChild.nextSibling // Add nav in first position at container by ID
            .insertAdjacentElement('beforebegin', createNav(dataArguments))
            .setAttribute('id', 'nav');
        let forDropdown = { dropdown, ID, lists, nav: 'nav' };
        verifyStatusNav(forDropdown);
    } catch (err) {
        return console.log(err);
    }
}

function createNav(data) {// create nav element
    let { imgContent, lists, colors, styles } = data;
    let { toRight, atLeft } = colors;
    if (toRight === '' || atLeft === '') {
        throw new Error('Colors variables incomplete');
    } else {
        let navElement = document.createElement('nav');
        let className = styles == 'normal' ? 'nav' : styles;
        let ul = document.createElement('ul');
        navElement.setAttribute('class', className);
        navElement.appendChild(createTagImg(imgContent));
        navElement.appendChild(createTagUl(lists, { ul }));
        navElement.appendChild(createTagI(false));
        navElement.style.background = styles == 'normal' ? `${toRight}`
            : `linear-gradient(to right, ${toRight}, ${atLeft})`;
        navElement.style.visibility = 'visible';
        return navElement;
    }
}

function verifyStatusNav(data) {// verify status of nav | visible | hidden
    let { nav } = data;
    if (document.getElementById(nav).style.visibility === 'visible') {
        pushDropdown(data);
    }
    getFontFamilyOfBody(nav);
}

function getFontFamilyOfBody(nav) {// get font family of body
    let body = document.body;
    let font = body.style.fontFamily;
    let navElement = document.getElementById(nav);
    font === '' ? navElement.style.fontFamily = 'sans-serif'
        : navElement.style.fontFamily = font;
}

function pushDropdown(data) { // push dropdown in li
    let { dropdown } = data;
    for (let i = 0; i < dropdown.length; i++) {
        Object.entries(dropdown[i]).forEach(([key, value]) => {
            setDropdownUl({ key, value });
            setLiElements({ key, value });
        })
    }
}

function setDropdownUl(data) {// set ul for create dropdown
    let ul = document.createElement('ul');
    let { key, value } = data;
    for (const ele of value) {
        ul.setAttribute('id', key + '-dropdown');
        ul.setAttribute('class', 'dropdown-ul');
    }
    document.getElementById(key).appendChild(ul);
}

function setLiElements(data) { // set li elements for dropdown
    let { value, key } = data;
    let id = key + '-dropdown';
    let ul = document.getElementById(id);
    for (let i = 0; i < value.length; i++) {
        let { tagText, href } = value[i];
        let liElement = document.createElement('li');
        let aElement = createTagA();
        aElement.setAttribute('href', href);
        aElement.innerHTML = tagText;
        liElement.setAttribute('id', tagText);
        liElement.appendChild(aElement);
        ul.appendChild(liElement);
    }
}

function createTagUl(LI, data) {
    let { ul } = data;
    if (LI.length === 0) {
        throw new Error('Lists spaces is empty');
    } else {
        for (let i = 0; i < LI.length; i++) {
            let { tagText, href } = LI[i];
            let liElement = document.createElement('li');
            let aElement = createTagA(false);
            aElement.innerHTML = tagText;
            aElement.setAttribute('href', href);
            liElement.setAttribute('id', tagText);
            liElement.appendChild(aElement);
            ul.appendChild(liElement);
            ul.setAttribute('id', 'lists');
        }
    }
    return ul;
}

function createTagImg(imgContent) {
    let { URL, ALT } = imgContent;
    let imgElement = document.createElement('img');
    if (URL === null || ALT === null) {
        throw new Error('Image variables incomplete');
    } else {
        imgElement.setAttribute('src', URL);
        imgElement.setAttribute('alt', ALT);
        return imgElement;
    }
}

function createTagI(bool) {
    let tagI = document.createElement('i');
    if (bool === true) {
        tagI.setAttribute('class', 'fas fa-angle-down');
    } else {
        tagI.setAttribute('class', 'fas fa-bars');
    }
    return tagI;
}

function createTagA(bool, text) {
    let tagA = document.createElement('a');
    if (bool === true) {
        tagA.setAttribute('href', '#');
        let span = document.createElement('span');
        span.innerHTML = text;
        tagA.appendChild(span);
        tagA.appendChild(createTagI(true));
    }
    tagA.setAttribute('class', 'a');
    tagA.setAttribute('id', 'a');
    return tagA;
}