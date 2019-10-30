/**
 * =====================================================================================================
 * ### ESTE SCRIPT REALIZA LA PARTE DE CALCULO POR CADA PRODUCTO, PERO EL TOTAL ESTA ECHO EN NODE.JS ###
 * =====================================================================================================
 */

/**
 * Producto 1
 */
var txtCantidad_1 = document.getElementById('txtCantidad_1');
var btnCalcular_1 = document.getElementById('btnCalcular_1');
var total_1 = document.getElementById('total_1');
var descuento_html_1 = document.getElementById('descuento_1');
var normal_html_1 = document.getElementById('normal_1');

btnCalcular_1.addEventListener("click", darCalcularPrecio_1);
btnCalcular_1.addEventListener("click", calculoIndividual);

/**
 * Producto 1: Calcula precio según la cantidad de productos.
 * - Si la cantidad es igual o mayor a 10, se realiza un descuento del 10%.
 */
function darCalcularPrecio_1() {
    var vacia = txtCantidad_1.value;
    var cantidad = parseInt(txtCantidad_1.value);
    var total_compra_normal = cantidad * 20000;
    var fin = 0;

    if (vacia == "") {
        normal_html_1.innerHTML = "";
        descuento_html_1.innerHTML = "";
        total_1.innerHTML = "Ninguna cantidad seleccionada.";

        fin = 0;
        return fin;
    }
    else if (cantidad == 0) {
        normal_html_1.innerHTML = "";
        descuento_html_1.innerHTML = "";
        total_1.innerHTML = "Ninguna cantidad seleccionada.";

        fin = 0;
        return fin;
    }
    else if (cantidad >= 10) {
        var normal = cantidad * 20000;
        var descuento = total_compra_normal * 0.1;
        var total_con_descuento = total_compra_normal - descuento;

        normal_html_1.innerHTML = "Total normal: $" + formatNumber.new(normal);
        descuento_html_1.innerHTML = "Descuento 10%: $" + formatNumber.new(descuento);
        total_1.innerHTML = "Valor total por " + cantidad + " camisetas: $" + formatNumber.new(total_con_descuento);

        fin = total_con_descuento;
        return fin;
    }
    else {
        if (cantidad > 1) {
            descuento = 0;
            normal_html_1.innerHTML = "Total normal: $" + formatNumber.new(total_compra_normal);
            descuento_html_1.innerHTML = "Descuento 10%: $" + formatNumber.new(descuento);
            total_1.innerHTML = "Valor por " + cantidad + " camisetas: $" + formatNumber.new(total_compra_normal);

            fin = total_compra_normal;
            return fin;
        }
        else {
            descuento = 0;
            normal_html_1.innerHTML = "Total normal: $" + formatNumber.new(total_compra_normal);
            descuento_html_1.innerHTML = "Descuento 10%: $" + formatNumber.new(descuento);
            total_1.innerHTML = "Valor por " + cantidad + " camiseta: $" + formatNumber.new(total_compra_normal);

            fin = total_compra_normal;
            return fin;
        }
    }

}


/**
 * Producto 2
 */
var txtCantidad_2 = document.getElementById('txtCantidad_2');
var btnCalcular_2 = document.getElementById('btnCalcular_2');
var total_2 = document.getElementById('total_2');
var descuento_html_2 = document.getElementById('descuento_2');
var normal_html_2 = document.getElementById('normal_2');

btnCalcular_2.addEventListener("click", darCalcularPrecio_2);
btnCalcular_2.addEventListener("click", calculoIndividual);

/**
 * Producto 2: Calcula precio según la cantidad de productos.
 * - Si la cantidad es igual o mayor a 10, se realiza un descuento del 10%.
 */
