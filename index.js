const express = require("express");

const app = express();
app.use(express.static("."));

app.listen(3000, () => {
      Console.log("App started on port 3000");
});
