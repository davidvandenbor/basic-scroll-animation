/* 
---------------------------------------------------------------------------------------------------------------------
   #region: STANDAARD SCROLL ANIMATIES 
   De simpelste manier om custom made CSS 
   animaties op HTML elementen te "plakken" 
   met getBoundingClientRect() 
   
   getBoundingClientRect() checkt hoeveel pixels
   van de bovenkant van het HTML object reeds "in beeld" is
   en gebruikt dat als trigger om CSS animaties (die 
   in het CSS bestand staan) te "plakken" op de HTML objecten
   
*/

function animeer() {
	var selected = document.querySelectorAll(".animeren");

	for (let items of selected) {
		var windowHeight = window.innerHeight;
		var elementTop = items.getBoundingClientRect().top;
		var elementVisible = 160;

		if (elementTop < windowHeight - elementVisible) {
			items.classList.add("start");
		} else {
			items.classList.remove("start");
		}
	}
}
window.addEventListener("scroll", animeer);
/* #endregion STANDAARD SCROLL ANIMATIES */
