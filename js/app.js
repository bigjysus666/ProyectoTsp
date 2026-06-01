const productos = [

{
    nombre:"iPhone 17",
    categoria:"celulares",
    precio:4500000,
    stock:10,
    imagen:"https://picsum.photos/400/300?1"
},

{
    nombre:"Samsung S26",
    categoria:"celulares",
    precio:3800000,
    stock:8,
    imagen:"https://picsum.photos/400/300?2"
},

{
    nombre:"MacBook Pro",
    categoria:"laptops",
    precio:8500000,
    stock:4,
    imagen:"https://picsum.photos/400/300?3"
},

{
    nombre:"Asus ROG",
    categoria:"laptops",
    precio:6200000,
    stock:6,
    imagen:"https://picsum.photos/400/300?4"
},

{
    nombre:"Lenovo Legion",
    categoria:"laptops",
    precio:5800000,
    stock:7,
    imagen:"https://picsum.photos/400/300?5"
},

{
    nombre:"Xiaomi 15",
    categoria:"celulares",
    precio:2900000,
    stock:15,
    imagen:"https://picsum.photos/400/300?6"
}

];

const contenedor = document.getElementById("productos");

function mostrarProductos(lista){

    contenedor.innerHTML = "";

    lista.forEach(producto => {

        contenedor.innerHTML += `
        
        <div class="card">

            <img src="${producto.imagen}" alt="${producto.nombre}">

            <div class="info">

                <h3>${producto.nombre}</h3>

                <p class="precio">
                    Precio:
                    $${producto.precio.toLocaleString()}
                </p>

                <p class="stock">
                    Cantidad en stock:
                    ${producto.stock}
                </p>

                <button class="btn-carrito">
                    🛒 Agregar al carrito
                </button>

            </div>

        </div>

        `;
    });
}

mostrarProductos(productos);

document.getElementById("busqueda")
.addEventListener("input", function(e){

    const texto = e.target.value.toLowerCase();

    const filtrados = productos.filter(producto =>
        producto.nombre.toLowerCase().includes(texto)
    );

    mostrarProductos(filtrados);
});

document.getElementById("filtro")
.addEventListener("change", function(e){

    const categoria = e.target.value;

    if(categoria === "todos"){
        mostrarProductos(productos);
        return;
    }

    const filtrados = productos.filter(producto =>
        producto.categoria === categoria
    );

    mostrarProductos(filtrados);
});