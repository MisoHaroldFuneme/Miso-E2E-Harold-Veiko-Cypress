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

http://localhost:2370/ghost/

4-) verifique que la aplicación se puede ver de forma local de no ser así verifique los pasos anteriores


## Instrucciones para ejecutar los escenarios en Cypress

