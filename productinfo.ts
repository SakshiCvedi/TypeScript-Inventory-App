import promptSync from "prompt-sync";

const prompt = promptSync();    // promtSync() - creates input function, prompt() - used to ask user questions

/**
 * Represents a product with essential information.
 * 
 * Product needs these information:
 * - `id`: The unique identifier for the product.
 * - `name`: The name of the product.
 * - `price`: The price of the product.
 * - `instock`: Indicates whether the product is currently in stock.
 */
interface Product{
    id: number;
    name: string;
    price: number;
    instock: boolean;
    }


/* creating storage where products will be stored i.e., Empty Inventory*/

let inventory: Product[] = [];    // mini-database

// Function to add new products in the inventory

function addProduct(product: Product): void{
    inventory.push(product);    // .push() -> adds to array
    console.log("Product Added Successfully...");
}


// Function to display products

function displayProducts(): void{
    inventory.forEach((product) => {
        console.log("Id:",product.id);
        console.log("Name:", product.name);
        console.log("Price: Rs", product.price);
        console.log("Status:", product.instock ? "Available" : "Out of Stock");
        console.log("-------------------------");
    });
}

// Function to return product with matching id 

function findProductbyId(id:number): Product | undefined {        // undefined means if product not found returns undefined
    return inventory.find((product) => product.id === id);        // .find() - goes through array and stops when match is found
}

// Function to update stock

function updateStock(id: number, status: boolean): void {
    let product = findProductbyId(id);

    if(product){
        product.instock = status;
    }else{
        console.log("Product not found");
        return;
    }
    console.log("Stock Status Updated Successfully...");
}

// Function to remove product from inventory

function removeProduct(id: number): void{
    inventory = inventory.filter((product)=> product.id !== id);     // .filter() - keeps only item that passes condition
    console.log("Product Removed Successfully");
}

function inputProduct(): void{
    const id = Number(prompt("Enter product ID: "));
    const name = prompt("Enter product name: ");
    const price = Number(prompt("Enter price: "));
    const instockinput = prompt("Is in stock? (yes/no): ");

    const instock = instockinput.toLowerCase() === "yes";

    addProduct({id, name, price, instock});
}

const name = prompt("Enter your name: ");
console.log("Hello " + name);
console.log("Choose your task from below menu");

// Making it CLI interactive 

function menu(): void{
    while(true){
        console.log("\n1. Add Product");
        console.log("2. View Products");
        console.log("3. Find Product");
        console.log("4. Update Stock");
        console.log("5. Remove Product");
        console.log("6. Exit");
        

        const choice = prompt("Enter choice: ");

        if (choice==="1"){
            inputProduct();
        }else if(choice==="2"){
            displayProducts();
        }else if(choice==="3"){
            let id = Number(prompt("Enter Id to find: "));
            let result = findProductbyId(id);
            console.log(result);
        }else if(choice==="4"){
            let id = Number(prompt("Enter Id of the product to update: "));
            let status_ = prompt("Enter status, Is in stock (yes/no): ");

            let status = status_.toLowerCase()==="yes";

            updateStock(id,status);

        }else if(choice==="5"){
            let id = Number(prompt("Enter Id of product to remove: "));
            removeProduct(id);
        }else if(choice==="6"){
            break;
        }
        else{
            console.log("Invalid Choice");
        }
    }
}

menu();