function darCalcularPrecio_2() {
    var vacia = txtCantidad_2.value;
    var cantidad = parseInt(txtCantidad_2.value);
    var total_compra_normal = cantidad * 40000;
    var fin = 0;

    if (vacia == "") {
        normal_html_2.innerHTML = "";
        descuento_html_2.innerHTML = "";
        total_2.innerHTML = "Ninguna cantidad seleccionada.";

        fin = 0;
        return fin;
    }
    else if (cantidad == 0) {
        normal_html_2.innerHTML = "";
        descuento_html_2.innerHTML = "";
        total_2.innerHTML = "Ninguna cantidad seleccionada.";

        fin = 0;
        return fin;
    }
    else if (cantidad >= 10) {
        var normal = cantidad * 40000;
        var descuento = total_compra_normal * 0.1;
        var total_con_descuento = total_compra_normal - descuento;

        normal_html_2.innerHTML = "Total normal: $" + formatNumber.new(normal);
        descuento_html_2.innerHTML = "Descuento 10%: $" + formatNumber.new(descuento);
        total_2.innerHTML = "Valor total por " + cantidad + " vestidos: $" + formatNumber.new(total_con_descuento);
        
        fin = total_con_descuento;
        return fin;
    }
    else {
        if (cantidad > 1) {
            descuento = 0;
            normal_html_2.innerHTML = "Total normal: $" + formatNumber.new(total_compra_normal);
            descuento_html_2.innerHTML = "Descuento 10%: $" + formatNumber.new(descuento);
            total_2.innerHTML = "Valor por " + cantidad + " vestidos: $" + formatNumber.new(total_compra_normal);

            fin = total_compra_normal;
            return fin;

        }
        else {
            descuento = 0;
            normal_html_2.innerHTML = "Total normal: $" + formatNumber.new(total_compra_normal);
            descuento_html_2.innerHTML = "Descuento 10%: $" + formatNumber.new(descuento);
            total_2.innerHTML = "Valor por " + cantidad + " vestido: $" + formatNumber.new(total_compra_normal);


            fin = total_compra_normal;
            return fin;

        }
    }

}



/**
 * Producto 3
 */
var txtCantidad_3 = document.getElementById('txtCantidad_3');
var btnCalcular_3 = document.getElementById('btnCalcular_3');
var total_3 = document.getElementById('total_3');
var descuento_html_3 = document.getElementById('descuento_3');
var normal_html_3 = document.getElementById('normal_3');

btnCalcular_3.addEventListener("click", darCalcularPrecio_3);
btnCalcular_3.addEventListener("click", calculoIndividual);

/**
 * Producto 3: Calcula precio según la cantidad de productos.
 * - Si la cantidad es igual o mayor a 10, se realiza un descuento del 10%.
 */
function darCalcularPrecio_3() {
    var vacia = txtCantidad_3.value;
    var cantidad = parseInt(txtCantidad_3.value);
    var total_compra_normal = cantidad * 40000;
    var fin = 0;

    if (vacia == "") {
        normal_html_3.innerHTML = "";
        descuento_html_3.innerHTML = "";
        total_3.innerHTML = "Ninguna cantidad seleccionada.";

        fin = 0;

        return fin;
    }
    else if (cantidad == 0) {
        normal_html_3.innerHTML = "";
        descuento_html_3.innerHTML = "";
        total_3.innerHTML = "Ninguna cantidad seleccionada.";

        fin = 0;

        return fin;
    }
    else if (cantidad >= 10) {
        var normal = cantidad * 40000;
        var descuento = total_compra_normal * 0.1;
        var total_con_descuento = total_compra_normal - descuento;

        normal_html_3.innerHTML = "Total normal: $" + formatNumber.new(normal);
        descuento_html_3.innerHTML = "Descuento 10%: $" + formatNumber.new(descuento);
        total_3.innerHTML = "Valor total por " + cantidad + " vestidos: $" + formatNumber.new(total_con_descuento);
        
        fin = total_con_descuento;

        return fin;
    }
    else {
        if (cantidad > 1) {
            descuento = 0;
            normal_html_3.innerHTML = "Total normal: $" + formatNumber.new(total_compra_normal);
            descuento_html_3.innerHTML = "Descuento 10%: $" + formatNumber.new(descuento);
            total_3.innerHTML = "Valor por " + cantidad + " vestidos: $" + formatNumber.new(total_compra_normal);

            fin = total_compra_normal;

            return fin;

        }
        else {
            descuento = 0;
            normal_html_3.innerHTML = "Total normal: $" + formatNumber.new(total_compra_normal);
            descuento_html_3.innerHTML = "Descuento 10%: $" + formatNumber.new(descuento);
            total_3.innerHTML = "Valor por " + cantidad + " vestido: $" + formatNumber.new(total_compra_normal);


            fin = total_compra_normal;

            return fin;

        }
    }

}




/**
 * Producto 4
 */
var txtCantidad_4 = document.getElementById('txtCantidad_4');
var btnCalcular_4 = document.getElementById('btnCalcular_4');
var total_4 = document.getElementById('total_4');
var descuento_html_4 = document.getElementById('descuento_4');
var normal_html_4 = document.getElementById('normal_4');

