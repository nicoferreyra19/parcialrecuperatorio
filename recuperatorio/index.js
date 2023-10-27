const botonPlatos = document.getElementById("agregarplato");
const botonAdicionales = document.getElementById("agregarAdicionales");
const botonenviar = document.getElementById("enviar");

function mostrarAdicionales(){
    document.getElementById("adicionales").disabled=false;
    document.getElementById("platos").disabled=true;
    document.getElementById("agregarAdicionales").disabled=false;
    document.getElementById("agregarplato").disabled=true;
}

botonPlatos.addEventListener('click', mostrarAdicionales)
botonPlatos.addEventListener('click', agregarItems)
botonAdicionales.addEventListener('click', agregarAdicionales)



const tabla = document.getElementById("tabla")


function agregarItems(){
    const lista_items=[]
    
    plato_incluido = document.getElementById("platos").value
    
    lista_items.push(plato_incluido)

    console.log(lista_items)

    lista_items.forEach (item => {
        const fila = document.createElement('tr');
        fila.innerHTML =`
            <td>${item}</td>
            <input type="number">
            <td>${item.precio}</td>         
        `;
        celda= document.createElement('button');
        celda.innerHTML="Eliminar"
        celda.id="elimItem"
        fila.appendChild(celda)
        tabla.appendChild(fila);
           
        const botonEliminar = document.getElementById("elimItem")
            
    })
        
    
}

function agregarAdicionales(){
    const lista_adicionales=[]
    
    let adicionales = {
        adicional_incluido : document.getElementById("adicionales").value,
        //precio : document.getElementById("op1").value,
    }

    
    
    lista_adicionales.push(adicionales)

    console.log(lista_adicionales)


    lista_adicionales.forEach (adicional => {
        const fila = document.createElement('tr');
        fila.name="fila"
        fila.innerHTML =`
            <td>${adicional.adicional_incluido}</td>
            <input type="number">
            <td>${adicional.precio}</td>
        `;
        celda= document.createElement('button');
        celda.innerHTML="Eliminar"
        celda.id="elimIngr"
        fila.appendChild(celda)
        tabla.appendChild(fila);
           
        document.getElementById("adicionales").options[0].disabled=true;
           
        const botonEliminar = document.getElementById("elimIngr")
        botonEliminar.addEventListener('click', function eliminar(){
            fila.innerHTML="";
        })
    })

    
}

botonenviar.addEventListener('click', enviarCarrito)

function enviarCarrito(){
    document.getElementById("adicionales").disabled=true;
    document.getElementById("platos").disabled=false;
    document.getElementById("agregarAdicionales").disabled=true;
    document.getElementById("agregarplato").disabled=false;
    

    tablabody = document.querySelector("#tabla tbody").innerHTML="";
}

