/*
* 9gag-unblocked
* A bookmarklet to bypass the login requirement for viewing NSFW content on 9gag.
*
* Robin Gustafsson
* 2014-08-10
*/

(function(){
	
	var nsfwElems = document.getElementsByClassName("badge-nsfw-entry-cover");

	while (nsfwElems.length > 0) {
		var elem = nsfwElems[0];
		var parent = elem.parentNode;

		var a = document.createElement("a");
		if (window.location.href !== elem.href) {
			a.href = elem.href;
		}
		
		var img = document.createElement("img");
		img.class = "badge-item-img";
		img.src = "http://d24w6bsrhbeh9d.cloudfront.net/photo/" + elem.href.substring(20) + "_700b.jpg"; // "http://9gag.com/gag/".length == 20
		
		parent.innerHTML = "";
		a.appendChild(img);
		parent.appendChild(a);
	};

})();