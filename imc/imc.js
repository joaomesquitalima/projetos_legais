
function calc(){
    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value;
    var imc = peso/(altura**2);
    document.getElementById('oimc').innerHTML= imc;
    if (imc < 18.5){
        document.getElementById('diagnostico').innerHTML = 'Você esta com magreza';
    }

    if (imc >= 18.5 && imc <= 24.9){
        document.getElementById('diagnostico').innerHTML = 'Você esta normal';
    } 

    if(imc >= 25.0 && imc <=29.9){
        document.getElementById('diagnostico').innerHTML = 'Voce esta com sobrepeso';
    }

    if(imc >= 30.0 && imc <=39.9){
        document.getElementById('diagnostico').innerHTML = 'Voce esta com Obesidade';
    }

    if(imc >= 40){
        document.getElementById('diagnostico').innerHTML = 'Voce esta com obesidade grave';
    }
    
    document.getElementById('quad').style.transform ='rotateY(3600deg)';

    document.getElementById('title').innerHTML = 'Aqui esta o resultado';
    document.getElementById('pegar').style.display = 'none';
    document.getElementById('resultado').style.display = 'flex';
    document.getElementById('resultado').style.justifyContent = 'center';
    document.getElementById('resultado').style.alignItems = 'center';
   
}


function about(){
    if(document.getElementById('p1').style.display == 'none'){
        document.getElementById('p1').style.display = 'block';
        document.getElementById('p2').style.display = 'block';
        

        document.getElementById('obs').style.animationName = 'obsv';
        document.getElementById('obs').style.animationDuration = '1s';
    }
    else{
        document.getElementById('p1').style.display = 'none';
    document.getElementById('p2').style.display = 'none';

    document.getElementById('obs').style.animationName = 'obsvi';
    document.getElementById('obs').style.animationDuration='1s';

    }
    

}