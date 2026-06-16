require("dotenv").config();

const express = require("express");
const path = require("path");
const cors = require("cors");

const port = process.env.PORT;

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  cors({
    credentials: true,
    origin: "https://flikka.netlify.app",
  })
);

app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

require("./config/db.js");

const router = require("./routes/Router.js");

app.use(router);

// Middleware de tratamento de erros global (ex: erros do multer)
app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  res.status(422).json({ errors: [err.message] });
});

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});