btnCalcular_4.addEventListener("click", darCalcularPrecio_4);
btnCalcular_4.addEventListener("click", calculoIndividual);

/**
 * Producto 4: Calcula precio según la cantidad de productos.
 * - Si la cantidad es igual o mayor a 10, se realiza un descuento del 10%.
 */
function darCalcularPrecio_4() {
    var vacia = txtCantidad_4.value;
    var cantidad = parseInt(txtCantidad_4.value);
    var total_compra_normal = cantidad * 25000;
    var fin = 0;

    if (vacia == "") {
        normal_html_4.innerHTML = "";
        descuento_html_4.innerHTML = "";
        total_4.innerHTML = "Ninguna cantidad seleccionada.";

        fin = 0;

        return fin;
    }
    else if (cantidad == 0) {
        normal_html_4.innerHTML = "";
        descuento_html_4.innerHTML = "";
        total_4.innerHTML = "Ninguna cantidad seleccionada.";

        fin = 0;

        return fin;
    }
    else if (cantidad >= 10) {
        var normal = cantidad * 25000;
        var descuento = total_compra_normal * 0.1;
        var total_con_descuento = total_compra_normal - descuento;

        normal_html_4.innerHTML = "Total normal: $" + formatNumber.new(normal);
        descuento_html_4.innerHTML = "Descuento 10%: $" + formatNumber.new(descuento);
        total_4.innerHTML = "Valor total por " + cantidad + " camisetas: $" + formatNumber.new(total_con_descuento);
        
        fin = total_con_descuento;

        return fin;
    }
    else {
        if (cantidad > 1) {
            descuento = 0;
            normal_html_4.innerHTML = "Total normal: $" + formatNumber.new(total_compra_normal);
            descuento_html_4.innerHTML = "Descuento 10%: $" + formatNumber.new(descuento);
            total_4.innerHTML = "Valor por " + cantidad + " camisetas: $" + formatNumber.new(total_compra_normal);

            fin = total_compra_normal;

            return fin;

        }
        else {
            descuento = 0;
            normal_html_4.innerHTML = "Total normal: $" + formatNumber.new(total_compra_normal);
            descuento_html_4.innerHTML = "Descuento 10%: $" + formatNumber.new(descuento);
            total_4.innerHTML = "Valor por " + cantidad + " camiseta: $" + formatNumber.new(total_compra_normal);


            fin = total_compra_normal;

            return fin;

        }
    }

}


/**
 * Producto 5
 */
var txtCantidad_5 = document.getElementById('txtCantidad_5');
var btnCalcular_5 = document.getElementById('btnCalcular_5');
var total_5 = document.getElementById('total_5');
var descuento_html_5 = document.getElementById('descuento_5');
var normal_html_5 = document.getElementById('normal_5');

btnCalcular_5.addEventListener("click", darCalcularPrecio_5);
btnCalcular_5.addEventListener("click", calculoIndividual);

/**
 * Producto 5: Calcula precio según la cantidad de productos.
 * - Si la cantidad es igual o mayor a 10, se realiza un descuento del 10%.
 */
function darCalcularPrecio_5() {
    var vacia = txtCantidad_5.value;
    var cantidad = parseInt(txtCantidad_5.value);
    var total_compra_normal = cantidad * 30000;
    var fin = 0;

    if (vacia == "") {
        normal_html_5.innerHTML = "";
        descuento_html_5.innerHTML = "";
        total_5.innerHTML = "Ninguna cantidad seleccionada.";

        fin = 0;

        return fin;
    }
    else if (cantidad == 0) {
        normal_html_5.innerHTML = "";
        descuento_html_5.innerHTML = "";
        total_5.innerHTML = "Ninguna cantidad seleccionada.";

        fin = 0;

        return fin;
    }
    else if (cantidad >= 10) {
        var normal = cantidad * 30000;
        var descuento = total_compra_normal * 0.1;
        var total_con_descuento = total_compra_normal - descuento;

        normal_html_5.innerHTML = "Total normal: $" + formatNumber.new(normal);
        descuento_html_5.innerHTML = "Descuento 10%: $" + formatNumber.new(descuento);
        total_5.innerHTML = "Valor total por " + cantidad + " mamelucos: $" + formatNumber.new(total_con_descuento);
        
        fin = total_con_descuento;

        return fin;
    }
    else {
        if (cantidad > 1) {
            descuento = 0;
            normal_html_5.innerHTML = "Total normal: $" + formatNumber.new(total_compra_normal);
            descuento_html_5.innerHTML = "Descuento 10%: $" + formatNumber.new(descuento);
            total_5.innerHTML = "Valor por " + cantidad + " mamelucos: $" + formatNumber.new(total_compra_normal);

            fin = total_compra_normal;

            return fin;

        }
        else {
            descuento = 0;
            normal_html_5.innerHTML = "Total normal: $" + formatNumber.new(total_compra_normal);
            descuento_html_5.innerHTML = "Descuento 10%: $" + formatNumber.new(descuento);
            total_5.innerHTML = "Valor por " + cantidad + " mameluco: $" + formatNumber.new(total_compra_normal);


            fin = total_compra_normal;

            return fin;

        }
    }

}



