function linkHijack(document) {
    'use strict';
    document.addEventListener('click', function(event) {
        event.preventDefault();
    });
}

var linkLists = [].slice.call(document.querySelectorAll('a'));
linkLists.forEach(linkHijack);
