# ui-nav-helper
Ayuda a crear la navegación rápida con dos tipos de diseños(Diseño predefinido, Diseño con gradiente), solo se agrega varios parámetros y tendrás tu navegación en tu sitio web
## Use

_JavaScript_

```javascript
NavHelper(ID, {
    imgContent: {},
    lists: [  // array of object for TAG A element ],
    dropdown: [ // At name items add name lists with tagText and href for dropdown ],
    
    // styles = 'normal' or 'ui-gradients';
    styles: 'ui-gradients',
    colors: { // colors of background for gradients }
});
```

#Example
Add any id in your template | First point
```javascript
NavHelper(ID) 
```

## Use
```javascript
NavHelper('app')
```

## Add img info

```object
imgContent: {
        URL: URL,
        ALT: 'Google'
    }
```

## Add content for tag A

```array
lists: [ // array of object for TAG A element
        { tagText: 'Home', href: 'index.html' },
        { tagText: 'About', href: 'about.html' },
        { tagText: 'Contact', href: 'contact.html' },
        { tagText: 'Services', href: 'services.html' },
    ]
```

## Add dropdown if you need

```array
dropdown: [ // At name items add name lists with tagText and href for dropdown
        {
            'Services': [
                { tagText: 'Web Design', href: 'web-design.html' },
                { tagText: 'Web Development', href: 'web-development.html' }
            ]
        }
    ]
```
## Add Styles for Navigation | two options (Normal style or Gradient style)

```object
// styles = 'normal' or 'ui-gradients';
    styles: 'ui-gradients',
    colors: { // colors of background for gradients
        toRight: '#d1b7b7',
        atLeft: '#f7f1e3'
    }
```

## View all example: https://github.com/santicl/ui-nav-helper/blob/master/src/app.js

## Template

```html
<div id="app" class="c-nav">
    
    <!-- NavHelper here -->
    
    <h1>GOOGLE INC</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores exercitationem ut dolor rerum, soluta neque? Neque eum quibusdam consectetur veritatis quas debitis quam nostrum numquam quod reprehenderit earum, accusantium mollitia?</p>
</div>
```
### Nav location | first element in tag body
