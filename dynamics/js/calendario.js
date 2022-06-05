const titulo = document.getElementById("titulo2");
const mes = document.getElementById("cuad1");
const anuncios = document.getElementById("salir1");
const inicio = document.getElementById("volver_inicio");
const asistir = document.getElementById("boton3");
const rechazar = document.getElementById("boton4");
const dias = document.getElementsByTagName("td");
const mes1 = document.getElementById("mes");
const btn_prox = document.createElement("button");
const btn_anterior = document.createElement("button");
btn_prox.innerHTML="siguiente";
btn_anterior.innerHTML="anterior";
titulo.append(btn_prox);
titulo.append(btn_anterior );
var dia1;
var ultimo;
var mesAct;
var año;
var proximo=0;
function peticion()
{
    datosForm.append ("masMes", proximo);
    fetch("../dynamics/calendario.php", {
        method:"POST", 
        body: datosForm,
    }).then ((response) =>{
        return response.json();
    }).then ((datosJSON)=>{
    
        ultimo=datosJSON.ultimo;
    
        dia1=datosJSON.primero;
        mesAct=datosJSON.mes;
        año=datosJSON.año;
        switch(datosJSON.mes)
        {
            case 1:
                {
                    mes1.innerHTML="Enero "+año;
                    break;
                }
            case 2:
            {
                mes1.innerHTML="Febrero "+año;
                break;
            }
            case 3:
                {
                    mes1.innerHTML="Marzo "+año;
                    break;
                }
            case 4:
                {
                    mes1.innerHTML="Abril "+año;
                    break;
                }
            case 5:
                {
                    mes1.innerHTML="Mayo "+año;
                    break;
                }
            case 6:
                {
                    mes1.innerHTML="Junio "+año;
                    break;
                }
            case 7:
                {
                    mes1.innerHTML="Julio "+año;
                    break;
                }
            case 8:
                {
                    mes1.innerHTML="Agosto "+año;
                    break;
                }
            case 9:
                {
                    mes1.innerHTML="Septiembre "+año;
                    break;
                }
            case 10:
                {
                    mes1.innerHTML="Octubre "+año;
                    break;
                }
            case 11:
                {
                    mes1.innerHTML="Noviembre "+año;
                    break;
                }
            case 12:
                {
                    mes1.innerHTML="Diciembre "+año;
                    break;
                }
        }
        var num=1;
        var dia=dia1;
        
        while (num<=ultimo)
        {
        
            dias[dia].innerHTML=num;
            num++;
            dia++;
            dias[dia].id=num+"/"+mesAct+"/"+año;
            
        }
    })

}
const datosForm= new FormData();
peticion();
btn_prox.addEventListener("click", ()=>{
    proximo++;
    for(dia of dias)
    {
        dia.innerHTML="";
    }
    peticion();
});
btn_anterior.addEventListener("click", ()=>{
    proximo--;
    for(dia of dias)
    {
        dia.innerHTML="";
    }
    peticion();
});
anuncios.addEventListener("click", ()=>{
    window.location = "./anuncios.html";
})
// anuncios.addEventListener("mouseover", () =>{
//     anuncios.style.backgroundColor = "#D1A11F"
// })
inicio.addEventListener("click", ()=>{
    window.location = "./inicioConSesion.php";
})

asistir.addEventListener("click", ()=>{
    alert("Has marcado que quieres asistir a este evento");
})

rechazar.addEventListener("click", ()=>{
    alert("Has marcado que rechazas asistir a este evento");
})
