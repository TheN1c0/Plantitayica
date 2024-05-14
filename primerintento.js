/*Esta función cambia el texto del titulo
cambiarT = el nombre de la función
document = el objeto que alteramos (DOC de la web)
.getElementById = metodo de document para obtenerlo
innerHTML = propiedad para modificarlo
*/
/* 
Formas de ejecutar funciones
1era forma
Esta primera función tiene el onclick en el botón */
function cambiarT(){
    document.getElementById("title").innerHTML = "Texto cambiadooooo!";
};

/* 2da forma 
Aquí creamos una variable para llamar al titulo */
var obtElemento = document.getElementById("title_2");
/* Llamamos al botón cuando haga click (onclick) se ejecutará la función que 
contiene la variable creada anteriormente, pero esta variable tiene
un innerHTML lo que hace que cambie el texto del titulo, ya que lo 
contiene */
document.getElementById("boton_2").onclick = function(){
    obtElemento.innerHTML= "Mensaje cambiado por hacer click en el botón 2";
};

/* 3era forma
Aquí llamamos al boton en una cosntante
 */
const boton = document.getElementById("boton_3");
boton.addEventListener("click",function(){
    document.getElementById("title_3").innerHTML="mensaje cambiado botón 3";
});

/* Eventos */
/* Mouseover */
const parrafoOver = document.getElementById("porAqui");
parrafoOver.addEventListener("mouseover", function(){
    alert("Bien Hecho");
});
/* keydown */
const tecladown = document.getElementById("presioneT");
tecladown.addEventListener("keydown", function(){
    alert("Bien, presionaste una tecla, sabes usar el teclado");
});