/**
 * Producto 6
 */
var txtCantidad_6 = document.getElementById('txtCantidad_6');
var btnCalcular_6 = document.getElementById('btnCalcular_6');
var total_6 = document.getElementById('total_6');
var descuento_html_6 = document.getElementById('descuento_6');
var normal_html_6 = document.getElementById('normal_6');

btnCalcular_6.addEventListener("click", darCalcularPrecio_6);
btnCalcular_6.addEventListener("click", calculoIndividual);

/**
 * Producto 6: Calcula precio según la cantidad de productos.
 * - Si la cantidad es igual o mayor a 10, se realiza un descuento del 10%.
 */
function darCalcularPrecio_6() {
    var vacia = txtCantidad_6.value;
    var cantidad = parseInt(txtCantidad_6.value);
    var total_compra_normal = cantidad * 35000;
    var fin = 0;

    if (vacia == "") {
        normal_html_6.innerHTML = "";
        descuento_html_6.innerHTML = "";
        total_6.innerHTML = "Ninguna cantidad seleccionada.";

        fin = 0;

        return fin;
    }
    else if (cantidad == 0) {
        normal_html_6.innerHTML = "";
        descuento_html_6.innerHTML = "";
        total_6.innerHTML = "Ninguna cantidad seleccionada.";

        fin = 0;

        return fin;
    }
    else if (cantidad >= 10) {
        var normal = cantidad * 35000;
        var descuento = total_compra_normal * 0.1;
        var total_con_descuento = total_compra_normal - descuento;

        normal_html_6.innerHTML = "Total normal: $" + formatNumber.new(normal);
        descuento_html_6.innerHTML = "Descuento 10%: $" + formatNumber.new(descuento);
        total_6.innerHTML = "Valor total por " + cantidad + " pijamas: $" + formatNumber.new(total_con_descuento);
        
        fin = total_con_descuento;

        return fin;
    }
    else {
        if (cantidad > 1) {
            descuento = 0;
            normal_html_6.innerHTML = "Total normal: $" + formatNumber.new(total_compra_normal);
            descuento_html_6.innerHTML = "Descuento 10%: $" + formatNumber.new(descuento);
            total_6.innerHTML = "Valor por " + cantidad + " pijamas: $" + formatNumber.new(total_compra_normal);

            fin = total_compra_normal;

            return fin;

        }
        else {
            descuento = 0;
            normal_html_6.innerHTML = "Total normal: $" + formatNumber.new(total_compra_normal);
            descuento_html_6.innerHTML = "Descuento 10%: $" + formatNumber.new(descuento);
            total_6.innerHTML = "Valor por " + cantidad + " pijama: $" + formatNumber.new(total_compra_normal);


            fin = total_compra_normal;

            return fin;

        }
    }

}


/**
 * Producto 7
 */
var txtCantidad_7 = document.getElementById('txtCantidad_7');
var btnCalcular_7 = document.getElementById('btnCalcular_7');
var total_7 = document.getElementById('total_7');
var descuento_html_7 = document.getElementById('descuento_7');
var normal_html_7 = document.getElementById('normal_7');

btnCalcular_7.addEventListener("click", darCalcularPrecio_7);
btnCalcular_7.addEventListener("click", calculoIndividual);

/**
 * Producto 7: Calcula precio según la cantidad de productos.
 * - Si la cantidad es igual o mayor a 10, se realiza un descuento del 10%.
 */
