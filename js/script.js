function pizza(size, crust, topping) {
    this.size = size;
    this.crust = crust;
    this.topping = topping;
};

function pizzaOrder() {

    event.preventDefault();
    //Variable declaration
    var newSize = document.getElementById("size").value;
    var newCrust = document.getElementById("crust").value;
    var newTopping = document.getElementById("topping").value;
    var newDeliver = document.getElementById("deliver").checked;
    var newPickUp = document.getElementById("pickUp").checked;
    var total = document.getElementById("number").value;
    var delivery;

    var price = 0;
    var present;

    if (document.getElementById("size").value === "1") {
        alert("Please select the size of the pizza:");


    } else if (document.getElementById("crust").value === "2") {
        alert("Please select the crust of the pizza:");


    } else if (document.getElementById("topping").value === "3") {
        alert("Please select the topping of the pizza:");


    } else if (total === '') {
        alert("Please Input how many pizzas you want :");
    } else if (newDeliver === false && newPickUp === false) {
        alert("Will you pick it up yourself or have it delivered ? ")
    } else {

        var newMark = new pizza(newSize, newCrust, newTopping);



        $(document).ready(function() {
            $("ol").append("<li>" + total + " " + newMark.size + " sized pizza with " + newMark.crust + " crust and  " + newMark.topping + " toppings " + "</li>");
        });

        alert("Your order has been recorder. \nYou can make more orders or click \"CHECKOUT\" to view orders made. ");


    }
    if (newDeliver === true) {
        delivery = prompt("Where do you want your pizzas delivered to ? ");
    }

    if (newMark.size === "SMALL") {

        price += 400;
        if (newMark.topping === "Pepperoni") {

            price += 100;
            present = price * total;

        } else if (newMark.topping === "Mushrooms") {

            price += 50;
            present = price * total;

        } else if (newMark.topping === "Sausage") {

            price += 100;
            present = price * total;

        } else if (newMark.topping === "Bacon") {

            price += 100;
            present = price * total;

        } else if (newMark.topping === "Extra cheese") {

            price += 80;
            present = price * total;

        } else if (newMark.topping === "Black olives") {

            price += 70;
            present = price * total;

        } else if (newMark.topping === "Green peppers") {

            price += 50;
            present = price * total;
        }

    } else if (newMark.size === "MEDIUM") {

        price += 600;
        if (newMark.topping === "Pepperoni") {

            price += 150;
            present = price * total;

        } else if (newMark.topping === "Mushrooms") {

            price += 100;
            present = price * total;

        } else if (newMark.topping === "Sausage") {

            price += 150;
            present = price * total;

        } else if (newMark.topping === "Bacon") {

            price += 150;
            present = price * total;

        } else if (newMark.topping === "Extra cheese") {

            price += 130;
            present = price * total;

        } else if (newMark.topping === "Black olives") {

            price += 120;
            present = price * total;

        } else if (newMark.topping === "Green peppers") {

            price += 100;
            present = price * total;
        }

    } else {

        price += 800;
        if (newMark.topping === "Pepperoni") {

            price += 200;
            present = price * total;

        } else if (newMark.topping === "Mushrooms") {

            price += 150;
            present = price * total;

        } else if (newMark.topping === "Sausage") {

            price += 200;
            present = price * total;

        } else if (newMark.topping === "Bacon") {

            price += 200;
            present = price * total;

        } else if (newMark.topping === "Extra cheese") {

            price += 180;
            present = price * total;

        } else if (newMark.topping === "Black olives") {

            price += 70;
            present = price * total;

        } else if (newMark.topping === "Green peppers") {

            price += 150;
            present = price * total;
        }

    }
    document.getElementById("demo").innerHTML = "TOTAL PRICE = " + present + " Ksh";


    document.getElementById("size").value = "1";
    document.getElementById("crust").value = "2";
    document.getElementById("topping").value = "3";
    document.getElementById("number").value = '';
    document.getElementById("pickUp").checked = false;
    document.getElementById("deliver").checked = false;
    event.preventDefault()
}

$(document).ready(function() {
    $("#toggle").click(function() {
        $("ol").slideUp(500).slideDown(500);
        $("#demo").slideUp(500).slideDown(500);
    });
});