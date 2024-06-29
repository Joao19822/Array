var alunos = [];
var btn_cadastrar =document.getElementById('cadastar')
btn_cadastrar.addEventListener
('click', e =>{
    let nome = document.getElementById('nome');
    if(nome.value == "") {
        alert('ah, preencha o nome Pls')
        nome.focus()
    } else {
        alunos.push(nome.value);
        listar_alunos();

    }
    
})
function listar_alunos() {
    let listar = document.getElementById('listar')
    listar.innerHTML = "";
    alunos.forEach(aluno => {
        listar.innerHTML += `<li>${aluno} <button>Editar</button><button>Excluir</button</li>`;
    });
}
listar_alunos();

let lista_alunos = document.getElementById('lista_alunos');
lista_alunos.innerHTML = "";

alunos.forEach((aluno,index) => {
    lista_alunos.innerHTML += `<tr>
    <td>${index + 1}</td>
    <td>${aluno}</td>
    <td>
    <button class="btn btn-primary">Cadastar</button>
    <button class="btn btn-danger"></i calss= bi bi-trash"></i></button>
    </td>
    </tr>`
})

listar_alunos()

var btn = document.getElementById('cadastar')

// btn.addEventListener('click', e => {
//     let nome = document.getElementById('nome')
//         if (nome.value == "") {
//             alert('digita algo pelo menos😑')
//         } else {
//             alunos.push(nome.value)
//             nome.value = ""
//             listar_alunos();

//         }

    

// })