function darCalcularPrecio_7() {
    var vacia = txtCantidad_7.value;
    var cantidad = parseInt(txtCantidad_7.value);
    var total_compra_normal = cantidad * 20000;
    var fin = 0;

    if (vacia == "") {
        normal_html_7.innerHTML = "";
        descuento_html_7.innerHTML = "";
        total_7.innerHTML = "Ninguna cantidad seleccionada.";

        fin = 0;

        return fin;
    }
    else if (cantidad == 0) {
        normal_html_7.innerHTML = "";
        descuento_html_7.innerHTML = "";
        total_7.innerHTML = "Ninguna cantidad seleccionada.";

        fin = 0;

        return fin;
    }
    else if (cantidad >= 10) {
        var normal = cantidad * 20000;
        var descuento = total_compra_normal * 0.1;
        var total_con_descuento = total_compra_normal - descuento;

        normal_html_7.innerHTML = "Total normal: $" + formatNumber.new(normal);
        descuento_html_7.innerHTML = "Descuento 10%: $" + formatNumber.new(descuento);
        total_7.innerHTML = "Valor total por " + cantidad + " pantalonetas: $" + formatNumber.new(total_con_descuento);
        
        fin = total_con_descuento;

        return fin;
    }
    else {
        if (cantidad > 1) {
            descuento = 0;
            normal_html_7.innerHTML = "Total normal: $" + formatNumber.new(total_compra_normal);
            descuento_html_7.innerHTML = "Descuento 10%: $" + formatNumber.new(descuento);
            total_7.innerHTML = "Valor por " + cantidad + " pantalonetas: $" + formatNumber.new(total_compra_normal);

            fin = total_compra_normal;

            return fin;

        }
        else {
            descuento = 0;
            normal_html_7.innerHTML = "Total normal: $" + formatNumber.new(total_compra_normal);
            descuento_html_7.innerHTML = "Descuento 10%: $" + formatNumber.new(descuento);
            total_7.innerHTML = "Valor por " + cantidad + " pantaloneta: $" + formatNumber.new(total_compra_normal);


            fin = total_compra_normal;

            return fin;

        }
    }

}


/**
 * Producto 8
 */
var txtCantidad_8 = document.getElementById('txtCantidad_8');
var btnCalcular_8 = document.getElementById('btnCalcular_8');
var total_8 = document.getElementById('total_8');
var descuento_html_8 = document.getElementById('descuento_8');
var normal_html_8 = document.getElementById('normal_8');

btnCalcular_8.addEventListener("click", darCalcularPrecio_8);
btnCalcular_8.addEventListener("click", calculoIndividual);

/**
 * Producto 8: Calcula precio según la cantidad de productos.
 * - Si la cantidad es igual o mayor a 10, se realiza un descuento del 10%.
 */
function darCalcularPrecio_8() {
    var vacia = txtCantidad_8.value;
    var cantidad = parseInt(txtCantidad_8.value);
    var total_compra_normal = cantidad * 40000;
    var fin = 0;

    if (vacia == "") {
        normal_html_8.innerHTML = "";
        descuento_html_8.innerHTML = "";
        total_8.innerHTML = "Ninguna cantidad seleccionada.";

        fin = 0;

        return fin;
    }
    else if (cantidad == 0) {
        normal_html_8.innerHTML = "";
        descuento_html_8.innerHTML = "";
        total_8.innerHTML = "Ninguna cantidad seleccionada.";

        fin = 0;

        return fin;
    }
    else if (cantidad >= 10) {
        var normal = cantidad * 40000;
        var descuento = total_compra_normal * 0.1;
        var total_con_descuento = total_compra_normal - descuento;

        normal_html_8.innerHTML = "Total normal: $" + formatNumber.new(normal);
        descuento_html_8.innerHTML = "Descuento 10%: $" + formatNumber.new(descuento);
        total_8.innerHTML = "Valor total por " + cantidad + " relojes: $" + formatNumber.new(total_con_descuento);
        
        fin = total_con_descuento;

        return fin;
    }
    else {
        if (cantidad > 1) {
            descuento = 0;
            normal_html_8.innerHTML = "Total normal: $" + formatNumber.new(total_compra_normal);
            descuento_html_8.innerHTML = "Descuento 10%: $" + formatNumber.new(descuento);
            total_8.innerHTML = "Valor por " + cantidad + " relojes: $" + formatNumber.new(total_compra_normal);

            fin = total_compra_normal;

            return fin;

        }
        else {
            descuento = 0;
            normal_html_8.innerHTML = "Total normal: $" + formatNumber.new(total_compra_normal);
            descuento_html_8.innerHTML = "Descuento 10%: $" + formatNumber.new(descuento);
            total_8.innerHTML = "Valor por " + cantidad + " reloj: $" + formatNumber.new(total_compra_normal);


            fin = total_compra_normal;

            return fin;

        }
    }

}


