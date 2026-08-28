const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("API de Data e Hora funcionando!");
});

app.get("/data-hora", (req, res) => {
    const agora = new Date();

    res.json({
        data: agora.toLocaleDateString("pt-BR", {
            timeZone: "America/Sao_Paulo"
        }),
        hora: agora.toLocaleTimeString("pt-BR", {
            timeZone: "America/Sao_Paulo"
        })
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});