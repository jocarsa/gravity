class Pared extends Mundo{
constructor(radio) {
	super()
    this.x1 = Math.random()*anchura;
    this.y1 = Math.random()*altura;
    this.angulo = Math.PI*2*Math.random()
    this.distancia = Math.random()*100
    this.x2 = this.x1+Math.cos(this.angulo)*this.distancia
    this.y2 = this.y1+Math.sin(this.angulo)*this.distancia
        
  }
    dibuja(){
    		
       		contexto.lineWidth = 5
            contexto.strokeStyle = "white"
            contexto.beginPath()
            
            contexto.moveTo(this.x1,this.y1)
            
            	
             contexto.lineTo(this.x2,this.y2)
           
            
            contexto.closePath()
            contexto.stroke()
      
   
   }
}