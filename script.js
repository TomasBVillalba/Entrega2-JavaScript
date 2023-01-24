const productos = [
    {nombre: "pico de loro ", precio: 3100},
    {nombre: "bombillon", precio: 4500},
    {nombre: "mate imperial ", precio: 12000},
    {nombre: "mate camionero", precio: 7500},
    {nombre: "mate de madera", precio: 6100},
]

let carrito = []

let seleccion = prompt ("Bienvenido a MarteleArtesanias, desea comprar algun producto? SI/NO")
while (seleccion != "si" && seleccion != "no") {
    alert ("por favor ingrese SI/NO")
    seleccion = prompt ("desea comprar algun producto? SI/NO")
}

if(seleccion == "si") {
    alert("Te dejamos nuestra lista de productos!")
    let allProductos = productos.map((producto) => producto.nombre +" "+ producto.precio + "$");
    alert (allProductos.join("-"))
} else if (seleccion == "no") {
    alert ("gracias por visitar nuestra pagina!")
}

while (seleccion != "no") {
    let producto = prompt ("agrega un producto a tu carrito")
    let precio = 0

    if (producto == "pico de loro" || producto == "bombillon" || producto == "mate imperial" 
    || producto == "mate camionero" || producto == "mate de madera"){
        switch(producto) {
            case "pico de loro":
                precio = 3100;
                break;
            case "bombillon":
                precio = 4500;
                break;
            case "mate imperial":
                precio = 12000;
                break;
            case "mate camionero":
                precio = 7500;
                break;
            case "mate de madera":
                precio = 6100;
                break;
            
        }
    let unidades = parseInt (prompt("cuantas unidades desea llevar?"))

        carrito.push ({producto, unidades, precio})
        console.log(carrito)
    } else {
        alert ("no tenemos ese producto")
    }

    seleccion = prompt ("desea seguir comprando?")

    while (seleccion === "no") {
        alert ("gracias su compra!")
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
        })
    break;
    }
    
}


const total = carrito.reduce ((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`el total a pagar por su compra es: ${total}`)



let buscar = prompt("desea comprar la bombilla mas barato que tenemos ? SI/NO")
if (buscar != "no") {
    const prodBuscado =
    productos.find ((producto) => producto.precio < 3200)
    console.log(prodBuscado);
    
} else {
    alert ("gracias por su compra!")
}
let buscar1 = prompt("desea comprar el mate mas barato que tenemos ? SI/NO")
if (buscar1 !="no") {
    const prodBuscado =
    productos.find ((producto) => producto.precio < 6200 && producto.precio > 6000)
    console.log(prodBuscado);
} else {
    alert ("gracias por su compra!")
}





