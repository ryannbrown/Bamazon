# Bamazon App


## How the app works
The app Bamazon works on the command line using of Node.js. This is a command line marketplace app that has a live inventory of 11 items for sale. When you run the app it will show you the inventory of products available with the following fields: ID, Product Name, Department Name, Price, and Quantity available. You will them be prompted to make a purchase of your choice.

## Technology used
Javascript, mySQL and node.js

### Required packages
Inquirer, mySQL

### APIs used
none

# Instructions

## Step 1 (create .JSON file)
Navigate to .js file directory in your terminal and "NPM init" in order to create a package.json file which will hold packages we install next. 

![image](https://user-images.githubusercontent.com/44414542/57340058-3b48a280-7102-11e9-8331-158274c5aaee.png)

## Step 2 (Install Packages)

First of all, we need to install the correct npm packages. For each of the packages that we are requiring at the top of our code, we need to NPM Install them in the terminal when navigated to bamazonCustomer.js. This will enable to us to utilize the npm packages implemented in the code so that we can get the information we are requesting. We need to install the packages mySQL (-NPM install mySQL-) and Inquirer (-NPM install inquirer-) (Below is example for which packages to install)


![image](https://user-images.githubusercontent.com/44414542/57339994-ee64cc00-7101-11e9-8e7e-0c2eb9165351.png)


## step 3 (Establish mySQL Workbench connection)
In the bamazonCustomer.js file you will need to insert your password you have set up with your SQL workbench (as well as any other fields that may be set differently in your system)

![image](https://user-images.githubusercontent.com/44414542/57340151-9ed2d000-7102-11e9-9760-c603a7d5de1d.png)


## Step 3 (Run file)
If you are navigated in your terminal to the folder containing bamazonCustomer.js,
Run the .js file with "NPM start" or "node bamazonCustomer.js"

You will see the inventory appear for what is available in the store. 

![image](https://user-images.githubusercontent.com/44414542/57340277-fcffb300-7102-11e9-9dcc-de6faa2024da.png)


## Step 3 (Buy item)
Insert the ID of which product you want to buy and you will see the quanity change in the item reflected after the purchase, as well as the amount of money you spent.

The inventory will pop back up and you can continue shopping! 



![image](https://user-images.githubusercontent.com/44414542/57340341-3a644080-7103-11e9-9c96-6ca6cc281c8d.png)

(currently all items are back-ordered ;) 

## Thank you! 

