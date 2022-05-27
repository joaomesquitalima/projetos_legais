let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');

let main = document.getElementById('areaLista');

let contador = 0;

function addTarefa(){
    let valorInput= input.value;

    if(valorInput !=='' && valorInput !==null && valorInput !== undefined){

        ++contador;
        let novoItem = `
        
        <div id="${contador}" class="item">

            <div onclick="marcarTarefa(${contador})" class="item-icone">
                <i id="icone_${contador}" class="fas fa-circle"></i>
            </div>

            <div class="item-nome">
                ${valorInput}
            </div>

            <div class="item-botao">
                <button onclick= "deletar(${contador})" class="delete"><i class="fas fa-trash-can"></i>  Deletar</button>
            </div>

        </div>`;
        main.innerHTML += novoItem;

        input.value = '';
        input.focus();
    }
}


function deletar(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcarTarefa(id){
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');

    if(classe == 'item'){
        item.classList.add('clicado');

        var icone = document.getElementById('icone_'+id);
        icone.classList.remove('fa-circle');
        icone.classList.add('fa-check-circle');
    }

    else{

        item.classList.remove('clicado');

        var icone = document.getElementById('icone_'+id);
        icone.classList.remove('fa-check-circle');
        icone.classList.add('fa-circle');
        
    }

    
}

input.addEventListener('keyup', function(event){
    if(event.keyCode ===13){
        event.preventDefault();
        btnAdd.click();
    }
})