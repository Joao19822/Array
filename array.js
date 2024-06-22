var btn = document.getElementById
('cadastar')
var alunos = [];

btn.addEventListener('click' ,e=>{
    let nome =document.getElementById
    ('nome')
    alunos.push(nome.value)
    nome.value = ""
    console.log(alunos)
    
})

console.log(alunos)