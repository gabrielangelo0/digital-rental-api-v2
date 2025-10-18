const app = require("./src/app");
const sequelize = require("./src/config/database");

const port = 3000;

sequelize
  .sync({ alter: true }) // Esse comando cria as tabelas no banco de dados, se elas não existirem
  .then(() => {
    app.listen(port, () =>
      console.log(
        `Database connected successfully and app listening on port ${port}`
      )
    );
  })
  .catch((error) => {
    console.log("err: ", error.message);
  });