/**
 * Producto 9
 */
var txtCantidad_9 = document.getElementById('txtCantidad_9');
var btnCalcular_9 = document.getElementById('btnCalcular_9');
var total_9 = document.getElementById('total_9');
var descuento_html_9 = document.getElementById('descuento_9');
var normal_html_9 = document.getElementById('normal_9');

btnCalcular_9.addEventListener("click", darCalcularPrecio_9);
btnCalcular_9.addEventListener("click", calculoIndividual);

/**
 * Producto 9: Calcula precio según la cantidad de productos.
 * - Si la cantidad es igual o mayor a 10, se realiza un descuento del 10%.
 */
function darCalcularPrecio_9() {
    var vacia = txtCantidad_9.value;
    var cantidad = parseInt(txtCantidad_9.value);
    var total_compra_normal = cantidad * 40000;
    var fin = 0;

    if (vacia == "") {
        normal_html_9.innerHTML = "";
        descuento_html_9.innerHTML = "";
        total_9.innerHTML = "Ninguna cantidad seleccionada.";

        fin = 0;

        return fin;
    }
    else if (cantidad == 0) {
        normal_html_9.innerHTML = "";
        descuento_html_9.innerHTML = "";
        total_9.innerHTML = "Ninguna cantidad seleccionada.";

        fin = 0;

        return fin;
    }
    else if (cantidad >= 10) {
        var normal = cantidad * 40000;
        var descuento = total_compra_normal * 0.1;
        var total_con_descuento = total_compra_normal - descuento;

        normal_html_9.innerHTML = "Total normal: $" + formatNumber.new(normal);
        descuento_html_9.innerHTML = "Descuento 10%: $" + formatNumber.new(descuento);
        total_9.innerHTML = "Valor total por " + cantidad + " jeans: $" + formatNumber.new(total_con_descuento);
        
        fin = total_con_descuento;

        return fin;
    }
    else {
        if (cantidad > 1) {
            descuento = 0;
            normal_html_9.innerHTML = "Total normal: $" + formatNumber.new(total_compra_normal);
            descuento_html_9.innerHTML = "Descuento 10%: $" + formatNumber.new(descuento);
            total_9.innerHTML = "Valor por " + cantidad + " jeans: $" + formatNumber.new(total_compra_normal);

            fin = total_compra_normal;

            return fin;

        }
        else {
            descuento = 0;
            normal_html_9.innerHTML = "Total normal: $" + formatNumber.new(total_compra_normal);
            descuento_html_9.innerHTML = "Descuento 10%: $" + formatNumber.new(descuento);
            total_9.innerHTML = "Valor por " + cantidad + " jean: $" + formatNumber.new(total_compra_normal);


            fin = total_compra_normal;

            return fin;

        }
    }

}


/**
 * Producto 10
 */
var txtCantidad_10 = document.getElementById('txtCantidad_10');
var btnCalcular_10 = document.getElementById('btnCalcular_10');
var total_10 = document.getElementById('total_10');
var descuento_html_10 = document.getElementById('descuento_10');
var normal_html_10 = document.getElementById('normal_10');

btnCalcular_10.addEventListener("click", darCalcularPrecio_10);
btnCalcular_10.addEventListener("click", calculoIndividual);

/**
 * Producto 10: Calcula precio según la cantidad de productos.
 * - Si la cantidad es igual o mayor a 10, se realiza un descuento del 10%.
 */
