function pizzaOrder() {


    function pizza(size, crust, topping) {
        this.size = size;
        this.crust = crust;
        this.topping = topping;
    };
    event.preventDefault();
    //event.preventDefault();


    var newSize = document.getElementById("size").value;
    var newCrust = document.getElementById("crust").value;
    var newTopping = document.getElementById("topping").value;
    var newDeliver = document.getElementById("deliver").checked;
    var newPickUp = document.getElementById("pickUp").checked;
    var total = document.getElementById("number").value;
    var newMark;

    if (total === '') {
        alert("Please Input how many pizzas you want :");
    } else {
        for (var i = 0; i < total; i++) {
            newMark = new pizza(newSize, newCrust, newTopping)
                //order.push(newMark);

            $(document).ready(function() {
                $("ol").append("<li>" + newMark.size + " " + newMark.crust + " " + newMark.topping + " " + "</li>");
                //$("#size").empty();
                //$("#crust").empty();
                //$("#topping").empty();
            });
            document.getElementById("size") = null;
        }

    }
}

// function checkout() {
//     for (var add = 0; add < order.length; add++) {
//         $(document).ready(function() {
//             $("ol").append("<li>" + order[add] + "</li>");
//         });
//     };

// }
// for (var add = 0; add < order.length; add++) {

//     //         $(document).ready(function() {
//     //             $("ol").append("<li>" + num + "</li>");
//     //         });
//     //     }