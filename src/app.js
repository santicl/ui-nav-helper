/**
 * 
 * @param 
 * ID name by element into DOM
 * { urlImg = { URL, ALT }, lists = [], color = '', styles = '' } = {}
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
        imgContent: {
            URL: URL,
            ALT: 'Google'
        },
        lists: [  // array of object for TAG A element
            { tagText: 'Home', href: 'index.html' }, 
            { tagText: 'About', href: 'about.html' }, 
            { tagText: 'Contact', href: 'contact.html' } 
        ],
        // styles = 'normal' or 'ui-gradients';
        styles: 'ui-gradients',
        colors: { // colors of background for gradients
            toRight: '#d1b7b7', 
            atLeft: '#f7f1e3' 
        }
    });

window.onready = NavHelper;