['main', 'story'].forEach(n => {
    var elem = document.getElementById(n);

    elem.onselectstart = function() { return true; };
    
    Object.defineProperty(elem, 'onselectstart', { configurable: false, writable: false });
})