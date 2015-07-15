$(window).load(function() {
  $(".circle").each(function(i, that) {
      drawCircle($(that));
  });
});

function drawCircle(circle) {
  var size = 100 - circle.parent().attr("data-size"); //Récupération de la valeur size
  var coor = [[], []];
  size = (size / 100) * 180; //Calcul de l'angle en degrès
  console.log(size);
  coor[0] = polarToCartesian(90, 90, 84, 270 - size); //Coordonnées de l'extremité gauche
  coor[1] = polarToCartesian(90, 90, 84, 270); //Coordonnées de l'extremité droite
  circle.attr("d", "M " + coor[0][0] + "," + coor[0][1] + " A 84 84 0 " + (( 100 - circle.parent().attr("data-size") > 50) ? 0 : 1) +" 0 " + coor[1][0] + "," + coor[1][1]); //Affectation de la valeur au path SVG
}

//Calcul des coordonnées carthésiennes par rapport au centre du cercle, du rayon et de l'angle
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = angleInDegrees * Math.PI / 180.0;
  var x = centerX + radius * Math.cos(angleInRadians);
  var y = centerY + radius * Math.sin(angleInRadians);
  return [x,y];
}