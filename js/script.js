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

