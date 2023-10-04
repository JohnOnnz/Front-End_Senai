const inputCep = document.getElementById('cep')

async function consultaCep(cep) {
    try {
        const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const resultado = await resposta.json();

        if (resultado.erro === true) {
            alert('Cep Inexistente');
        } else {
            console.log(resultado);

            const inputRua = document.getElementById('adress');
            const inputBairro = document.getElementById('bai');
            const inputCidade = document.getElementById('city');
            const inputUf = document.getElementById('estado');

            inputRua.value = resultado.logradouro;
            inputBairro.value = resultado.bairro;
            inputCidade.value = resultado.localidade;
            inputUf.value = resultado.uf;
        }
    } catch (erro) {
        alert('CEP de formato inválido');
    } finally {
        console.log('Processamento concluído');
    }
}

inputCep.addEventListener('focusout', () => consultaCep(inputCep.value));

/* consultaCep('06708280') */




























/* const retorno = fetch("https://viacep.com.br/ws/06708280/json/") //requisicao

.then(promessa => promessa.json()) // Convertendo a promessa para um arquivpo json

function consultaCep(){
    const retorno = fetch()
    

    .then((resultado) => {
        if(resultado.erro ===true){
            alert("CEP INEXISTENTE!")
        }
        else{
            console.log(resultado)
            const inputBairro = document.getElementById('bai')
            const inputCidade = document.getElementById('city')
            const  inputRua = document.getElementById('adress')
            const inputCep = document.getElementById('cep')



            inputBairro.value = resultado.bairro
            inputCidade.value = resultado.localidade
            inputRua.value = resultado.logradouro
            inputCep.value = resultado.cep

        }
    } ) //exibe o resultado 
    .catch(erro => alert("cep com estrtutra invalido")) // Trabalhando erro
}
inputCep.add('focusout', () => consultaCep(valorCep))

console.log(retorno) */