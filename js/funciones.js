function poligono(cx,cy,lados,radio,color){
                contexto.beginPath()
                contexto.moveTo(cx+Math.cos(0)*radio,cy+Math.sin(0)*radio)
                for(var i = 1;i<lados;i++){
                    contexto.lineTo(
                        cx+Math.cos(Math.PI*2*(i/lados))*radio,
                        cy+Math.sin(Math.PI*2*(i/lados))*radio
                    )
                }
                
                contexto.closePath()
                contexto.fillStyle = color
                contexto.fill();
                contexto.stroke();
            }
            

function interseccion(x1, y1, x2, y2, x3, y3, x4, y4) {

  // Check if none of the lines are of length 0
	if ((x1 === x2 && y1 === y2) || (x3 === x4 && y3 === y4)) {
		return false
	}

	denominator = ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1))

  // Lines are parallel
	if (denominator === 0) {
		return false
	}

	let ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denominator
	let ub = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / denominator

  // is the intersection along the segments
	if (ua < 0 || ua > 1 || ub < 0 || ub > 1) {
		return false
	}

  // Return a object with the x and y coordinates of the intersection
	let x = x1 + ua * (x2 - x1)
	let y = y1 + ua * (y2 - y1)

	return {x, y}
	return true;
} 
function calculateIntersection(point1Line1, point2Line1, point1Line2, point2Line2) {
  const x1 = point1Line1.x;
  const y1 = point1Line1.y;
  const x2 = point2Line1.x;
  const y2 = point2Line1.y;
  const x3 = point1Line2.x;
  const y3 = point1Line2.y;
  const x4 = point2Line2.x;
  const y4 = point2Line2.y;

  const denominator = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);

  if (denominator === 0) {
    return false; // Lines are parallel or coincident
  }

  const intersectionX = ((x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4)) / denominator;
  const intersectionY = ((x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4)) / denominator;

  // Check if the intersection point is within the line segments
  if (
    intersectionX >= Math.min(x1, x2) && intersectionX <= Math.max(x1, x2) &&
    intersectionX >= Math.min(x3, x4) && intersectionX <= Math.max(x3, x4) &&
    intersectionY >= Math.min(y1, y2) && intersectionY <= Math.max(y1, y2) &&
    intersectionY >= Math.min(y3, y4) && intersectionY <= Math.max(y3, y4)
  ) {
    return { x: intersectionX, y: intersectionY };
  } else {
    return false; // Intersection point is outside the line segments
  }
}






