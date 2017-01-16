$('.btn1').click(function() {
	
});
document.getElementById('bouton').onclick = function(){
	// 1 ère étape: demande et stoquer l'information (revenu imposable)
	var revenu = prompt("Combien avez-vous gagné cette année?");
	// jusqu-ici, revenu contient du texte : "10000"
	// Je veux que ça devienne : 10000 (un nombre)