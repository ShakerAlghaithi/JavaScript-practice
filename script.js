var menuItem = document.getElementById('menu').getElementsByTagName('li');
var headLine=document.querySelector("#text");
var btn =document.getElementById("zar");
var myMenu=document.querySelector("#menu");
var counter = 1;

//for (var i =menuItem.length - 1; i >= 0; i--) {
//menuItem[i].addEventListener("click", selectItem);
//}
myMenu.addEventListener("click", selectItem)

function selectItem(n) {
	if (n.target.nodeName=="LI") {

		headLine.innerHTML= n.target.innerHTML;
	    for (i = 0; i < menuItem.length; i++) {
	    	menuItem[i].classList.remove("selected");
	    }
		n.target.classList.add("selected");
	};
}

btn.addEventListener("click",newItem);

function newItem() {
	myMenu.innerHTML+="<li> new line "+counter+"</li>"
	counter++
}