const productos=[
    //Portatiles
    {
        id:"Antojos-01",
        titulo:"Ensalada Mixta",
        imagen:"imagenes/pla10.png",
        categoria:{
            nombre:"Antojos",
            id:"Antojos"
        },
        precio:16300
    },
    {
        id:"Antojos-02",
        titulo:"Huevos Gourmet",
        imagen:"imagenes/pla2.png",
        categoria:{
            nombre:"Antojos",
            id:"Antojos"
        },
        precio:16000
    },
    {
        id:"Antojos-03",
        titulo:"Degustación Dulce y Crujiente",
        imagen:"imagenes/pla3.png",
        categoria:{
            nombre:"Antojos",
            id:"Antojos"
        },
        precio:15200
    },
    {
        id:"Antojos-04",
        titulo:"Filete de Res a la Parrilla",
        imagen:"imagenes/pla4.png",
        categoria:{
            nombre:"Antojos",
            id:"Antojos"
        },
        precio:23000
    },
    //Desayunos
    {
    id:"Desayunos-01",
        titulo:"Desayuno 1",
        imagen:"imagenes/b1.png",
        categoria:{
            nombre:"Desayunos",
            id:"Desayunos"
        },
        precio:17000
    },
    {
    id:"Desayunos-02",
        titulo:"Desayuno 2",
        imagen:"imagenes/b2.png",
        categoria:{
            nombre:"Desayunos",
            id:"Desayunos"
        },
        precio:14500
    },

    {
    id:"Desayunos-03",
        titulo:"Desayuno 3",
        imagen:"imagenes/b3.png",
        categoria:{
            nombre:"Desayunos",
            id:"Desayunos"
        },
        precio:13900
    },
    {
    id:"Desayunos-04",
        titulo:"Desayuno 4",
        imagen:"imagenes/b4.png",
        categoria:{
            nombre:"Desayunos",
            id:"Desayunos"
        },
        precio:9800
    },
    
    {
    id:"Desayunos-05",
        titulo:"Desayuno 5",
        imagen:"imagenes/pla8.png",
        categoria:{
            nombre:"Desayunos",
            id:"Desayunos"
        },
        precio:16000
    },
    {
    id:"Desayunos-06",
        titulo:"Desayuno 6",
        imagen:"imagenes/pla9.png",
        categoria:{
            nombre:"Desayunos",
            id:"Desayunos"
        },
        precio:26500
    },
//Accesorios
    {
    id:"Platillos fuertes-01",
        titulo:"Paella de Mariscos",
        imagen:"imagenes/pla1.png",
        categoria:{
            nombre:"Platillos fuertes",
            id:"Platillos fuertes"
        },
        precio:23000
    },
    {
    id:"Platillos fuertes-02",
        titulo:"Filete de Res a la Parrilla",
        imagen:"imagenes/pla4.png",
        categoria:{
            nombre:"Platillos fuertes",
            id:"Platillos fuertes"
        },
        precio:19000
    },
    {
    id:"Platillos fuertes-03",
        titulo:"Salmon Fresco",
        imagen:"imagenes/pla5.png",
        categoria:{
            nombre:"Platillos fuertes",
            id:"Platillos fuertes"
        },
        precio:21000
    },
    {
    id:"Platillos fuertes-04",
        titulo:"Pasta Clásica Italiana",
        imagen:"imagenes/pla6.png",
        categoria:{
            nombre:"Platillos fuertes",
            id:"Platillos fuertes"
        },
        precio:20000
    },
    {
    id:"Platillos fuertes-05",
        titulo:"Salmón a la Plancha",
        imagen:"imagenes/pla7.png",
        categoria:{
            nombre:"Platillos fuertes",
            id:"Platillos fuertes"
        },
        precio:18900
    },
    {
    id:"Platillos fuertes-06",
        titulo:"Pollo al Curry con Arroz",
        imagen:"imagenes/pla11.png",
        categoria:{
            nombre:"Platillos fuertes",
            id:"Platillos fuertes"
        },
        precio:15500
    },{
    id:"Platillos fuertes-07",
        titulo:"Selección de Sushi",
        imagen:"imagenes/pla12.png",
        categoria:{
            nombre:"Platillos fuertes",
            id:"Platillos fuertes"
        },
        precio:29500
    }
];    

//código Js
const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


function cargarProductos(productosElegidos) {


    contenedorProductos.innerHTML = "";


    productosElegidos.forEach(producto => {


        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;


        contenedorProductos.append(div);
    })


    actualizarBotonesAgregar();
}


cargarProductos(productos);


botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {


        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");


        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }


    })
});


function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");


    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}


let productosEnCarrito;


let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");


if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}


function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);


    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }


    actualizarNumerito();


    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}


function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}

