import express from "express";

const app = express();

let filmes = [
    {
        anoLancamento: 2015,
        nome: "mad max fury road",
        paisOrigem: "EUA",
    },
    {
        anoLancamento: 2016,
        nome: "deadpool",
        paisOrigem: "EUA",
    },
    {
        anoLancamento: 2017,
        nome: "corra",
        paisOrigem: "EUA",
    },
    {
        anoLancamento: 2018,
        nome: "vingadores guerra infinita",
        paisOrigem: "EUA",
    },
    {
        anoLancamento: 2019,
        nome: "parasita",
        paisOrigem: "Coreia do Sul",
    },
    {
        anoLancamento: 2020,
        nome: "tenet",
        paisOrigem: "EUA",
    },
    {
        anoLancamento: 2021,
        nome: "homem aranha sem volta para casa",
        paisOrigem: "EUA",
    },
    {
        anoLancamento: 2022,
        nome: "top gun maverick",
        paisOrigem: "EUA",
    },
    {
        anoLancamento: 2023,
        nome: "oppenheimer",
        paisOrigem: "EUA",
    },
    {
        anoLancamento: 2024,
        nome: "duna parte 2",
        paisOrigem: "EUA",
    }
];
app.get("/", (req, res) => {
    res.send("funciona");
});

app.get("/filmes", (req, res) => {
    res.json(filmes);
});

app.get("/filme/:nome", (req, res) => {
    const nome = req.params.nome.toLowerCase();

    const filme = filmes.find(u => u.nome.toLowerCase() === nome);

    if (!filme) {
        return res.status(404).json({ mensagem: "filme   nao localizado" });
    }

    res.json(filme);
});

app.listen(8000, () => {
    console.log("Servidor rodando em: http://127.0.0.1:8000");
});