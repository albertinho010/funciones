
function palindrome(mensaje){
    
//Quitamos los espacios
    var arr = mensaje.split(' ');
    var newArr="";
    console.log("Tamaño de vector: " +arr.length);

    for (let i = 0; i<=(arr.length - 1);i++){
        console.log("Posicion["+ i +"] = " + arr[i]);
        newArr = newArr +arr[i];
    }

    console.log("Nueva Palabra: " + newArr);
    let tamano = newArr.length;

    console.log("Cantidad de Caracteres: " + tamano);

    if(( tamano % 2 ) == 0){
        
        console.log(tamano + ' es multiplo de 2');

    }else{

        console.log(tamano + ' no es multiplo de 2');

    }


    let cont=0;
    let cantidad = (tamano/2);
    for (let i =0;i<=(cantidad - 1);i++){
        if( newArr.charAt(i) == (newArr.charAt(tamano-(i+1))) ){
        console.log("Posocion["+i+"]=" + newArr.charAt(i) + ", Posicion[" + (tamano-(i+1)) + "]= " + newArr.charAt(tamano - (i+1)) + ", Igualdad: Si");
        }else{
            console.log("Posicion["+i+"]=" + newArr.charAt(i) + ", Posicion[" + (tamano-(i+1)) + "]= " + newArr.charAt(tamano - (i+1)) + ", Igualdad: No");
            cont++;
        }
        
    }
    if(cont == 0){
        console.log("Encontramos un palindromo!!!");
        return true;
    }else{
        console.log("Nariz no es");
        return false;
    }
}

const paises = ["Mexico","Cuba","Finlandia","USA","Canada","Alemania"];

function longestCountry(paises){

    let tamano =paises.length;
    var arreglo =[];
    var temp="";
    
    for(let i = 0; i <= (tamano-1);i++){
        arreglo[i]= Array(paises[i].length,paises[i]);
    
    
    }
    
    
    
    arreglo.sort(Comparacion);
    console.log("Pais:" + arreglo[tamano-1][1] + ", Tamaño: " + arreglo[tamano-1][0] );
    
    function Comparacion(a,b){
        return a - b;
    }

}

function cantidadArgumentos(){
    console.log("Total de Parametros:" + arguments.length);
    } 

function farenheitToCelsius(grados){
let res = ((grados -32)*5)/9;
return res;
}


