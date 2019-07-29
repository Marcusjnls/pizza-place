var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3500);
};

$(document).ready(function(){
  $(".yes").hide();
  $(".no").hide();
  $("#deliveryText").hide();
  $("#firstOrder").hide();
  $("#secondOrder").hide();
  $("#orderTotal").hide();
  $("#deliveryAddress").hide();
  $(".confirmDelivery").hide();
  $("#grandTotal").hide();

  $(".placeOrder").click(function(event) {
    event.preventDefault();
   var toppings = $("input[type='checkbox']").val();
   var size= $(".size option:selected").val();
   var crust= $(".crust option:selected").val();
   var total= parseInt(toppings) + parseInt(size) + parseInt(crust);
   let orderTotal= total;
   $("#firstOrder").show();
   $('#firstOrder span').html(orderTotal);

   function Pizza(size, toppings, crust, total) {
     this.size = size;
     this.toppings = toppings;
     this.crust = crust;
     this.total = total;
   }

   $(".anotherOrder").click(function(event) {
     event.preventDefault();
     var newPizza = new Pizza(size, toppings, crust, otherTotal);
     var size = $(".size option:selected").val();
     var toppings = $("input[type='checkbox']").val();
     var crust = $(".crust option:selected").val();
     var otherTotal= parseInt(toppings) + parseInt(size) + parseInt(crust);
     $("#firstOrder").show();
     $("#secondOrder").show();
     $("#orderTotal").show();
     $('#secondOrder span').html(otherTotal);
     var orderTotal=(total+otherTotal);
     $('#orderTotal span').html(orderTotal);
      });

    $(".btn.checkOut").click(function(event) {
       event.preventDefault();
       $("#deliveryText").show();
       $(".yes").show();
       $(".no").show();

     });
     $(".yes").click(function(event) {
        event.preventDefault();
        $("#deliveryAddress").show();
        $(".confirmDelivery").show();
      });

      $(".confirmDelivery").click(function(event) {
         event.preventDefault();
         let grandTotal= 100 + orderTotal;
         $("#grandTotal").show();
         $('#grandTotal span').html(grandTotal);
       });
       $(".no").click(function(event) {
          event.preventDefault();
          $("#grandTotal").show();
          $('#grandTotal span').html(orderTotal);
        });
  });
});
