let api='http://localhost:4003/cerrajeria';

let cerrajeria = document.getElementById("Cerrajeria");
let ferreteria = document.getElementById("ferreteria");




cerrajeria.addEventListener('click', () => {

    obtenerProductos('http://localhost:4003/cerrajeria');
    

})
ferreteria.addEventListener('click', () => {

    obtenerProductos('http://localhost:4004/ferreteria');
    

})


const obtenerProductos = async (url) => {
    let mostrarProductos = document.querySelector('.grid-productos');
    mostrarProductos.innerHTML = '';
    const resp = await fetch(url);
    const data = await resp.json();
    //console.log(data);
    data.forEach(element => {
        const { imagen, nombre, precio} = element;
        mostrarProductos.innerHTML += ` <div class="colmascotas">
    <a href="#" class="enlace-detalle-mascota">
        <div class="card bg-dark text-white gradiente">                
            <img src="${imagen}" class="card-img" alt="...">
            <div class="card-img-overlay">
                    <h5 class="card-title body2Bold">${nombre}</h5><br><br>
                    <p class="card-text body2Regular">PRECIO:  ${precio}</p>
                    
            </div>
        </div>
    </a>
</div> `
    });
};
document.addEventListener('DomContentLoaded', obtenerProductos(api));