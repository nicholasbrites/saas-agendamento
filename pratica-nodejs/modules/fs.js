const fs = require("fs");
const path = require("path");

// criar pasta
fs.mkdir(path.join(__dirname, "/test"), (err) => {
  if (err) {
    return console.log("Erro ao criar pasta: ", err);
  }
  console.log("Pasta criada com sucesso!");
});

// criar arquivo
fs.writeFile(
  path.join(__dirname, "/test", "test.txt"),
  "Hello Node.js",
  (err) => {
    if (err) {
      return console.log("Erro ao criar arquivo: ", err);
    }
    console.log("Arquivo criado com sucesso!");
  },
);

// adicionar conteúdo ao arquivo
fs.appendFile(
  path.join(__dirname, "/test", "test.txt"),
  "\nHello World!",
  (err) => {
    if (err) {
      return console.log("Erro ao adicionar conteúdo: ", err);
    }
    console.log("Conteúdo adicionado com sucesso!");
  },
);

// ler arquivo
fs.readFile(path.join(__dirname, "/test", "test.txt"), "utf-8", (err, data) => {
  if (err) {
    return console.log("Erro ao ler arquivo: ", err);
  }
  console.log("Conteúdo do arquivo: ", data);
});