function darCalcularPrecio_10() {
    var vacia = txtCantidad_10.value;
    var cantidad = parseInt(txtCantidad_10.value);
    var total_compra_normal = cantidad * 25000;
    var fin = 0;

    if (vacia == "") {
        normal_html_10.innerHTML = "";
        descuento_html_10.innerHTML = "";
        total_10.innerHTML = "Ninguna cantidad seleccionada.";

        fin = 0;

        return fin;
    }
    else if (cantidad == 0) {
        normal_html_10.innerHTML = "";
        descuento_html_10.innerHTML = "";
        total_10.innerHTML = "Ninguna cantidad seleccionada.";

        fin = 0;

        return fin;
    }
    else if (cantidad >= 10) {
        var normal = cantidad * 25000;
        var descuento = total_compra_normal * 0.1;
        var total_con_descuento = total_compra_normal - descuento;

        normal_html_10.innerHTML = "Total normal: $" + formatNumber.new(normal);
        descuento_html_10.innerHTML = "Descuento 10%: $" + formatNumber.new(descuento);
        total_10.innerHTML = "Valor total por " + cantidad + " blazers: $" + formatNumber.new(total_con_descuento);
        
        fin = total_con_descuento;

        return fin;
    }
    else {
        if (cantidad > 1) {
            descuento = 0;
            normal_html_10.innerHTML = "Total normal: $" + formatNumber.new(total_compra_normal);
            descuento_html_10.innerHTML = "Descuento 10%: $" + formatNumber.new(descuento);
            total_10.innerHTML = "Valor por " + cantidad + " blazers: $" + formatNumber.new(total_compra_normal);

            fin = total_compra_normal;

            return fin;

        }
        else {
            descuento = 0;
            normal_html_10.innerHTML = "Total normal: $" + formatNumber.new(total_compra_normal);
            descuento_html_10.innerHTML = "Descuento 10%: $" + formatNumber.new(descuento);
            total_10.innerHTML = "Valor por " + cantidad + " blazer: $" + formatNumber.new(total_compra_normal);


            fin = total_compra_normal;

            return fin;

        }
    }

}



/**
 * Producto 11
 */
var txtCantidad_11 = document.getElementById('txtCantidad_11');
var btnCalcular_11 = document.getElementById('btnCalcular_11');
var total_11 = document.getElementById('total_11');
var descuento_html_11 = document.getElementById('descuento_11');
var normal_html_11 = document.getElementById('normal_11');

btnCalcular_11.addEventListener("click", darCalcularPrecio_11);
btnCalcular_11.addEventListener("click", calculoIndividual);

/**
 * Producto 11: Calcula precio según la cantidad de productos.
 * - Si la cantidad es igual o mayor a 10, se realiza un descuento del 10%.
 */
function darCalcularPrecio_11() {
    var vacia = txtCantidad_11.value;
    var cantidad = parseInt(txtCantidad_11.value);
    var total_compra_normal = cantidad * 30000;
    var fin = 0;

    if (vacia == "") {
        normal_html_11.innerHTML = "";
        descuento_html_11.innerHTML = "";
        total_11.innerHTML = "Ninguna cantidad seleccionada.";

        fin = 0;

        return fin;
    }
    else if (cantidad == 0) {
        normal_html_11.innerHTML = "";
        descuento_html_11.innerHTML = "";
        total_11.innerHTML = "Ninguna cantidad seleccionada.";

        fin = 0;

        return fin;
    }
    else if (cantidad >= 10) {
        var normal = cantidad * 30000;
        var descuento = total_compra_normal * 0.1;
        var total_con_descuento = total_compra_normal - descuento;

        normal_html_11.innerHTML = "Total normal: $" + formatNumber.new(normal);
        descuento_html_11.innerHTML = "Descuento 10%: $" + formatNumber.new(descuento);
        total_11.innerHTML = "Valor total por " + cantidad + " gorras: $" + formatNumber.new(total_con_descuento);
        
        fin = total_con_descuento;

        return fin;
    }
    else {
        if (cantidad > 1) {
            descuento = 0;
            normal_html_11.innerHTML = "Total normal: $" + formatNumber.new(total_compra_normal);
            descuento_html_11.innerHTML = "Descuento 10%: $" + formatNumber.new(descuento);
            total_11.innerHTML = "Valor por " + cantidad + " gorras: $" + formatNumber.new(total_compra_normal);

            fin = total_compra_normal;

            return fin;

        }
        else {
            descuento = 0;
            normal_html_11.innerHTML = "Total normal: $" + formatNumber.new(total_compra_normal);
            descuento_html_11.innerHTML = "Descuento 10%: $" + formatNumber.new(descuento);
            total_11.innerHTML = "Valor por " + cantidad + " gorra: $" + formatNumber.new(total_compra_normal);


            fin = total_compra_normal;

            return fin;

        }
    }

}




/**
 * Producto 12
 */
