const express = require("express");
const app = express();
const db = require("./db/connect");
const bodyParse = require('body-parser');

const PORT = 3000;

app.listen(PORT, function () {
  console.log(`O express esta rodando na porta ${PORT}`);
});
//bodyparse
app.use(bodyParse.urlencoded({ extended: false }));
//db connection
db.authenticate()
  .then((result) => {
    console.log("Conectou ao banco com sucesso");
  })
  .catch((err) => {
    console.log("Ocorreu um erro ao conectar", err);
  });

//routes
app.get("/", (req, res) => {
  res.send("Esta funcionando");
});

//jobs router
app.use("/jobs", require("./routes/jobs"));
//sqlite salvo em app de cel para salvar dados e nao info de login, salvar datas favoritas etc
