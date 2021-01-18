let contador = 0;
let act=[];
var pos=20;
var posy=10;
var espacio=900; 


// Estar por hacer las funciones de ordenado por hora de termino para despues animarlos ordenandose y finalmente hacer la animacion de greedy
function setup() {
  let myCanvas =  createCanvas(1000, 1000);
  myCanvas.parent('canvas');
  fill(0, 102);
  textSize(20);
  textAlign(CENTER);
}
function draw() {
} // Empty draw() keeps the program running
function myFunction(){
			var inicio = document.getElementById("start").value;
			var fin = document.getElementById("end").value;
			var z= document.getElementById("identificador").value;
      var largo=longitud(inicio,fin);   
      var ancho=largo*40;
      if(espacio>=ancho){
        espacio=espacio-ancho-20;
        agrega(pos,posy,ancho,z);//x,y,ancho,ide
        pos=pos+ancho+20;
      }else{
        espacio=900;
        pos=20;
        posy=posy+100;
        agrega(pos,posy,ancho,z);
        pos=pos+ancho+20;
      }
    }

function longitud(inicio, fin){
			inicioMinutos = parseInt(inicio.substr(3,2));
  			inicioHoras = parseInt(inicio.substr(0,2));
  
  			finMinutos = parseInt(fin.substr(3,2));
  			finHoras = parseInt(fin.substr(0,2));

  			transcurridoMinutos = finMinutos - inicioMinutos;
  			transcurridoHoras = finHoras - inicioHoras;
  
  			if (transcurridoMinutos < 0) {
    			transcurridoHoras--;
    			transcurridoMinutos = 60 + transcurridoMinutos;
  			}
  			horas = transcurridoHoras.toString();
  			minutos = transcurridoMinutos.toString();
  
  			if (horas.length < 2) {
    			horas = "0"+horas;
  			}
  			if (horas.length < 2) {
    			horas = "0"+horas;
			 }
			return horas;
		}
function agrega(x,y,largo,z){
  if(mouseIsPressed === false){
    act[contador]= new cuadro(
      x,
      y,
      largo,
      z,
      "cuadro"+contador
    );
    act[contador].colorea();
    act[contador].display();
    console.log(act[contador].staticMethod()+" "+contador);
    contador+=1;
  }
}
class cuadro {
  constructor(x,y,l,desc,ide) {
    this.x = x;
    this.y = y;
    this.alto=60;
    this.largo=l;
    this.speed = 1;
    this.desc=desc;
    this.ide=ide;
  }
  display() {
    console.log(this.ide);
    rect(this.x, this.y, this.largo, this.alto);
    this.ponerEtiqueta();
  }
  colorea(){
    var r = random(255);
    var  g = random(255);
    var  b = random(255); 
    strokeWeight(2);
    stroke(r, g, b);
    fill(r, g, b, 127)
  }
  staticMethod() {
    return this.ide;
  }
  ponerEtiqueta(){
    fill(0);
    text(this.desc,pos+20, posy+80);
  }
}