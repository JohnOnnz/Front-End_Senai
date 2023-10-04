async function consultaCep(cep){

    try{
        const resultado = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const resultadoConvertido = await resultado.json()
       if(resultadoConvertido.erro === true){
        alert("cep de formato valido , mas inexistente")
       }else{

        //Recendo os inputs
        const inputRua = document.getElementById('adress')
        const inputBairro = document.getElementById('bai')
        const inputCidade = document.getElementById('city')
        const inputUf = document.getElementById('estado')

        //Atribuindo valor aos inputs
        inputRua.value = resultadoConvertido.logradouro
        inputBairro.value = resultadoConvertido.bairro
        inputCidade.value = resultadoConvertido.localidade
        inputUf.value = resultadoConvertido.uf

        console.log(resultadoConvertido)
       }
    }catch(erro){
        alert("cep de formato invalido")
    }

}

const inputCep = document.getElementById('cep')
inputCep.addEventListener('focusout', () => consultaCep(inputCep.value))