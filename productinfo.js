import promptSync from "prompt-sync";
const prompt = promptSync(); // promtSync() - creates input function, prompt() - used to ask user questions
/* creating storage where products will be stored i.e., Empty Inventory*/
let inventory = []; // mini-database
// Function to add new products in the inventory
function addProduct(product) {
    inventory.push(product); // .push() -> adds to array
    console.log("Product Added Successfully...");
}
// Function to display products
function displayProducts() {
    inventory.forEach((product) => {
        console.log("Id:", product.id);
        console.log("Name:", product.name);
        console.log("Price: Rs", product.price);
        console.log("Status:", product.instock ? "Available" : "Out of Stock");
        console.log("-------------------------");
    });
}
// Function to return product with matching id 
function findProductbyId(id) {
    return inventory.find((product) => product.id === id); // .find() - goes through array and stops when match is found
}
// Function to update stock
function updateStock(id, status) {
    let product = findProductbyId(id);
    if (product) {
        product.instock = status;
    }
    else {
        console.log("Product not found");
        return;
    }
    console.log("Stock Status Updated Successfully...");
}
// Function to remove product from inventory
function removeProduct(id) {
    inventory = inventory.filter((product) => product.id !== id); // .filter() - keeps only item that passes condition
    console.log("Product Removed Successfully");
}
function inputProduct() {
    const id = Number(prompt("Enter product ID: "));
    const name = prompt("Enter product name: ");
    const price = Number(prompt("Enter price: "));
    const instockinput = prompt("Is in stock? (yes/no): ");
    const instock = instockinput.toLowerCase() === "yes";
    addProduct({ id, name, price, instock });
}
const name = prompt("Enter your name: ");
console.log("Hello " + name);
console.log("Choose your task from below menu");
// Making it CLI interactive 
function menu() {
    while (true) {
        console.log("\n1. Add Product");
        console.log("2. View Products");
        console.log("3. Find Product");
        console.log("4. Update Stock");
        console.log("5. Remove Product");
        console.log("6. Exit");
        const choice = prompt("Enter choice: ");
        if (choice === "1") {
            inputProduct();
        }
        else if (choice === "2") {
            displayProducts();
        }
        else if (choice === "3") {
            let id = Number(prompt("Enter Id to find: "));
            let result = findProductbyId(id);
            console.log(result);
        }
        else if (choice === "4") {
            let id = Number(prompt("Enter Id of the product to update: "));
            let status_ = prompt("Enter status, Is in stock (yes/no): ");
            let status = status_.toLowerCase() === "yes";
            updateStock(id, status);
        }
        else if (choice === "5") {
            let id = Number(prompt("Enter Id of product to remove: "));
            removeProduct(id);
        }
        else if (choice === "6") {
            break;
        }
        else {
            console.log("Invalid Choice");
        }
    }
}
menu();
