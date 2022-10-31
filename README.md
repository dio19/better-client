# better-client

React App desarrollada con Typescript

<p>
  <img alt="React" src="https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=React&logoColor=black" />
  <img alt="Typescript" src="https://img.shields.io/badge/-Typescript-339933?style=flat-square&logo=Typescript&logoColor=white" />
  <img alt="Sass" src="https://img.shields.io/badge/-Sass-CC6699?style=flat-square&logo=sass&logoColor=white" />
  <img alt="MaterialUI" src="https://img.shields.io/badge/Material--UI-blue?style=flat-square&logo=Material--UI&logoColor=white" />
  <img alt="Git" src="https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white" />
  <img alt="Jest" src="https://img.shields.io/badge/-Jest-C21325?style=flat-square&logo=jest&logoColor=white" />
</p>

React | Typescript | Material UI | Sass | Jest | React testing library | Webpack | Babel | Eslint |

[Como Correr el proyecto](#como-correr-el-proyecto)
  - [Instalación](#instalacion)

[Home](#home)

[Post](#post)

[Put](#put)

[Delete](#delete)

[Comentarios Generales](#comentarios-generales)


## Como Correr el proyecto

### Instalación

```
git clone https://github.com/dio19/better-client.git
cd better-client
npm install

```
Levantar la app (dev env):

```
npm run start-dev

```

La app esta configurada con webpack para poder correr la app en ambiente de desarrollo y a su vez poder construir la version para ser deployada en produccion con el siguiente comando:

```
npm run build

```

## Home

En la pagina principal se desarrollo un componente tipo carousel o swipper, que contiene una breve descripcion de los tres metodos del crud y un boton que te redirige a la ruta donde se renderiza el componente que implemente dicho metodo.

### Post

En esta pagina se implemento un formulario con los datos del nuevo cliente a ingresar y validaciones para dichos datos.
 
### Put

Para actualizar la informacion de un cliente ya existente se utiliza un formulario donde se desarrollo un id checker. Con ese chequeo se verifica la existencia del cliente proporcionandole el id del mismo. Si el id no se encuentra entonces arroja un error. Si el id existe devuelve la informacion cargada debajo de cada una de los input, y habilita los mismos para poder actualizar la informacion del cliente.

### Delete

Para eliminar un cliente, se utiliza el mismo formulario de que se encuentra en la ruta del put, pero se activa el metodo DELETE, clickeando el switch que indica que se encuentra en el meteodo PUT

### Comentarios Generales


