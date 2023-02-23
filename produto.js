function calcular (){
    validaDesc()
    let nTotal = quant.value * unit.value;
    let item = desc.value
    total.value = nTotal;
    console.log(nTotal, item);
}

function validaDesc (){
    let item = desc.value
    if(item.trim() === ""){
        desc.style.background = "yellow";
        mensagem.innerHTML = "Preencha a descrição do produto!";
        $('#alerta').modal('show');
    }else {
        desc.style.background = 'white';
    }
}