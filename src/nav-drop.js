window.onload  = function() {
    let lists = document.getElementById('lists').childNodes;
    for (let i = 0; i < lists.length; i++) {
        if (lists[i].childNodes.length > 1) {
            lists[i].addEventListener('mouseover', function() {
                document.getElementById(`${lists[i].id}-dropdown`).style.visibility = 'visible';
            })
            lists[i].addEventListener('mouseout', function() {
                document.getElementById(`${lists[i].id}-dropdown`).style.visibility = 'hidden';
            })
        }
    }
}