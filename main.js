const form = document.getElementById('form-agenda');
const nomes = [];
const números = [];

let linhas = '';
form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();    
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNúmeroContato = document.getElementById('número-contato');

    if (números.includes(inputNúmeroContato.value)) {
        alert(`O número: ${inputNúmeroContato.value} já foi inserido`);
    } else {
        
        nomes.push(inputNomeContato.value);
        números.push((inputNúmeroContato.value));

        let linha = `<tr>`;
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNúmeroContato.value}</td>`;
        linha += `</tr>`;
        
        linhas += linha
    }

    
    inputNomeContato.value = '';
    inputNúmeroContato.value = '';


};


function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

