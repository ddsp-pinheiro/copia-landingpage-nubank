let cpf = document.querySelector('#cpf')
let cpfOk = false

function validaCpf() {
    let txtCpf = document.querySelector('#txtCpf')
    if (cpf.value.length < 11 ||cpf.value.length >=12 ) {
        txtCpf.innerHTML = 'Precisamos de um CPF válido.'
        txtCpf.style.color = 'red'
    } else {
        txtCpf.innerHTML = ' '
        cpfOk = true
    }

}

/*function continuar(){
    if(cpfOk == true){
        alert('FORMULARIO ENVIADO')
    }else{
        alert('PREENCHA O FORMULARIO CORRETAMENTE')
    }
}*/