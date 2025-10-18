const app = require("./src/app");
require("./src/models")

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});