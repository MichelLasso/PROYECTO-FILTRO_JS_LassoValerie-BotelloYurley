function mostrar(){//mostrar  información al inicio de la pAgina
    fetch("https://api.spacexdata.com/v4/history")
    .then(res=> res.json())
    .then(historyDatos => {

        console.log(historyDatos);

        const date= historyDatos[0].event_date_utc
        const newDate= new Date(date)
        const dateArreglada = newDate.toLocaleString();
        console.log(dateArreglada);
        
        document.getElementById("datos").innerHTML =`
            <div id="name">${historyDatos[0].title}</div>
            <div id="details"><p id="namedetails"> Details</p> <div id="txtDetails">${historyDatos[0].details}</div></div>
            <div id="eventUtc">Event UTC <div id="txtEventUtc">${dateArreglada}</div></div>
            <div id="event">Event <div id="txtEvent">${historyDatos[0].event_date_unix}</div></div>
            <a href="${historyDatos[0].links.article}" class="links"><div id="article">Article</div></a>

        `
    })
}
mostrar()
document.getElementById("pasar-Pagina").addEventListener("click", fun11 )//creamos el evento click para la id "pasar-Pagina"
function fun11(event){//definimos en la funcion un arametro que conectaremos con la funcion dentro de ella para conectarlas
    fetch("https://api.spacexdata.com/v4/history")
    .then(res=>res.json())
    .then(historyDatos=>{
        
        var link= document.getElementsByClassName("link");
        let valor=1; //declaramos nuestra variable para guardar los values
        activelink(event)//definimos nuestra funcion
        function activelink(event){
            for( let i of link){
                i.classList.remove("active");//elimina el active de la clase
            }
            event.target.classList.add("active");//agrega el active a la clase
            valor=event.target.value;//trae el value del boton clickeado
            y=valor-1//le restamos uno al value del boton clikeado para obtener la posición
            
            function reducir(){//creamos una funcion para traer la info de la api con la anterior variable
                console.log(historyDatos[y].name)
                const date= historyDatos[y].event_date_utc
                const newDate= new Date(date)//lo utilzamo para modificar la fecha en estilo estandar
                const dateArreglada = newDate.toLocaleString();
                console.log(dateArreglada);
                //obtenemos la información de la api
                document.getElementById("datos").innerHTML =`
                <div id="name">${historyDatos[y].title}</div>
                <div id="details">Details <div id="txtDetails">${historyDatos[y].details}</div></div>
                <div id="eventUtc">Event UTC <div id="txtEventUtc">${dateArreglada}</div></div>
                <div id="event">Event <div id="txtEvent">${historyDatos[y].event_date_unix}</div></div>
                <a href="${historyDatos[y].links}" class="links"><div id="article">Article</div></a>`

            }
            if(valor==1){
                mostrar()// llamamos la función anterior y asi con todos los demas
            }
            if(valor==2){
                reducir()
            }
            if(valor==3){
                reducir()
            }
            if(valor==4){
                reducir()  
            }
            if(valor==5){
                reducir() 
            }
            if(valor==6){
                reducir()
            }
            if(valor==7){
                reducir() 
            }
            if(valor==8){
                reducir()
            }
            if(valor==9){
                reducir()   
            } 
            if(valor==10){
                reducir()  
            }
            if(valor==11){
                reducir() 
            }
            if(valor==12){
                reducir()  
            }
            if(valor==13){
                reducir()
            }
            if(valor==14){
                reducir()  
            }
            if(valor==15){
                reducir()
                
            }
        }
    })
}
//función para crear el avances en los botones a lo sigientes.
function presionar1(){
         
    let dos=document.getElementById("dos");
    dos.addEventListener("click",masbotones)
    function masbotones(){
        let botonesP=document.getElementById("botones1-5");
        botonesP.style.display="none"
        let botonesbtn1=document.getElementById("uno");
        botonesbtn1.style.display="none" 
        let botonesbt2=document.getElementById("dos");
        botonesbt2.style.display="none" 
        let botonesS=document.getElementById("botones6-10");
        botonesS.style.display="flex" 
        let botonesbtn12=document.getElementById("unos");
        botonesbtn12.style.display="flex" 
        let botonesbt22=document.getElementById("doss");
        botonesbt22.style.display="flex" 
    }
    let dosi=document.getElementById("doss")
    dosi.addEventListener("click",masbotones1)
    function masbotones1(){
        let botonesP1=document.getElementById("botones6-10");
        botonesP1.style.display="none"
        let botonesbtn10=document.getElementById("unos");
        botonesbtn10.style.display="none" 
        let botonesbt20=document.getElementById("doss");
        botonesbt20.style.display="none" 
        let botonesS1=document.getElementById("botones11-15");
        botonesS1.style.display="flex" 
        let botonesbtn11=document.getElementById("unos1");
        botonesbtn11.style.display="flex" 
        let botonesbt221=document.getElementById("doss1");
        botonesbt221.style.display="flex" 
            
    }
    let dosit=document.getElementById("doss1")
    dosit.addEventListener("click",masbotones3)
    function masbotones3(){
        let botonesP1=document.getElementById("botones11-15");
        botonesP1.style.display="none"
        let botonesbtn10=document.getElementById("unos1");
        botonesbtn10.style.display="none" 
        let botonesbt20=document.getElementById("doss1");
        botonesbt20.style.display="none" 
        let botonesS1=document.getElementById("botones1-5");
        botonesS1.style.display="flex" 
        let botonesbtn11=document.getElementById("uno");
        botonesbtn11.style.display="flex" 
        let botonesbt221=document.getElementById("dos");
        botonesbt221.style.display="flex" 
            
    } 
}
presionar1()
//función para el retroceso de los botones.
function presionar2(){
     
    let uno=document.getElementById("uno");
    uno.addEventListener("click",masbotones)
    function masbotones(){
        let botonesP=document.getElementById("botones1-5");
        botonesP.style.display="none"
        let botonesbtn1=document.getElementById("uno");
        botonesbtn1.style.display="none" 
        let botonesbt2=document.getElementById("dos");
        botonesbt2.style.display="none" 
        let botonesS=document.getElementById("botones11-15");
        botonesS.style.display="flex" 
        let botonesbtn12=document.getElementById("unos1");
        botonesbtn12.style.display="flex" 
        let botonesbt22=document.getElementById("doss1");
        botonesbt22.style.display="flex" 
    }
    let uni=document.getElementById("unos")
    uni.addEventListener("click",masbotones1)
    function masbotones1(){
        let botonesP1=document.getElementById("botones6-10");
        botonesP1.style.display="none"
        let botonesbtn10=document.getElementById("unos");
        botonesbtn10.style.display="none" 
        let botonesbt20=document.getElementById("doss");
        botonesbt20.style.display="none" 
        let botonesS1=document.getElementById("botones1-5");
        botonesS1.style.display="flex" 
        let botonesbtn11=document.getElementById("uno");
        botonesbtn11.style.display="flex" 
        let botonesbt221=document.getElementById("dos");
        botonesbt221.style.display="flex" 
            
    }
    let unit=document.getElementById("unos1")
    unit.addEventListener("click",masbotones2)
    function masbotones2(){
        let botonesP11=document.getElementById("botones11-15");
        botonesP11.style.display="none"
        let botonesbtn100=document.getElementById("unos1");
        botonesbtn100.style.display="none" 
        let botonesbt200=document.getElementById("doss1");
        botonesbt200.style.display="none" 
        let botonesS11=document.getElementById("botones6-10");
        botonesS11.style.display="flex" 
        let botonesbtn112=document.getElementById("unos");
        botonesbtn112.style.display="flex" 
        let botonesbt2211=document.getElementById("doss");
        botonesbt2211.style.display="flex" 
            
    } 
}
presionar2()