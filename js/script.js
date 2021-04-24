function pizzaOrder() {


    function pizza(size, crust, topping) {
        this.size = size;
        this.crust = crust;
        this.topping = topping;
    };




    var newSize = document.getElementById("size").value;
    var newCrust = document.getElementById("crust").value;
    var newTopping = document.getElementById("topping").value;
    var newDeliver = document.getElementById("deliver").checked;
    var newPickUp = document.getElementById("pickUp").checked;















































    if (newDeliver === true) {
        var location = prompt("Where would you like it delivered : ");
    } else if (newPickUp === true) {
        alert("Your order will be ready in 20 minutes.");
    } else {
        alert("Would you like it  delivered or you will pick it up");

    }


    var result = new pizza(newSize, newCrust, newTopping);

    alert("Your order will be delivered to " + location);
}

var order = [];







// code to print orders but prints out final value of num  total times 

// function checkout() {
//     var total = document.getElementById("number").value;

//     for (var num = 0; num < total; num += 1) {

//         $(document).ready(function() {
//             $("ol").append("<li>" + num + "</li>");
//         });
//     }
// }