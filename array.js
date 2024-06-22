var alunos = [];

function listar_alunos() {
    let listar = document.getElementById
        ('listar')
    listar.innerHTML = "";
    alunos.forEach(aluno => {
        listar.innerHTML += `<li>${aluno} <button>Editar</button><button>Excluir</button</li>`;
    });
}
listar_alunos();

var btn = document.getElementById('cadastar')

btn.addEventListener('click', e => {
    let nome = document.getElementById
        ('nome')
        if (nome.value == "") {
            alert('digita algo pelo menos😑')
        } else {
            alunos.push(nome.value)
            nome.value = ""
            listar_alunos();

        }

    

})


