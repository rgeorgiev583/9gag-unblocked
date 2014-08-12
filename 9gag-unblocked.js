/*
* 9gag-unblocked
* A bookmarklet to bypass the login requirement for viewing NSFW content on 9gag.
*
* Robin Gustafsson
* 2014-08-12
*/

(function(){
	
	var nsfwElems = document.getElementsByClassName("badge-nsfw-entry-cover");

	while (nsfwElems.length > 0) {
		unblock(nsfwElems[0])
	};

	function unblock(elem) {
		var parent = elem.parentNode;

		var a = document.createElement("a");
		if (window.location.href !== elem.href) {
			a.href = elem.href;
		}

		var id = elem.href.substring(20); // "http://9gag.com/gag/".length == 20
		
		var img = document.createElement("img");
		img.class = "badge-item-img";
		img.src = "http://d24w6bsrhbeh9d.cloudfront.net/photo/" + id + "_460sa.gif";
		img.onerror = function() {
			this.onerror = null;
			this.src = "http://d24w6bsrhbeh9d.cloudfront.net/photo/" + id + "_700b.jpg";
		};
		
		parent.innerHTML = "";
		a.appendChild(img);
		parent.appendChild(a);
	}

})();