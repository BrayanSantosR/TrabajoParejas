let formulario= document.getElementById("form");
let botton=document.querySelector("submit")
let url;

formulario.addEventListener("submit",async(e)=>{
    //console.log("funciona");
    e.preventDefault();
    let nombre=document.getElementById("inputName").value;
    let precio=document.getElementById("inputprecio").value;
    let imagen= document.getElementById("inputUrl").value;
    //let document.querySelector('img').setAttribute('src',image);
    let categoria= document.getElementById("categoria").value;
    if(categoria=="cerrajeria"){
        url='http://localhost:4003/cerrajeria';//declarar
    }else{
        url='http://localhost:4004/ferreteria';
    }

    await fetch(url,{
        method: 'POST',//TIPO DE METODO igual a postman
        body: JSON.stringify({     //para convertitr tipo json
           nombre,
           precio,
           imagen,
           categoria 
        }),
        headers:{//se utiliza igual que en postman
            "Content-Type":"application/json; charset=UTF-8" 
        }    //para convertir a json
    })
     
})