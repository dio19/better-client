# better-client

* React App desarrollada con Typescript
* Componentes de Material UI y Swipper
* Formularios con Formik y validaciones con YUP
* State Managment de la data mock con Context API
* Rutas de la App con React Router V6.
* Configuracion customizada con Webpack y babel para la puesta a punto del ambiente de desarrollo y produccion.
* Test con Jest y React Testing Library
* Preprocesador de estilos con Sass y node-sass.
* Manejo de fechas con la libreria dayjs y Date Pickers de MUI.
* Eslint/Prettier para analisis y formateo de codigo.

<p>
  <img alt="React" src="https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=React&logoColor=black" />
  <img alt="Typescript" src="https://img.shields.io/badge/-Typescript-339933?style=flat-square&logo=Typescript&logoColor=white" />
  <img alt="Sass" src="https://img.shields.io/badge/-Sass-CC6699?style=flat-square&logo=sass&logoColor=white" />
  <img alt="Webpack" src="https://img.shields.io/badge/-Webpack-F05032?style=flat-square&logo=Webpack&logoColor=white" />
  <img alt="Jest" src="https://img.shields.io/badge/-Jest-C21325?style=flat-square&logo=jest&logoColor=white" />
  <img alt="Babel" src="https://img.shields.io/badge/-Babel-FFFF33?style=flat-square&logo=Babel&logoColor=white" />
</p>

React | Typescript | Material UI | React Router 6 | Sass | Jest | React testing library | Webpack | Babel | Eslint | Formik | YUP | dayjs

[Como Correr el proyecto](#como-correr-el-proyecto)
  - [Instalación](#instalacion)

[Home](#home)

[Tabla](#tabla)

[Post](#post)

[Put](#put)

[Delete](#delete)


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
![Home](https://user-images.githubusercontent.com/55143009/199045117-0c19724e-0352-4cc5-b000-77a010158f1d.gif)

En la pagina principal se desarrollo un componente tipo carousel o swipper, que contiene una breve descripcion de los tres metodos del crud y una tabla con todos los clientes. Un boton que te redirige a la ruta donde se renderiza el componente que implemente dicho metodo.

## Tabla
![Tabla](https://user-images.githubusercontent.com/55143009/199048375-47f8e973-edd5-4140-8021-29da56e24d09.gif)

En la ruta /customers se implemente una tabla donde se puede acceder al listado completo de clientes, con paginado y sort en algunos campos.

### Post
![Post](https://user-images.githubusercontent.com/55143009/199045163-4661523e-47bd-4618-b2ca-f982c764beb4.gif)

En esta pagina se implemento un formulario con los datos del nuevo cliente a ingresar y validaciones para dichos datos.
 
### Put
![Put](https://user-images.githubusercontent.com/55143009/199045245-e0e5ac77-0101-49f8-9b56-73eb22c9732c.gif)

Para actualizar la informacion de un cliente ya existente se utiliza un formulario donde se desarrollo un id checker. Con ese chequeo se verifica la existencia del cliente proporcionandole el id del mismo. Si el id no se encuentra entonces arroja un error. Si el id existe devuelve la informacion cargada debajo de cada una de los input, y habilita los mismos para poder actualizar la informacion del cliente.

### Delete
![Delete](https://user-images.githubusercontent.com/55143009/199048404-d6377b72-5b46-4992-a301-b92ed19aae35.gif)

Para eliminar un cliente, se utiliza el mismo formulario de que se encuentra en la ruta del put, pero se activa el metodo DELETE, clickeando el switch que indica que se encuentra en el meteodo PUT

