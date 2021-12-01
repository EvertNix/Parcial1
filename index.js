let express = require("express");
let app = express();
let path = require("path");

//Settings
app.set("port", 3000);
app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");

//routes
app.get("/", (req, res) => {
  res.render("index.html", { title: "Videojuegos24" });
});

app.get("/contactanos", (req, res) => {
  res.render("contactanos.html", { title: "Envianos un mensaje" });
});

//Static files
app.use(express.static(path.join(__dirname, "public")));

app.listen(app.get("port"), () => {
  console.log("Servidor en el puerto ", app.get("port"));
});
