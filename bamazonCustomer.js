var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Soccer2121!",
  database: "bamazon"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  displayProducts();
});


function displayProducts() {
    connection.query("SELECT * FROM products", function(err, res) {

        console.log(" \n ------------ CURRENT INVENTORY --------------- \n")
      for (var i = 0; i < res.length; i++) {
        console.log(res[i].id + " | " + res[i].product_name + " | " + res[i].department_name + " | $" +  res[i].price + " | " + res[i].stock_quantity + "\n");
      }
      console.log("-----------------------------------");
      requestOrderId(res)
    });
    
  }

//asks customer which Id they want to buy

  function requestOrderId(inventory){
    inquirer
    .prompt({
      name: "selectItem",
      type: "input",
      message: "Select desired item by ID"
    })
    .then(function(answer) {
        var userChoice = parseInt(answer.choice);
        var product = checkInventory(userChoice, inventory);
        
        if (product) {
            orderQuantity(product);
        }
        else {
            console.log("Sorry we don't have that in stock")
            displayProducts();
        }
  });
}

  function orderQuantity(){
      inquirer
      .prompt([
    {
        name:"desiredQuantity",
        type:"input",
        message:"How many do you want of this item?"
        }
    ])
        .then(function(answer) {
           var quantity = parseInt(answer.quantity);

console.log( "We have this many: " + product.stock_quantity);

           if (product.stock_quantity > quantity) {
               console.log("Not enough quantity");
               displayProducts();
           }
           else {
               purchaseItem(product, quantity);
           
            }
          });
    }   


function purchaseItem(product, quantity) {
    connection.query(
"Update products SET stock_quantity = stock_quantity - ? WHERE item_id =?",
[quantity, product.item_id],
function(err, res) {
console.log("You have purchased" + quantity + product.product_name + "'s");
loadProducts();
    }
);
}

function checkInventory(userChoice, inventory) {
    for (var i = 0; i < inventory.length; i++) {
        if (inventory[i].item_id === userChoice) {
        // If a matching product is found, return the product
        return inventory[i];
        }
    }
    // Otherwise return null
    return null;
    }
    