//using PROMISES

let saving_Amount = parseInt(prompt("Your current Balance:"));
console.log(`Wallet Balence:Rs.${saving_Amount}`)

const items = [
    { name: "Sofa Set", price: 55000 },
    { name: "Dining Table", price: 45000 },
    { name: "Wardrobe", price: 30000 },
    { name: "Coffee Table", price: 10000 },
    { name: "Bookshelf", price: 8000 },
    { name: "TV Unit", price: 15000 },
    { name: "Bed Frame", price: 35000 },
    { name: "Recliner Chair", price: 20000 },
    { name: "Study Desk", price: 12000 },
    { name: "Shoe Rack", price: 5000 }
];




console.log(items);

function createOrder(items) {
    return new Promise((resolve, reject) => {
        console.log("Order Created :");

        const selectItems = items.filter(item => item.price === 45000 || item.price === 10000 || item.price === 35000)
        console.log("Order Details:", selectItems)

        if (selectItems.length > 0) {
            resolve(selectItems);
        } else {
            reject("No item selected");
        }

    });
}

function payment(selectItems) {
    return new Promise((resolve, reject) => {
        const totalPrice = selectItems.reduce((sum, item) => sum + item.price, 0);
        console.log("Total Amount:", totalPrice)

        if (totalPrice <= saving_Amount) {
            console.log(`Payment of Rs.${totalPrice} successful`);
            saving_Amount = saving_Amount - totalPrice;
            resolve();
        } else {
            reject("Payment Failed");
        }
    })
}


function orderSummary() {
    return new Promise((resolve) => {
        console.log("Order Summary:")
        console.log("--Payment Succesful--")
        const selectItems = items.filter(item => item.price === 55000 || item.price === 10000 || item.price === 35000)
        console.log("Order Details:", selectItems)
        resolve();
    })
}

function updateWallet() {
    return new Promise((resolve) => {
        console.log(`Savings Updated. New balance: Rs.${saving_Amount}`);
        resolve();
    })
}

//Execution
createOrder(items)
    .then(payment)
    .then(orderSummary)
    .then(updateWallet)
    .catch((error) => {
        console.log("Error:", error)
    })
