"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restaurants_1 = require("./restaurants");
const orders_1 = require("./orders");
/// Add your getMaxPrice() function below:
function getMaxPrice(filter) {
    switch (filter) {
        case orders_1.PriceBracket.Low:
            return 10.0;
        case orders_1.PriceBracket.Medium:
            return 20.0;
        case orders_1.PriceBracket.High:
            return 30.0;
        default:
            return 0.0;
    }
}
/// Add your getOrders() function below:
function getOrders(price, orders) {
    let filteredOrders = [];
    orders.forEach((restaurant) => {
        filteredOrders.push(restaurant.filter((order) => order.price <= getMaxPrice(price)));
    });
    return filteredOrders;
}
/// Add your printOrders() function below:
function printOrders(restaurants, orders) {
    orders.forEach((order, index) => {
        if (order.length > 0) {
            console.log(`${restaurants[index].name}`);
            order.forEach((item, index) => {
                console.log(`- #${index + 1} ${item.name}: ${item.price}`);
            });
        }
        ;
    });
}
/// Main
const elligibleOrders = getOrders(orders_1.PriceBracket.Low, orders_1.orders);
printOrders(restaurants_1.restaurants, elligibleOrders);
