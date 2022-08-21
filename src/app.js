/**
 * 
 * @param 
 * ID name by element into DOM
 * { urlImg = null, lists = [], color = '', styles = '', ALT = String } = {}
 * urlImg = url image
 * lists = array of object { tag, href }
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
        urlImg: URL, // url image
        lists: [  // array of object { tag, href } for TAG A element
            { tag: 'Home', href: 'index.html' }, 
            { tag: 'About', href: 'about.html' }, 
            { tag: 'Contact', href: 'contact.html' } 
        ],
        // styles = 'normal' or 'ui-gradients';
        styles: 'ui-gradients',
        colors: ['#d1b7b7', '#f7f1e3'], // colors of background with gradients
        ALT: 'Google' // alt of image
    });

window.onload = NavHelper;