function calcular (){
    if(validaDesc(), validaQuant(), validaUnit()){
    let nTotal = quant.value * unit.value;
    let item = desc.value
    total.value = nTotal;
}
    console.log(nTotal, item);
}

function validaDesc (){
    let item = desc.value
    if(item.trim() === ""){
        desc.style.background = "yellow";
        mensagem.innerHTML = "Preencha a descrição do produto!";
        $('#alerta').modal('show');
        return false;
    }else {
        desc.style.background = 'white';
        return true;
    }
}
function validaQuant (){
    if(quant.value.trim() === ""){
        quant.style.background = "yellow";
        mensagem.innerHTML = "Preencha a quantidade do produto!";
        $('#alerta').modal('show');
        return false;
    }else {
        if(quant.value >0 && quant.value <= 1000){
            return true;
        }else{
            quant.style.background = "yellow";
            mensagem.innerHTML = "Preencha a quantidade do produto!";
            $('#alerta').modal('show');
            return false;
        }
    }
}
function validaUnit (){
    if(unit.value.trim() === ""){
        unit.style.background = "yellow";
        mensagem.innerHTML = "Preencha a unidade do produto!";
        $('#alerta').modal('show');
        return false;
    }else {
        unit.style.background = 'white';
        return true;
    }
}