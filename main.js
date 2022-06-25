document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});



//----------------------------------------


//Tenta vincular cada href com uma imagem


var n = 1

function Next() {

  
  n = n+1
  if (n <= 4) {
  document.querySelector('#img1').src = `images/image-product-${n}.jpg`
  }
  else {
    document.querySelector('#img1').src = 'images/image-product-1.jpg'
    n = 1
  }
  
}

function Prev() {
  n = n-1
  if (n>=1) {
    document.querySelector('#img1').src = `images/image-product-${n}.jpg`
  }
  else {
    document.querySelector('#img1').src =
    `images/image-product-4.jpg`
    n = 4
  }
}





var quant = 1

function Mais() {
  quant++
  
  document.querySelector('#quantidade').innerHTML = `${quant}`
}

function Menos() {
  if(quant > 0) {
    quant--
    
    document.querySelector('#quantidade').innerHTML = `${quant}`
  }
}



function adicionar() {
  
  if (quant >= 1) {
    document.querySelector('#quant-item').innerHTML = `${quant}`
    
    document.querySelector('#total').innerHTML = `$${125*quant}.00`
  }
  else{
    var vazio = document.querySelector('#linha').innerHTML = 'Your cart is empty'
  }
}

function Checkout () {
  document.querySelector('#linha').innerHTML = 'Purchased!  :)'
}




var secao = document.querySelector('.cart-container')

secao.addEventListener('mouseout', sair)


estado = 1

function Cart() {
  estado++
  
  if(estado % 2 == 0) {
    secao.style.display = "block"
  }
  else{
    secao.style.display = "none"
  }
}

function sair() {
}



