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

var inventory = 0;

function displayProducts() {
    connection.query("SELECT * FROM products", function(err, res) {

        console.log(" \n ------------ CURRENT INVENTORY --------------- \n")
      for (var i = 0; i < res.length; i++) {
          inventory++;
        console.log(res[i].id + " | " + res[i].product_name + " | " + res[i].department_name + " | $" +  res[i].price + " | " + res[i].stock_quantity + "\n");
      }
      console.log("-----------------------------------");
      requestOrderId(res)
    });
    
  }

//asks customer which Id they want to buy

  function requestOrderId(inventory){
    inquirer
    .prompt([
        {
      name: "selectItem",
      type: "input",
      message: "Select desired item by ID"
        }
    ])
    .then(function(res) {
        // console.log(res, 'res')
        var userChoice = parseInt(res.selectItem);
        console.log(userChoice);
        
        var product = checkInventory(userChoice, inventory); 
        if (product) {
            // console.log(res[i].product_name)
            orderQuantity(product);
        }
        else {
            console.log("Sorry we don't have that in stock")
            displayProducts();
        }
   
  });
}


function checkInventory(userChoice, inventory) {
    // console.log(inventory);
    for (var i = 0; i < inventory.length; i++) {
        if (inventory[i].id === userChoice) {
        // If a matching product is found, return the product
        return inventory[i];
        }
    }
    // Otherwise return null
    return null;
    }
    



  function orderQuantity(product){
      inquirer
      .prompt([
    {
        name:"desiredQuantity",
        type:"input",
        message:"How many do you want of this item?"
        }
    ])
        .then(function(answer) {
            // console.log(answer, "answer");
            // console.log( "We have this many: " + product.stock_quantity);
           var quantity = parseInt(answer.desiredQuantity);
console.log(quantity);

           if (quantity > product.stock_quantity) {
               console.log("Not enough quantity");
               displayProducts();
           }
           else {
               purchaseItem(product, quantity);
           
        };
    })
          }


function purchaseItem(product, quantity) {
    connection.query(
"Update products SET stock_quantity = stock_quantity - ? WHERE id =?",
[quantity, product.id],
function(err, res) {
    console.log("---------------------------------- \n")
console.log("You have successfully purchased " + quantity + " " + product.product_name + "!");
console.log("Your total cost was: $" + quantity * product.price)
displayProducts();
    }
);
}