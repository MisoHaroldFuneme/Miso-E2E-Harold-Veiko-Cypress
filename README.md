
## SEMANA 7
# WIKI: 
- - https://github.com/MisoHaroldFuneme/Miso-E2E-Harold-Veiko-Cypress/wiki/SEMANA-7---ESTRATEGIAS-USADAS-EN-LAS-PRUEBAS

# EJECUCION DE CYPRESS
Para la ejecución de cypress es necesario modificar el archivo **cypress.json** en:
![Configuracion de cypress.json](https://github.com/MisoHaroldFuneme/Miso-E2E-Harold-Veiko-Cypress/blob/main/ConfigCypress.PNG)

- Modificar el puerto de la web ghost, esto se realiza en **baseUrl**.
- Modificar el usuario por el que tienen registrado en ghost, esto se realiza en **user**.
- Modificar el password del usuario configurado en el paso anterior, esto se realiza en **password**.



## SEMANAS ANTERIORES

# Miso-E2E-Harold-Veiko-Cypress

Proyecto en el que se ejecutaran escenarios en la aplicación Ghost con la herramienta Cypress con el fin de contrastar sus utilidades frente a la herramienta Kraken


## Descripción de las Funcionalidades bajo prueba:

- Post
- Page
- - Crear pagina con estado published: realizamos login y creamos pagina con nombre y contenido, por ultimo regresamos a la pantalla principal para garantizar que se haya creado
- - Crear pagina con estado draft: realizamos login y creamos pagina sin nombre ni contenido, por ultimo regresamos a la pantalla principal para garantizar que se haya creado  con el estado draft
- - Editar pagina: realizamos login y editamos pagina uno de la lista (titulo ¡ y contenido), por ultimo regresamos a la pantalla principal para garantizar que se haya creado  con el estado draft
- - Delete pagina: realizamos login y borramos pagina uno de la lista, por ultimo regresamos a la pantalla principal para garantizar que se haya borrado la pagina uno de la lista
- Tag
- Settings General


## Instrucciones para ejecutar la aplicación Ghost

Link de descarga: https://drive.google.com/file/d/1TG5SqavkgVaLpgqBGHHrTkouqtCrMRBD/view?usp=sharing

En el link de descarga se encuentra el archivo Ghost 3.3.0.zip el cual será la aplicación que se pondrá a prueba de forma local.
Para configurar el ambiente de esta aplicación es necesario que tenga instalado Ghost 3.3.0 y Node 12.20.1

- 1-) Descomprima el archivo Ghost 3.3.0.zip
- 2-) Abra una terminal y ubíquese en la dirección de la carpeta Ghost 3.3.0
- 3-) ejecuté el siguiente comando
ghost start
Este ejecutará la aplicación y en la consola mostrar en que puerto podrá verla de modo local. Como ejemplo de la URL:

- - http://localhost:2370/ghost/

4-) verifique que la aplicación se puede ver de forma local de no ser así verifique los pasos anteriores


## Instrucciones para ejecutar los escenarios en Cypress

A continuación se deben seguir esto pasos para configurar cypress:

- 1-) Instale la versión de node v12.20.1 en el siguiente enlace podra encontrar esta versión
- - https://nodejs.org/en/blog/release/v12.20.1/
- - Asegurese de contar con esta version ejecutando el comando < node -v > de no tener esta versión las pruebas pueden fallar
- - IMPORTANTE! tener esta versión de node para poder ejecutar el proyecto
- 2-) abra una terminal y ejecute el siguiente comando:
- - npm install -g cypress
- - Nota: el comando de instalación global puede ser ejecutado desde cualquier ubicación en el esquema de archivos de su máquina. En caso de que desee instalarlo únicamente para su proyecto, omita el flag -g y asegúrese de ejecutar el comando en el directorio de su proyecto luego de inicializarlo.
- 3-) Para correr las pruebas ejecute el siguiente comando
- - cypress run
- - Esto correra las pruebas y mostrara los resultados en consola
- 4-) Podrá ver cuáles escenarios fueron exitosos, y posteriormente, desde un explorador de archivos podrá ver el directorio videos y el directorio screenshots, donde se guardan las capturas realizadas durante la prueba (en este caso, ninguna). El video que se genera es una grabación de lo que usted vería en el navegador si se ejecutara en modo headed.




