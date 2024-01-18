const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");

app.use(express.json());

dotenv.config();

const port = process.env.PORT;

app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

//Product
const productController = require("./product/product.controller");
app.use("/product", productController);
//User
const userController = require("./user/user.controller");
app.use("/user", userController);
//Category
const categoryController = require("./category/category.controller");
app.use("/category", categoryController);
//Transaction
const transactionController = require("./transaction/transaction.controller");
app.use("/transactions", transactionController);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
