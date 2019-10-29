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
                    var nombres = [];

                    arreglo_cantidades = miArreglo[0].split(",");
                    arreglo_txts = miArreglo2[0].split(",");

                    arreglo_cantidades.reverse();
                    arreglo_txts.reverse();

                    arreglo_cantidades.pop(); 
                    arreglo_txts.pop(); 

                    cantidades_final = arreglo_cantidades.slice(3);
                    nombres = arreglo_txts.slice(3);

                    console.log("Tamaño cantidades: " + cantidades_final.length);
                    console.log("Tamaño txts: " + nombres.length);

                   // console.log("Dato: "+miArreglo[0][0]);
                    //console.log("Dato: "+datos_parametro[3]);
                    //console.log("Dato: "+datos_parametro[4]);
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