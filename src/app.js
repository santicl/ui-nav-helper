import { NavHelper } from "./nav-component.js";
let URL = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png';

    NavHelper('app', {
        urlImg: URL,
        lists: [ 
            { tag: 'Home', href: 'index.html' }, 
            { tag: 'About', href: 'index.html' }, 
            { tag: 'Contact', href: 'index.html' } 
        ],
        ALT: 'Google'
    });

window.onload = NavHelper;