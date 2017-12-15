
 /* jQuery Pre loader
  -----------------------------------------------*/
$(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    
});


/* Mobile Navigation
    -----------------------------------------------*/
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});


/* HTML document is loaded. DOM is ready. 
-------------------------------------------*/
$(document).ready(function() {

  /* Hide mobile menu after clicking on a link
    -----------------------------------------------*/
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });


 /* Parallax section
    -----------------------------------------------*/
  function initParallax() {
    $('#intro').parallax("100%", 0.1);
    $('#overview').parallax("100%", 0.3);
    $('#detail').parallax("100%", 0.2);
    $('#video').parallax("100%", 0.3);
    $('#speakers').parallax("100%", 0.1);
    $('#program').parallax("100%", 0.2);
    $('#register').parallax("100%", 0.1);
    $('#faq').parallax("100%", 0.3);
    $('#venue').parallax("100%", 0.1);
    $('#sponsors').parallax("100%", 0.3);
    $('#contact').parallax("100%", 0.2);

  }
  initParallax();


  /* Owl Carousel
  -----------------------------------------------*/
  $(document).ready(function() {
    $("#owl-speakers").owlCarousel({
      autoPlay: 6000,
      items : 4,
      itemsDesktop : [1199,2],
      itemsDesktopSmall : [979,1],
      itemsTablet: [768,1],
      itemsTabletSmall: [985,2],
      itemsMobile : [479,1],
    });
  });


  /* Back top
  -----------------------------------------------*/
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
        $('.go-top').fadeIn(200);
        } else {
          $('.go-top').fadeOut(200);
        }
        });   
        // Animate the scroll to top
      $('.go-top').click(function(event) {
        event.preventDefault();
      $('html, body').animate({scrollTop: 0}, 300);
      })


  /* wow
  -------------------------------*/
  new WOW({ mobile: false }).init();

  });

function listCart() {
  var cartCopy = [];
  for (var i in cart) {
    var item = cart[i];
    var itemCopy = [];
    for (var p in item) {
      itemCopy[p] = item[p];
    }
    cartCopy.push(itemCopy);
  }
  return cartCopy;
}

function displayCart() {
  var cartArray = listCart();
  var output = "<tr><th>Name</th><th>Value</th><th>Price</th><th>Quantity</th></tr>";                      
  for (var i in cartArray) {
    output += "<tr><th>"+cartArray[i].name+"</th><th>"+cartArray[i].value+"</th><th>"+cartArray[i].price+"</th><th>"+cartArray[i].count+"</th></tr>";
  }
  $("#show-cart").html(output);
}

$(".add-to-cart1").click(function(event){
  event.preventDefault();
  var name = "Non Judicial Stamp Paper";
  console.log(name);
  var value = $('option:selected', '#value1').attr('value');
  var price = Number($('option:selected', '#value1').attr('price'));
  addItemToCart(name,value,price,1);
  displayCart();
  console.log(cart);
});

$(".add-to-cart2").click(function(event){
  event.preventDefault();
  var name = "Non Judicial E-Stamp Paper";
  console.log(name);
  var value = $('option:selected', '#value2').attr('value');
  var price = Number($('option:selected', '#value2').attr('price'));
  addItemToCart(name,value,price,1);
  displayCart();
  console.log(cart);
});

function buy1() {
  document.getElementById('after1').style.display = "block";
  document.getElementById('before1').style.display = "none";
}

function buy2() {
  document.getElementById('after2').style.display = "block";
  document.getElementById('before2').style.display = "none";
}

//Shopping Cart

var cart = [];

var Item = function(name, value, price, count) {
  this.name = name;
  this.value = value;
  this.price = price;
  this.count = count;
}

function addItemToCart(name, value, price, count) {
  for (var i in cart) {
    if (cart[i].value == value && cart[i].name == name) {
      cart[i].count+= count;
      return;
    } 
  }
  var item = new Item(name, value, price, count);
  cart.push(item);
}

function removeItemFromCart(name, value) {
  for (var i in cart) {
    if (cart[i].value == value && cart[i].name == name) {
      cart[i].count--;
      if (cart[i].count === 0) {
        cart.splice(i, 1); 
      }
      break;
    }
  }
}

function cart() {
  document.getElementById('shopping_cart').style.display = "block";
}

$("#cart").click(function() {
  $('#shopping_cart').show();
  $('html, body').animate({
    scrollTop: $("#shopping_cart").offset().top}, 2000);
});

// var cart_count = 0;
// var value = [];
// function addtocart() {
 
//   var temp = document.getElementById('value1').value;
//   console.log(temp);
//   value[cart_count++] = temp;
//   store();
// }

// function store() {
//   for(i=0;i<cart_count;i++){
//     localStorage.setItem('myItem_'+i , value[i]);
//   }
//   console.log(value);
//   console.log(localStorage.getItem('myItem_'+3));
// }

// function display_cart() {
//   for(i=0;i<cart_count;i++){
//      document.getElementById('value_'+i).innerHTML = localStorage.getItem('myItem_'+i);
//   }
// }