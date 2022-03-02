import { restaurants, Restaurant } from "./restaurants";
import { orders, Order, PriceBracket } from "./orders";

/// Add your getMaxPrice() function below:
function getMaxPrice(filter: PriceBracket){
  switch (filter) {
    case PriceBracket.Low:
      return 10.0;
    case PriceBracket.Medium:
      return 20.0;
    case PriceBracket.High:
      return 30.0;
    default:
      return 0.0;
  }
}
/// Add your getOrders() function below:
function getOrders(price: PriceBracket, orders: Order[][]){
  // console.log(orders);
  let filteredOrders: Order[][] = [];
  orders.forEach((ordersFromRestaurant) => {
    filteredOrders.push(
      ordersFromRestaurant.filter((order) => order.price <= getMaxPrice(price)));
  });
  return filteredOrders;
}
console.log(getOrders(PriceBracket.Low, orders));
// getOrders(PriceBracket.Low, orders);
/// Add your printOrders() function below:

/// Main
// const elligibleOrders = getOrders(PriceBracket.Low, orders);
// printOrders(restaurants, elligibleOrders);
