'use strict';

var http = require('http');
var url = require('url');
var fs = require('fs');//file sistem para leer achivos del sistema 

var extensiones = { //extensiones de lo archivo o cosas a enviar 
    'html': 'text/html',
    'css': 'text/css',
    'jpg': 'image/jpg',
    'png': 'image/png',
    'ico': 'image/x-icon',
    'mp3': 'audio/mpeg3',
    'mp4': 'video/mp4',
    'descarga': 'text/plain',
    'js': 'application/javascript',

}

var dato = "";
var dato2 = "";
function servidor(pedido, respuesta) {
    //
    var objetoUrl = url.parse(pedido.url);
    var camino = 'recursos' + objetoUrl.pathname;
    if (camino == 'recursos/') {
        camino = 'recursos/index.html';
    }
    fs.readFile(camino, (error, contenido) => {
        if (error) {
            respuesta.writeHead(500, { 'Content-Type': 'text/html' })
            respuesta.write('<h1>Error Interno Servidor</h1>');
            respuesta.end();

        }
        else {
            var vec = camino.split('.');
            var extension = vec[vec.length - 1];
            var extensionMime = extensiones[extension];
            respuesta.writeHead(200, { 'Content-Type': extensionMime });
            
            if (extension == 'html') {
                var arreglo_parametros = [];
                if (pedido.url.indexOf("?") > 0) {
                    var datos_url = pedido.url.split("?");
                    arreglo_parametros = datos_url[1].split("&");
                    for (var i = arreglo_parametros.length - 1; i >= 0; i--) {

                        var parametro = arreglo_parametros[i];
                        var datos_parametro = parametro.split('=');
                        console.log(datos_parametro);
                        dato += datos_parametro[1] + ",";
                        dato2 += datos_parametro[0] + ",";

                        var miArreglo = [];
                        var miArreglo2 = [];
                        miArreglo.push(dato);
                        miArreglo2.push(dato2);
                        

                    }
    
                    var arreglo_cantidades = [];
                    var arreglo_txts = [];

                    var cantidades_final = [];
                    var nombres_final = [];

                    arreglo_cantidades = miArreglo[0].split(",");
                    arreglo_txts = miArreglo2[0].split(",");

                    console.log("Holiiiiiiii: " + arreglo_cantidades[0]);
                    console.log("Holoooooooo: " + arreglo_txts[0]);

                    // Elimina el último objeto del arreglo
                    arreglo_cantidades.pop(); 
                    arreglo_txts.pop(); 

                    // Guarda en cada variable desde la posición 3 (Esto se hace debido a que se realiza doble petición - en nuestro caso -)
                    cantidades_final = arreglo_cantidades.slice(1);
                    nombres_final = arreglo_txts.slice(3);

                    // Para invertir los arreglos
                    cantidades_final.reverse();
                    nombres_final.reverse();

                   // console.log("Tamaño cantidades: " + cantidades_final[0]);
                   // console.log("Tamaño txts: " + nombres_final[0]);

                    /**
                     * Aqui inicia el calculo de productos
                     */

                    // Calculo producto 1

                    function darCalcularPrecio_1() {
                        var vacia = cantidades_final[0];
                        var cantidad = parseInt(cantidades_final[0]);
                        var total_compra_normal = cantidad * 20000;
                        var fin = 0;
                    
                        if (vacia == "") {
                            fin = 0;
                            return fin;
                        }
                        else if (cantidad == 0) {

                            fin = 0;
                            return fin;
                        }
                        else if (cantidad >= 10) {
                            var descuento = total_compra_normal * 0.1;
                            var total_con_descuento = total_compra_normal - descuento;
                    
                            fin = total_con_descuento;
                            return fin;
                        }
                        else {
                            if (cantidad > 1) {
                                descuento = 0;
                    
                                fin = total_compra_normal;
                                return fin;
                            }
                            else {
                                descuento = 0;
                    
                                fin = total_compra_normal;
                                return fin;
                            }
                        }
                    
                    }

                    // Calculo producto 1

                    function darCalcularPrecio_2() {
                        var vacia = cantidades_final[1];
                        var cantidad = parseInt(cantidades_final[1]);
                        var total_compra_normal = cantidad * 40000;
                        var fin = 0;
                    
                        if (vacia == "") {
                            fin = 0;
                            return fin;
                        }
                        else if (cantidad == 0) {

                            fin = 0;
                            return fin;
                        }
                        else if (cantidad >= 10) {
                            var descuento = total_compra_normal * 0.1;
                            var total_con_descuento = total_compra_normal - descuento;
                    
                            fin = total_con_descuento;
                            return fin;
                        }
                        else {
                            if (cantidad > 1) {
                                descuento = 0;
                    
                                fin = total_compra_normal;
                                return fin;
                            }
                            else {
                                descuento = 0;
                    
                                fin = total_compra_normal;
                                return fin;
                            }
                        }
                    
                    }


                    function darCalcularTotal() {
    
                        var p1 = darCalcularPrecio_1();
                        var p2 = darCalcularPrecio_2();
                        //var p3 = darCalcularPrecio_3();
                        //var p4 = darCalcularPrecio_4();
                        //var p5 = darCalcularPrecio_5();
                        //var p6 = darCalcularPrecio_6();
                        //var p7 = darCalcularPrecio_7();
                        //var p8 = darCalcularPrecio_8();
                        //var p9 = darCalcularPrecio_9();
                        //var p10 = darCalcularPrecio_10();
                        //var p11 = darCalcularPrecio_11();
                        //var p12 = darCalcularPrecio_12();
                    
                        var miTotal = p1 + p2;
                        return miTotal;
                        //var miTotal = p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9 + p10 + p11 + p12;
                        //parrafo_total.innerHTML = "El total a pagar por toda su compra es:  <strong>$" + formatNumber.new(miTotal) + "</strong>";
                    }
                    
                    var totalito = darCalcularTotal();
                    dato = totalito;

                    /**
                     * Aqui termina el calculo de productos
                     */


                }
                else {
                    dato = "";
                }

                var textoHtml = contenido.toString();
                textoHtml = textoHtml.replace("{variable1}", "" + dato);

                respuesta.write(textoHtml);
                respuesta.end();
            }
            else{
                respuesta.write(contenido);
                respuesta.end();
            }
        }
    });
}
var servidor = http.createServer(servidor);
servidor.listen(3000, 'localhost', () => {
    console.log("Servidor ejecutandose en el puerto 3000")
});