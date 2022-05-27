


function buscarCEP(){
    let input = document.getElementById('cep').value;

    const ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://viacep.com.br/ws/' + input + '/json/');

    ajax.send();

    ajax.onload = function(){

       

        let obj = JSON.parse(this.responseText);

        let logradouro = obj.logradouro;
        let cidade = obj.localidade;
        
        let bairro = obj.bairro;


        document.getElementById('rua').innerHTML = 'Logradouro:' + logradouro ;

        document.getElementById('bairro').innerHTML = 'Bairro: ' + bairro ;
        document.getElementById('cidade').innerHTML = 'Cidade:' + cidade ;

    
}



}



