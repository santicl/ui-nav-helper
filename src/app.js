/**
 * 
 * @param 
 * ID name by element into DOM
 * { urlImg = null, lists = [], color = '', styles = '', ALT = String } = {}
 * urlImg = url image
 * lists = array of object { tag, href } for UL inside nav
 * colors = color of background with gradients
 * styles = class name of element
 * ALT = alt of image
 * 
 * @return Navigation with styles equal to styles the normal Nav
 * 
 * **/
// example:
import { NavHelper } from "./nav-component.js";
let URL = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png';

    NavHelper('app', {
        urlImg: URL,
        lists: [  // array of object for TAG A element
            { tagText: 'Home', href: 'index.html' }, 
            { tagText: 'About', href: 'about.html' }, 
            { tagText: 'Contact', href: 'contact.html' } 
        ],
        // styles = 'normal' or 'ui-gradients';
        styles: 'ui-gradients',
        colors: ['#d1b7b7', '#f7f1e3'], // colors of background for gradients
        ALT: 'Google'
    });

window.onload = NavHelper;