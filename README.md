## EJERCICIO INMOBILIARIA

1. Crear un proyecto con el nombre "proyecto-inmobiliaria", lo cual implica:
   1.1. Crear la carpeta con el nombre mencionado
   1.2. Dentro de la carpeta crear el archivo index.js
   1.3. Ejecutar el comando correspondiente para crear el archivo package.json
   1.4. Instalar los siguientes paquetes en el proyecto: express, nodemon y cors
   1.5. En el package.json generar los scripts necesarios para ejecutar el proyecto.

2. Crear un archivo .js con el nombre "inmuebles" dentro de una carpeta denominada "Datos" y dentro de ella crear un array que contenga los inmuebles del archivo inmuebles.txt. (No olvidar de exportar el array).

3. En index.js crear un servidor utilizando "express", que escuche en el puerto 3001 y mediante consola mostrar el puerto.

4. Dentro del index.js vamos a crear los siguientes puntos de acceso con sus respectivas funcionalidades (RECOMIENDO UTILIZAR POSTMAN O ALGUNA HERRAMIENTA SIMILAR PARA REALIZAR LAS PRUEBAS):
   4.1. Method: GET, PA: "/". Debe mostrar un mensaje en el browser que diga "Bienvenidos a INMUEBLES SRL".
   4.2. Method: GET, PA: "/api/inmuebles". Debe mostrar en el browser todos los inmuebles.
   4.3. Method: GET, PA: "/api/inmuebles/:id". Debe mostrar en el browser el inmueble con el id indicado.
   4.4. Method: POST, PA: "/api/inmuebles/nuevo". Debe crear un nuevo inmueble y luego mostrar todos en pantalla.
   4.5. Method: PUT, PA: "/api/inmuebles/editar/:id". Debe editar uno o más atributos del inmueble pasado por parámetro, y mostrarlo en pantalla.
   4.6. Method: DELETE, PA: "/api/inmuebles/eliminar/:id". Debe eliminar el inmueble pasado por parámetro y mostra la lista resultante en pantalla.
   4.7. Method: GET, PA: "/api/inmuebles/filtro". Debe mostrase en pantalla aquellos inmuebles que respondan a los filtros de: metrosCuadrados y/o precio pasados mediante body.
   4.8. Method: GET, PA: "/api/inmuebles/info". Debe mostrase en pantalla un mensaje que describa la cantidad de inmuebles existentes y fecha y hora en al que se realizó la consulta.

5. Crear un archivo .js que contenga un array de permisos (tipoUsuario, permiso).

6. Crear una función middleware que dependiendo del tipo de usuario que realice la petición, le permita acceder o no al mismo (en este últmo caso visualizar el siguiente mensaje "Usted no posee permisos para está petición"), teniendo en cuenta lo siguiente:
   6.1. Todos los tipos de usuarios deben tener acceso al PA: "/";
   6.2. El tipo de usuario 1 va a tener acceso solamente a los puntos del A a la D.
   6.3. El tipo de usuario 2 va a tener acceso solamente a los puntos del E a la G.
   6.4. El tipo de usuario 3 va a tener acceso solamente al punto H.

7. Subir a un repositorio y en enviar el link del mismo al correo: ing.ezequielsoruco@gmail.com.
