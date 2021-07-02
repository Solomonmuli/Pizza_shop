const closeBtn = document.querySelectorAll('.fa-times-circle');
const cartList = document.querySelector(".pop-op");
const menuList = document.querySelectorAll(".odr");
const price = document.querySelector('#price');
const totalPayment = document.querySelector(".pymnt");
const quantity = document.querySelector(".quantity");

//Work order button on the menuList
menuList.forEach(item => {

  item.addEventListener('click', (e) => {
    let target = e.target;

    let order = target.classList.contains("order");
    if (order) {
      cartList.classList.add("flx");
    }

  });
})

 //Place order button function
 document.querySelectorAll(".order").forEach(item => {
  item.addEventListener('click', (e) => {
    let target = e.target;
    let shop = target.parentElement.parentElement;
    document.querySelector('.pop-fig h3').innerHTML = shop.querySelector('h3').innerHTML;
    document.querySelector('.pop-fig img').src = shop.querySelector(".d-block").src;
    
  })
})
//close buttons options
closeBtn.forEach(item => {

  item.addEventListener('click', e => {
    let target = e.target
    let parent = target.parentElement.parentElement;
    if (parent.classList.contains("pop-op"))
      cartList.classList.remove('flx');
    else(parent.classList.contains("pop-ot"))
    document.querySelector(".pop-ot").classList.remove("flx");
  })
})
//pizza topping price function
let topPrice = () => {
  let toppingPrice = 0;
  if (document.querySelector("#flexRadioDefault1").checked) {
    toppingPrice = 150;
  } else if (document.querySelector('#flexRadioDefault2').checked) {
    toppingPrice = 250;
  } else if (document.querySelector('#flexRadioDefault3').checked) {
    toppingPrice = 350;
  }
  return toppingPrice;
}
//prices of pizza according to sizes function
let sizePrice = () => {
  let sizePr = 0;
  if (document.querySelector("#size1").checked) {
    sizePr = 400;
  } else if (document.querySelector("#size2").checked) {
    sizePr = 700;
  } else if (document.querySelector("#size3").checked) {
    sizePr = 1000;
  }
  return sizePr;
}

//payment data
class Menu {
  constructor(sizePrice, toppingPrice, quantity, delivery) {
    this.sizePrice = sizePrice;
    this.toppingPrice = toppingPrice;
    this.quantity = quantity;
    this.delivery = delivery;
  }
  get totalPrice() {
    return ((this.sizePrice + this.toppingPrice) * this.quantity) + this.delivery;
  }
}

// add to cart 
document.querySelector(".addCat").addEventListener('click', e => {
  document.querySelector(".pop-ot").classList.add("flx");
  let quantity = parseInt(document.querySelector(".quantity").value);

  let toppingPrice = topPrice();
  let size = sizePrice();
  let delivery = 200;
  let calcPay = new Menu(size, toppingPrice, quantity, delivery);
  totalPayment.innerText = calcPay.totalPrice;
  cartList.classList.remove('flx');

})
///pay button
document.querySelector(".pay").addEventListener('click', () => {
  let name = document.querySelector("#name").value;
  let location = document.querySelector('#location').value;
  let price = totalPayment.innerText;
  alert(`Hi ${name} your order will be delivered to ${location} in the next 45 minutes`)
  document.querySelector(".pop-ot").classList.remove("flx");

})
