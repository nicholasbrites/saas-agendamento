const mongoose = require("mongoose");

const connectToDatabase = async () => {
  // Recomendo colocar a URI inteira em .env como MONGO_URI.
  const uri =
    process.env.MONGO_URI ||
    `mongodb+srv://${encodeURIComponent(process.env.MONGODB_USER || "")}:${encodeURIComponent(
      process.env.MONGODB_PASSWORD || "",
    )}@aulao-nodejs.hovzzus.mongodb.net/myDatabase?retryWrites=true&w=majority`;

  if (!uri || uri.includes("mongodb+srv://:@")) {
    console.error(
      "MONGO_URI ou MONGODB_USER/MONGODB_PASSWORD não configurados corretamente no .env",
    );
    return;
  }

  try {
    await mongoose.connect(uri);
    console.log("Conectado com sucesso ao banco de dados");
  } catch (err) {
    console.error("Erro ao conectar com o banco de dados:", err);
    process.exit(1);
  }
};

module.exports = connectToDatabase;
