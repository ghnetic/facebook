//necesitamos saber cuando la pagina ya cargo

let mostrarP; //personalizados
document.addEventListener(
    "DOMContentLoaded",function(){
        mostrarP=document.querySelector("#mostrar"); //lamamos al id del html
        document.querySelector("#genero-f").addEventListener("click",ocultar);
        document.querySelector("#genero-m").addEventListener("click",ocultar);
        document.querySelector("#genero-p").addEventListener("click", function(){
            mostrarP.className="d-block";
        });

        llenarCampos();
    }
);

function ocultar(){
    mostrarP.className="d-none";
}

function llenarCampos(){

    //Llenar los dias
    let dias;
    dias=document.querySelector("#dia");

    for(let i=1;i<=30;i++){
        opcionDia=document.createElement("option");
        opcionDia.value=i;
        opcionDia.textContent=i;
        dias.appendChild(opcionDia);
    }


    //Llenar los meses

    meses=["Enero", "Febrero", "Marzo", "Abril", "Mayo","Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    let mes
    mes=document.querySelector("#mes");
    for(let i=0;i<12;i++){
        opcionMes=document.createElement("option");
        opcionMes.value=i;
        opcionMes.textContent= meses[i];
        mes.appendChild(opcionMes);
    }

    //Llenar los años

    let anios= new Date();
    let anio;
    anio= document.querySelector("#anio");
    for(let i=1950;i<=anios.getFullYear(); i++){
        opcionAnio=document.createElement("option");
        opcionAnio.value=i;
        opcionAnio.textContent=i;
        anio.appendChild(opcionAnio);
    }

}