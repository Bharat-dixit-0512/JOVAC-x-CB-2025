let saving_Amount = parseInt(prompt("Enter your current Balance:"));
console.log(`My Saving Amount :Rs.${saving_Amount}`);

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

function createOrder(items, callback) {
    console.log("Order Created:");
    const selectItems = items.filter(item => item.price === 55000 || item.price === 10000 || item.price === 35000)
    console.log("Order Details:", selectItems)
    callback(selectItems);
}

function payment(selectItems, callback) {
    const totalPrice = selectItems.reduce((sum, item) => sum + item.price, 0);
    console.log("Total Amount:", totalPrice)

    if (totalPrice <= saving_Amount) {
        console.log(`Payement of Rs.${totalPrice} successful`);
        saving_Amount = saving_Amount - totalPrice;
        callback();
    } else {
        console.log("Payment Failed");
    }
}


function orderSummary(callback) {
    console.log("Order summary:")
    console.log("--Payment Succesful--")
    const selectItems = items.filter(item => item.price === 55000 || item.price === 10000 || item.price === 35000)
    console.log("Order Details:", selectItems)

    callback();
}

function updateWallet(callback) {
    console.log(`Saving Amount. New balance: Rs.${saving_Amount}`);
}

createOrder(items, function (selectItems) {
    payment(selectItems, function () {
        orderSummary(function () {
            updateWallet();
        })
    })
})
