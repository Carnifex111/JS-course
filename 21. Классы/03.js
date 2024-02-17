class Customer {
  constructor(name) {
    this.name = name;
    this.orders = [];
  }

  addOrder(order) {
    this.orders.push(order);
  }

  displayOrders() {
    console.log(`Заказы клиента ${this.name}`);
    this.orders.forEach((item, index) => {
      console.log(`Заказ ${index + 1}`);
      item.displayOrder();
    });
  }
}

class Order {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  getTotal() {
    let total = 0;
    this.items.forEach((item) => {
      total += item.price;
    });
    return total;
  }

  displayOrder() {
    console.log("Заказ:");
    this.items.forEach((item, index) => {
      console.log(`${index + 1}. ${item.name} ${item.price} руб.`);
    });
    console.log(`Итого: ${this.getTotal()} руб`);
  }
}

class MenuItem {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

const ivanov = new Customer("Иванов");

const order1 = new Order();
const order2 = new Order();

const coffee = new MenuItem("Американо", 100);
const cake = new MenuItem("Чизкейк", 200);
const tea = new MenuItem("Чай", 300);

const cheburek = new MenuItem("Чебурек", 50);
const candy = new MenuItem("Конфета", 100);
const cocacola = new MenuItem("Кока-кола", 200);

order1.addItem(coffee);
order1.addItem(cake);
order1.addItem(tea);

order2.addItem(cheburek);
order2.addItem(candy);
order2.addItem(cocacola);

ivanov.addOrder(order1);
ivanov.addOrder(order2);

ivanov.displayOrders();
