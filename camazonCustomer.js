var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "cambo_DB"
});

// Shows all available products
function readProducts() {
  console.log("Selecting all items...\n");
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    for (i = 0; i < res.length; i++) {
      console.log("----------------------------------");
      console.log("Item ID: " + res[i].id);
      console.log("Product Name: " + res[i].proname);
      console.log("Price of product: $" + res[i].price);
      console.log("----------------------------------");
    }
  });
}
readProducts();

function start() {
  inquirer
    .prompt([
      {
        message: "Which item would you like to buy? (use ID)",
        type: "input",
        name: "productID"
      },
      {
        message: "How many would you like to purchase?",
        type: "input",
        name: "purchaseNum"
      }
    ])
    .then(function(answers) {
      var productID = answers.productID;
      var purchaseNum = parseInt(answers.purchaseNum);
      purchase(productID, purchaseNum);
    });
}

start();

function purchase(ID, NUM) {
  var flag = false;
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.log(parseInt(res[0].quantity));
    if (NUM > parseInt(res[ID - 1].quantity)) {
      console.log("No more in stock!");
    } else {
      updateProduct(ID, NUM);
      console.log("Product Stock Updated");
      flag = true;
    }
  });
  if (flag) {
    start();
  }
}

function updateProduct(ID, NUM) {
  connection.query(
    "UPDATE products SET quantity WHERE " + ID,
    [
      {
        quantity: quantity - NUM
      }
    ],
    function(err, res) {
      connection.end();
    }
  );
}

start();

// connection.connect(function(err) {
//   if (err) throw err;
//   console.log("connected as id " + connection.threadId);
//   connection.end();
// });
