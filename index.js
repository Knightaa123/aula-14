const express = require('express')

const app = express()
app.use(express.json())


const Estudantes =[
{
nome : 'Carlos1',
materia: 'Back1 end',
turma:'t-201',
cpf :'002207751'
},
{
nome : 'Carlos2',
materia: 'Back2 end',
turma:'t-202',
cpf :'003308821'
},
{
nome : 'Carlos3',
materia: 'Back3 end',
turma:'t-203',
cpf :'16060603'
},
{
nome : 'Carlos4',
materia: 'Back4 end',
turma:'t-204',
cpf :'009123123'
},
]

app.get('/',(req, res) =>{
    return res.send('hello world')
})
app.get('/estudantes',(req, res) =>{
    return res.json(Estudantes)
})
app.get('/estudantes/:cpf',(req,res)=>{
    const estudante = Estudantes.find(e => e.cpf == req.params.cpf)
    return res.json(estudante)
})
app.post('/estudantes',(req, res) =>{
    const dados = req.body
    console.log(req.body)
    Estudantes.push({nome:'Teste',turma:'t-50', materia:'DevOps',cpf:'99919191923'})
    return res.send('estudante criado')

})



app.listen(3000, () =>{
 console.log('Api rodando')

})

