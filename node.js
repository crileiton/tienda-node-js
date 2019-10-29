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
                        dato += datos_parametro[1];

                        var miArreglo = [];
                        miArreglo.push(datos_parametro);
                        

                    }
                    console.log("Perra daniel"+miArreglo.length);
                   // console.log("Perra daniel"+miArreglo[0][0]);
                    //console.log("Perra daniel"+datos_parametro[3]);
                    //console.log("Perra daniel"+datos_parametro[4]);
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