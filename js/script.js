function order() {


    function pizza(size, crust, topping) {
        this.size = size;
        this.crust = crust;
        this.topping = topping;
    };


    var Size = document.getElementById("size").value;
    var Crust = document.getElementById("crust").value;
    var Topping = document.getElementById("topping").value;
    var deliver = document.getElementById("deliver").checked;
    var pickUp = document.getElementById("pickUp").checked;

    if (deliver === true) {
        var location = prompt("Where would you like it delivered : ");
    }

    var result = new pizza(Size, Crust, Topping);

    console.log(location);
}