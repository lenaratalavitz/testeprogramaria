const express = require("express")
const router = express.Router()
const app = express()


const porta = 3333

const mulheres = [
    {
        nome: "simara conceição",
        imagem: "https://github.com/simaraconceicao.png",
        minibio: "desenvolvedora e instrutora"
    },
    {
        nome: "Iana chan",
        imagem: "",
        minibio: "fundadora da programaria"
    },
    {
        nome: "Nina da hora",
        imagem: "",
        minibio: "hacker antirracista"
    }
]

function mostraMulheres(request, response){
    response.json(mulheres)
}
function mostraPorta() {
    console.log( "servidor criado e rodando na porta ", porta)
}

app.use(router.get("/mulheres", mostraMulheres))
app.listen(porta, mostraPorta)