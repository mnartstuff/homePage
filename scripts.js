(function(){
    "use strict";

    const links = document.querySelectorAll('a');

    for( let i=0; i<links.length; i++ ){

        links[i].setAttribute("target", "_blank");
    }



}());


// setAttribute("target", "_blank");