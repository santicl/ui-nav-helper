import { NavHelper } from "./nav-component.js";
let URL = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png';
function App() {
    NavHelper('app', {
        urlImg: [URL],
        lists: [ 'Home', 'About', 'Contact', 'Portfolio' ],
        ALT: 'Google'
    });
}

window.onload = App;