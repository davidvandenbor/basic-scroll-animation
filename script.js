/* 
---------------------------------------------------------------------------------------------------------------------
   #region: STANDAARD SCROLL ANIMATIES 
   De simpelste manier om custom made CSS 
   animaties op HTML elementen te "plakken" 
   met getBoundingClientRect() 
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
