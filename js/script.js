function pizza(size, crust, topping) {
    this.size = size;
    this.crust = crust;
    this.topping = topping;
};

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
    var total = document.getElementById("number").value;
    //else if (document.getElementById("size").value = 1) {
    //     alert("Order cannot be completed. PLease double check the form. ");

    if (document.getElementById("size").value === "1") {
        alert("Please select the size of the pizza:");


    } else if (document.getElementById("crust").value === "2") {
        alert("Please select the crust of the pizza:");


    } else if (document.getElementById("topping").value === "3") {
        alert("Please select the topping of the pizza:");


    } else if (total === '') {
        alert("Please Input how many pizzas you want :");
    } else {

        newMark = new pizza(newSize, newCrust, newTopping);

        //document.getElementById("demo").innerHTML = document.getElementById("crust").value;

        $(document).ready(function() {
            $("ul").append("<li>" + total + " " + newMark.size + " sized pizza with " + newMark.crust + " crust and  " + newMark.topping + " toppings " + "</li>");
        });

        alert("Order placed successfully. \nClick CHECKOUT to view your orders ");


    }

    document.getElementById("size").value = "1";
    document.getElementById("crust").value = "2";
    document.getElementById("topping").value = "3";
    document.getElementById("number").value = ''
}

pizza.prototype.price = function() {

}