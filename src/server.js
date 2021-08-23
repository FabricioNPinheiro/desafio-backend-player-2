const http = require("http");
const app = require("./config/express")();
const db = require("../src/config/databaseMongodb");

http.createServer(app).listen(app.get("port"), () => {
  console.log("Servidor iniciado com sucesso na porta: " + app.get("port"));
});
db("mongodb://localhost/usersPlayer2");
