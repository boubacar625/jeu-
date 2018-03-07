var a = document.getElementById('oui_non_0');
var b = document.getElementById('oui_non_1');
var c = document.getElementById('question');
a.onclick = function() {
	"use strict";
    
	  c.replaceWith("Bon choix !");
};

b.onclick = function() {
		"use strict";
	  c.replaceWith("Zut!");
};


