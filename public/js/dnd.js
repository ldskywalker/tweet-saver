function cancel(e) {
  if (e.preventDefault) {
    e.preventDefault();     
  }
  return false;
}

$(document).ready(function() {
	var drop = document.getElementById('drop');

	//add listener to each item
	$('.tweet').each(function(index) {
		$(this)[0].addEventListener('dragstart',function(e){
			draggedItem = jQuery(this);
			e.dataTransfer.setData('Text', this.id);
		},false);
	});

	drop.addEventListener('dragover', cancel);
	drop.addEventListener('dragenter', cancel);
	drop.addEventListener('drop', function (e) {
	   e.preventDefault();
	   var src = e.dataTransfer.getData("text/plain");
	   e.target.appendChild(document.getElementById(src));
	   e.stopPropagation();
	   // test if this browser supports localStorage
	   if(typeof(Storage) !== "undefined") {
	   		localStorage.setItem("alltweets", localStorage.getItem("alltweets") + document.getElementById(src));

	   		document.getElementById("drop").innerHTML = localStorage.getItem("alltweets");
		} else {
			console.log("Browser does not support local Storage");
		}
	  return false;
	});
})