var txtCantidad_12 = document.getElementById('txtCantidad_12');
var btnCalcular_12 = document.getElementById('btnCalcular_12');
var total_12 = document.getElementById('total_12');
var descuento_html_12 = document.getElementById('descuento_12');
var normal_html_12 = document.getElementById('normal_12');

btnCalcular_12.addEventListener("click", darCalcularPrecio_12);
btnCalcular_12.addEventListener("click", calculoIndividual);

/**
 * Producto 12: Calcula precio según la cantidad de productos.
 * - Si la cantidad es igual o mayor a 10, se realiza un descuento del 10%.
 */
function darCalcularPrecio_12() {
    var vacia = txtCantidad_12.value;
    var cantidad = parseInt(txtCantidad_12.value);
    var total_compra_normal = cantidad * 35000;
    var fin = 0;

    if (vacia == "") {
        normal_html_12.innerHTML = "";
        descuento_html_12.innerHTML = "";
        total_12.innerHTML = "Ninguna cantidad seleccionada.";

        fin = 0;

        return fin;
    }
    else if (cantidad == 0) {
        normal_html_12.innerHTML = "";
        descuento_html_12.innerHTML = "";
        total_12.innerHTML = "Ninguna cantidad seleccionada.";

        fin = 0;

        return fin;
    }
    else if (cantidad >= 10) {
        var normal = cantidad * 35000;
        var descuento = total_compra_normal * 0.1;
        var total_con_descuento = total_compra_normal - descuento;

        normal_html_12.innerHTML = "Total normal: $" + formatNumber.new(normal);
        descuento_html_12.innerHTML = "Descuento 10%: $" + formatNumber.new(descuento);
        total_12.innerHTML = "Valor total por " + cantidad + " chaquetas: $" + formatNumber.new(total_con_descuento);
        
        fin = total_con_descuento;

        return fin;
    }
    else {
        if (cantidad > 1) {
            descuento = 0;
            normal_html_12.innerHTML = "Total normal: $" + formatNumber.new(total_compra_normal);
            descuento_html_12.innerHTML = "Descuento 10%: $" + formatNumber.new(descuento);
            total_12.innerHTML = "Valor por " + cantidad + " chaquetas: $" + formatNumber.new(total_compra_normal);

            fin = total_compra_normal;

            return fin;

        }
        else {
            descuento = 0;
            normal_html_12.innerHTML = "Total normal: $" + formatNumber.new(total_compra_normal);
            descuento_html_12.innerHTML = "Descuento 10%: $" + formatNumber.new(descuento);
            total_12.innerHTML = "Valor por " + cantidad + " chaqueta: $" + formatNumber.new(total_compra_normal);


            fin = total_compra_normal;

            return fin;

        }
    }

}


/**
 * Cálculo del valor total
 */

var btnTotal = document.getElementById('btntotaltotal');
var parrafo_total = document.getElementById('totaltotal');
btnTotal.addEventListener("click", calculoIndividual);

/**
 * Devuelve la suma total de la compra
 */
function calculoIndividual() {
    
    darCalcularPrecio_1();
    darCalcularPrecio_2();
    darCalcularPrecio_3();
    darCalcularPrecio_4();
    darCalcularPrecio_5();
    darCalcularPrecio_6();
    darCalcularPrecio_7();
    darCalcularPrecio_8();
    darCalcularPrecio_9();
    darCalcularPrecio_10();
    darCalcularPrecio_11();
    darCalcularPrecio_12();

    //var miTotal = p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9 + p10 + p11 + p12;
    //parrafo_total.innerHTML = "El total a pagar por toda su compra es:  <strong>$" + formatNumber.new(miTotal) + "</strong>";
}


/**
 * Devuelve un número decimal en formato de miles.
 */
var formatNumber = {
    separador: ".", // separador para los miles
    sepDecimal: ',', // separador para los decimales
    formatear: function (num) {
        num += '';
        var splitStr = num.split('.');
        var splitLeft = splitStr[0];
        var splitRight = splitStr.length > 1 ? this.sepDecimal + splitStr[1] : '';
        var regx = /(\d+)(\d{3})/;
        while (regx.test(splitLeft)) {
            splitLeft = splitLeft.replace(regx, '$1' + this.separador + '$2');
        }
        return this.simbol + splitLeft + splitRight;
    },
    new: function (num, simbol) {
        this.simbol = simbol || '';
        return this.formatear(num);
    }
}