const app = require("./config/express")();
const http = require("http");

http.createServer(app).listen(app.get("port"), () => {
  console.log("Servidor iniciado com sucesso na porta: " + app.get("port"));
});
