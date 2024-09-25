function mostrar(){//funcion que me permite mostrar al inicio todos los datos de primer boton
    fetch("https://api.spacexdata.com/v4/capsules")
    .then(res=>res.json())
    .then(daticos=>{
        console.log(daticos)
        document.getElementById("tittle").innerHTML=`
                <h1 id="titu">${daticos[0].type}</h1>
        `
        document.getElementById("text").innerHTML=`
                <h1 id="textico">${daticos[0].last_update}</h1>
        `
        document.getElementById("idecita").innerHTML=`
                <h1 id="idd">${daticos[0].id}</h1>
        `
        document.getElementById("star1").innerHTML=`
                <h1>${daticos[0].land_landings}</h1>
        `
        document.getElementById("star2").innerHTML=`
                <h1>${daticos[0].reuse_count}</h1>
        `
        document.getElementById("star3").innerHTML=`
                <h1 >${daticos[0].water_landings}</h1>
        `
        document.getElementById("star4").innerHTML=`
                <h1>${daticos[0].serial}</h1>
        `
        document.getElementById("star5").innerHTML=`
                <h1>${daticos[0].status}</h1>
        `
        document.getElementById("lauchess").innerHTML=`
                <h1 id="launchess">${daticos[0].launches}</h1>
        `
        
        })
}
mostrar()         
document.getElementById("pasar-Pagina").addEventListener("click", fun11)//creamos el evento click para la id "pasar-Pagina"
function fun11(event){//definimos en la funcion un arametro que conectaremos con la funcion dentro de ella para conectarlas
        fetch("https://api.spacexdata.com/v4/capsules")
        .then(res=>res.json())
        .then(daticos=>{
          
                var link= document.getElementsByClassName("link");//obtenemos la clase link y la almacenamos en una variable
                let valor=1;
                activelink(event) //definimos nuestra funcion
                function activelink(event){// la declaramos 
                        for( let i of link){ //realizamos un for para recorrer a variable link
                                i.classList.remove("active"); // la clase que contega junto a la clase link active se le eliminara
                        }
                        event.target.classList.add("active");//luego llamando nuestro anterior parametro para que nos retorne "active" al boton clickeado
                        valor=event.target.value;//esto nos permite obtener el value de cada boton
                        let x=valor-1//definimos una variable en este caso "x", y al valor del boton le restamos 1
                        function reducir(){//con lo anterior creamos una nueva funcion que tendra el contenido de la api a utilizar para asi acceder a cada uno segun el boton que da click y reducir código
                                document.getElementById("tittle").innerHTML=`
                                        <h1 id="titu">${daticos[x].type}</h1>
                                `
                                document.getElementById("text").innerHTML=`
                                        <h1 id="textico">${daticos[x].last_update}</h1>
                                `
                                document.getElementById("idecita").innerHTML=`
                                        <h1 id="idd">${daticos[x].id}</h1>
                                `
                                document.getElementById("star1").innerHTML=`
                                        <h1>${daticos[x].land_landings}</h1>
                                `
                                document.getElementById("star2").innerHTML=`
                                        <h1>${daticos[x].reuse_count}</h1>
                                `
                                document.getElementById("star3").innerHTML=`
                                        <h1 >${daticos[x].water_landings}</h1>
                                `
                                document.getElementById("star4").innerHTML=`
                                        <h1>${daticos[x].serial}</h1>
                                `
                                document.getElementById("star5").innerHTML=`
                                        <h1>${daticos[x].status}</h1>
                                `
                                document.getElementById("lauchess").innerHTML=`
                                        <h1 id="launchess">${daticos[x].launches[0]}</h1>
                                `
                        }
                        if(valor==1){
                                reducir()//función anterior 
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
                        if(valor==16){
                                reducir()
                        }
                        if(valor==17){
                                reducir()
                        }
                        if(valor==18){
                                reducir()
                        }
                        if(valor==19){
                                reducir()
                        }
                        if(valor==20){
                                reducir()
                        }
                        if(valor==21){
                                reducir()
                        }
                        if(valor==22){
                                reducir()
                        }
                        if(valor==23){ // en los 3 ultimos casos obtamos por poner la información de una aqui ya que alguno espacios no tienen información entonces para poder modiificar.
                                document.getElementById("tittle").innerHTML=`
                                        <h1 id="titu">${daticos[x].type}</h1>
                                `
                                document.getElementById("text").innerHTML=`
                                        <h1 id="textico">Not information</h1>
                                `
                                document.getElementById("idecita").innerHTML=`
                                        <h1 id="idd">${daticos[x].id}</h1>
                                `
                                document.getElementById("star1").innerHTML=`
                                        <h1>${daticos[x].land_landings}</h1>
                                `
                                document.getElementById("star2").innerHTML=`
                                        <h1>${daticos[x].reuse_count}</h1>
                                `
                                document.getElementById("star3").innerHTML=`
                                        <h1 >${daticos[x].water_landings}</h1>
                                `
                                document.getElementById("star4").innerHTML=`
                                        <h1>${daticos[x].serial}</h1>
                                `
                                document.getElementById("star5").innerHTML=`
                                        <h1>${daticos[x].status}</h1>
                                `
                                document.getElementById("lauchess").innerHTML=`
                                        <h1 id="launchess">${daticos[x].launches[0]}</h1>
                                `
                        }
                        if(valor==24){
                                document.getElementById("tittle").innerHTML=`
                                        <h1 id="titu">${daticos[x].type}</h1>
                                `
                                document.getElementById("text").innerHTML=`
                                        <h1 id="textico">Not information</h1>
                                `
                                document.getElementById("idecita").innerHTML=`
                                        <h1 id="idd">${daticos[x].id}</h1>
                                `
                                document.getElementById("star1").innerHTML=`
                                        <h1>${daticos[x].land_landings}</h1>
                                `
                                document.getElementById("star2").innerHTML=`
                                        <h1>${daticos[x].reuse_count}</h1>
                                `
                                document.getElementById("star3").innerHTML=`
                                        <h1 >${daticos[x].water_landings}</h1>
                                `
                                document.getElementById("star4").innerHTML=`
                                        <h1>${daticos[x].serial}</h1>
                                `
                                document.getElementById("star5").innerHTML=`
                                        <h1>${daticos[x].status}</h1>
                                `
                                document.getElementById("lauchess").innerHTML=`
                                        <h1 id="launchess">Not information</h1>
                                `
                        }
                        if(valor==25){
                                document.getElementById("tittle").innerHTML=`
                                        <h1 id="titu">${daticos[x].type}</h1>
                                `
                                document.getElementById("text").innerHTML=`
                                        <h1 id="textico">Not information</h1>
                                `
                                document.getElementById("idecita").innerHTML=`
                                        <h1 id="idd">${daticos[x].id}</h1>
                                `
                                document.getElementById("star1").innerHTML=`
                                        <h1>${daticos[x].land_landings}</h1>
                                `
                                document.getElementById("star2").innerHTML=`
                                        <h1>${daticos[x].reuse_count}</h1>
                                `
                                document.getElementById("star3").innerHTML=`
                                        <h1 >${daticos[x].water_landings}</h1>
                                `
                                document.getElementById("star4").innerHTML=`
                                        <h1>${daticos[x].serial}</h1>
                                `
                                document.getElementById("star5").innerHTML=`
                                        <h1>${daticos[x].status}</h1>
                                `
                                document.getElementById("lauchess").innerHTML=`
                                        <h1 id="launchess">${daticos[x].launches[0]}</h1>
                                `
                        }

                       
                }
        })
}

//función para crear el avances en los botones a lo sigientes.
function presionar1(){
         
        let dos=document.getElementById("dos");//llamamos el boton a utilizar y lo almacenamos en una varible.
        dos.addEventListener("click",masbotones)//utilizamos la variable anterio para agregarle el evento click
        function masbotones(){//utilizamos una nueva funcion
                let botonesP=document.getElementById("botones1-5");//llamammos los botones del primer recuadro y le aplicamos display none
                botonesP.style.display="none"
                let botonesbtn1=document.getElementById("uno");
                botonesbtn1.style.display="none" 
                let botonesbt2=document.getElementById("dos");
                botonesbt2.style.display="none" 
                let botonesS=document.getElementById("botones6-10");//luego a los que queremos llamar un displey flex para mostrar y asi sucesivamente con cada uno
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
        dosit.addEventListener("click",masbotones2)
        function masbotones2(){
                let botonesP11=document.getElementById("botones11-15");
                botonesP11.style.display="none"
                let botonesbtn100=document.getElementById("unos1");
                botonesbtn100.style.display="none" 
                let botonesbt200=document.getElementById("doss1");
                botonesbt200.style.display="none" 
                let botonesS11=document.getElementById("botones16-20");
                botonesS11.style.display="flex" 
                let botonesbtn112=document.getElementById("unos11");
                botonesbtn112.style.display="flex" 
                let botonesbt2211=document.getElementById("doss11");
                botonesbt2211.style.display="flex" 
                
        }
        let dosito=document.getElementById("doss11")
        dosito.addEventListener("click",masbotones3)
        function masbotones3(){
                let botonesP00=document.getElementById("botones16-20");
                botonesP00.style.display="none"
                let botonesbtn101=document.getElementById("unos11");
                botonesbtn101.style.display="none" 
                let botonesbt201=document.getElementById("doss11");
                botonesbt201.style.display="none" 
                let botonesS112=document.getElementById("botones20-25");
                botonesS112.style.display="flex" 
                let botonesbtn111=document.getElementById("unos12");
                botonesbtn111.style.display="flex" 
                let botonesbt2221=document.getElementById("doss12");
                botonesbt2221.style.display="flex" 
                
        }
      
        
}
presionar1()//llamamos la función

//función para el retroceso de los botones.
function presionar2(){
         
        let uno=document.getElementById("uno");//llamamos el boton a utilizar y lo almacenamos en una varible.
        uno.addEventListener("click",masbotones)//utilizamos la variable anterio para agregarle el evento click
        function masbotones(){ //utilizamos una nueva funcion
                let botonesP=document.getElementById("botones1-5");//llamammos los botones del primer recuadro y le aplicamos display none
                botonesP.style.display="none"
                let botonesbtn1=document.getElementById("uno");
                botonesbtn1.style.display="none" 
                let botonesbt2=document.getElementById("dos");
                botonesbt2.style.display="none" 
                let botonesS=document.getElementById("botones20-25");//luego a los que queremos llamar un displey flex para mostrar y asi sucesivamente con cada uno
                botonesS.style.display="flex" 
                let botonesbtn12=document.getElementById("unos12");
                botonesbtn12.style.display="flex" 
                let botonesbt22=document.getElementById("doss12");
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
        let unito=document.getElementById("unos11")
        unito.addEventListener("click",masbotones3)
        function masbotones3(){
                let botonesP00=document.getElementById("botones16-20");
                botonesP00.style.display="none"
                let botonesbtn101=document.getElementById("unos11");
                botonesbtn101.style.display="none" 
                let botonesbt201=document.getElementById("doss11");
                botonesbt201.style.display="none" 
                let botonesS112=document.getElementById("botones11-15");
                botonesS112.style.display="flex" 
                let botonesbtn111=document.getElementById("unos1");
                botonesbtn111.style.display="flex" 
                let botonesbt2221=document.getElementById("doss1");
                botonesbt2221.style.display="flex" 
                
        }
        let unitos=document.getElementById("unos12")
        unitos.addEventListener("click",masbotones4)
        function masbotones4(){
                let botonesP00=document.getElementById("botones20-25");
                botonesP00.style.display="none"
                let botonesbtn101=document.getElementById("unos12");
                botonesbtn101.style.display="none" 
                let botonesbt201=document.getElementById("doss12");
                botonesbt201.style.display="none" 
                let botonesS112=document.getElementById("botones16-20");
                botonesS112.style.display="flex" 
                let botonesbtn111=document.getElementById("unos11");
                botonesbtn111.style.display="flex" 
                let botonesbt2221=document.getElementById("doss11");
                botonesbt2221.style.display="flex" 
                
        }
      
        
}
presionar2()//llamamos la función