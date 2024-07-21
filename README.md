
# WebView Example Angular Application 
Esta es una aplicación Angular diseñada para integrarse con una aplicación Android que carga la web en un WebView y obtiene la ubicación del dispositivo desde la interfaz de Android. 
## Configuración 
### Clonar el Repositorio 
```sh 
git clone https://github.com/DaveDeveloper117/webview-example-angular.git
cd webview-example-angular
```
### Cambiar la Configuración del Host y Puerto

Para utilizar un host y puerto diferentes, debes modificar el archivo `package.json` y `proxy.conf.json`.

#### `package.json`

En el archivo `package.json`, busca la sección de scripts y cambia el host y puerto en el script de inicio:
```json
"scripts": {
  "ng": "ng",
  "start": "ng serve --proxy-config proxy.conf.json --host TU_NUEVO_HOST --port NUEVO_PUERTO",
  "build": "ng build",
  "watch": "ng build --watch --configuration development",
  "test": "ng test"
}
```
#### `proxy.conf.json`

En el archivo `proxy.conf.json`, cambia el target al nuevo endpoint:

```json
{
  "/": {
    "target": "http://TU_NUEVO_ENDPOINT",
    "secure": false,
    "changeOrigin": true,
    "logLevel": "debug"
  }
}
```
### Instalar Dependencias

Instala las dependencias necesarias ejecutando:
```npm
npm install
```
### Ejecutar la Aplicación

Inicia la aplicación Angular con el siguiente comando:

```npm
npm start
```



