function mostrar(){
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
            <div id="details">Details <div id="txtDetails">${historyDatos[0].details}</div></div>
            <div id="eventUtc">Event UTC <div id="txtEventUtc">${dateArreglada}</div></div>
            <div id="event">Event <div id="txtEvent">${historyDatos[0].event_date_unix}</div></div>
            <a href="${historyDatos[0].links.article}" class="links"><div id="article">Article</div></a>

        `
    })
}

mostrar()

document.getElementById("pasar-Pagina").addEventListener("click", fun11 )
function fun11(event){
    fetch("https://api.spacexdata.com/v4/history")
    .then(res=>res.json())
    .then(historyDatos=>{
        
        var link= document.getElementsByClassName("link");
        let valor=1;
        
        
        activelink(event)
        function activelink(event){
            
            historyDatos.forEach(i => {
                console.log(i);

                for( let i of link){
                    i.classList.remove("active");
                }
                event.target.classList.add("active");
                valor=event.target.value;

                console.log(valor);
                
    
                /*if(i){
                    console.log("HIIII",historyDatos[i].name)
                
                    const date= historyDatos[valor].event_date_utc
                    const newDate= new Date(date)
                    const dateArreglada = newDate.toLocaleString();
                    
                    console.log(dateArreglada);

                    document.getElementById("datos").innerHTML =`
                    <div id="name">${historyDatos[valor].title}</div>
                    <div id="details">Details <div id="txtDetails">${historyDatos[i].details}</div></div>
                    <div id="eventUtc">Event UTC <div id="txtEventUtc">${dateArreglada}</div></div>
                    <div id="event">Event <div id="txtEvent">${historyDatos[valor].event_date_unix}</div></div>
                    <a href="${historyDatos[valor].links}" class="link"><div id="article">Article</div></a>`
                }*/
            });

            if(valor==1){
                mostrar()
            }
            if(valor==2){
                console.log(historyDatos[1].name)
                
                const date= historyDatos[1].event_date_utc
                const newDate= new Date(date)
                const dateArreglada = newDate.toLocaleString();
                
                console.log(dateArreglada);

                document.getElementById("datos").innerHTML =`
                <div id="name">${historyDatos[1].title}</div>
                <div id="details">Details <div id="txtDetails">${historyDatos[1].details}</div></div>
                <div id="eventUtc">Event UTC <div id="txtEventUtc">${dateArreglada}</div></div>
                <div id="event">Event <div id="txtEvent">${historyDatos[1].event_date_unix}</div></div>
                <a href="${historyDatos[1].links}" class="links"><div id="article">Article</div></a>`
                
            }
            if(valor==3){
                console.log(historyDatos[2].name)
                
                const date= historyDatos[2].event_date_utc
                const newDate= new Date(date)
                const dateArreglada = newDate.toLocaleString();
                
                console.log(dateArreglada);

                document.getElementById("datos").innerHTML =`
             
                <div id="name">${historyDatos[2].title}</div>
                <div id="details">Details <div id="txtDetails">${historyDatos[2].details}</div></div>
                <div id="eventUtc">Event UTC <div id="txtEventUtc">${dateArreglada}</div></div>
                <div id="event">Event <div id="txtEvent">${historyDatos[2].event_date_unix}</div></div>
                <a href="${historyDatos[2].links}" class="links"><div id="article">Article</div></a>`
                
            }
            if(valor==4){
                console.log(historyDatos[3].name)
                
                const date= historyDatos[3].event_date_utc
                const newDate= new Date(date)
                const dateArreglada = newDate.toLocaleString();
                
                console.log(dateArreglada);

                document.getElementById("datos").innerHTML =`
                <div id="name">${historyDatos[3].title}</div>
                <div id="details">Details <div id="txtDetails">${historyDatos[3].details}</div></div>
                <div id="eventUtc">Event UTC <div id="txtEventUtc">${dateArreglada}</div></div>
                <div id="event">Event <div id="txtEvent">${historyDatos[3].event_date_unix}</div></div>
                <a href="${historyDatos[3].links}" class="links"><div id="article">Article</div></a>`
                
            }
            if(valor==5){
                console.log(historyDatos[4].name)
                
                const date= historyDatos[4].event_date_utc
                const newDate= new Date(date)
                const dateArreglada = newDate.toLocaleString();
                
                console.log(dateArreglada);

                document.getElementById("datos").innerHTML =`
             
                <div id="name">${historyDatos[4].title}</div>
                <div id="details">Details <div id="txtDetails">${historyDatos[4].details}</div></div>
                <div id="eventUtc">Event UTC <div id="txtEventUtc">${dateArreglada}</div></div>
                <div id="event">Event <div id="txtEvent">${historyDatos[4].event_date_unix}</div></div>
                <a href="${historyDatos[4].links}" class="links"><div id="article">Article</div></a>`
                
            }
            if(valor==6){
                console.log(historyDatos[5].name)
                
                const date= historyDatos[5].event_date_utc
                const newDate= new Date(date)
                const dateArreglada = newDate.toLocaleString();
                
                console.log(dateArreglada);

                document.getElementById("datos").innerHTML =`
                <div id="name">${historyDatos[5].title}</div>
                <div id="details">Details <div id="txtDetails">${historyDatos[5].details}</div></div>
                <div id="eventUtc">Event UTC <div id="txtEventUtc">${dateArreglada}</div></div>
                <div id="event">Event <div id="txtEvent">${historyDatos[5].event_date_unix}</div></div>
                <a href="${historyDatos[5].links}" class="links"><div id="article">Article</div></a>`
                
            }
            if(valor==7){
                console.log(historyDatos[6].name)
                
                const date= historyDatos[6].event_date_utc
                const newDate= new Date(date)
                const dateArreglada = newDate.toLocaleString();
                
                console.log(dateArreglada);

                document.getElementById("datos").innerHTML =`
             
                <div id="name">${historyDatos[6].title}</div>
                <div id="details">Details <div id="txtDetails">${historyDatos[6].details}</div></div>
                <div id="eventUtc">Event UTC <div id="txtEventUtc">${dateArreglada}</div></div>
                <div id="event">Event <div id="txtEvent">${historyDatos[6].event_date_unix}</div></div>
                <a href="${historyDatos[6].links}" class="links"><div id="article">Article</div></a>`
                
            }
            if(valor==8){
                console.log(historyDatos[7].name)
                
                const date= historyDatos[7].event_date_utc
                const newDate= new Date(date)
                const dateArreglada = newDate.toLocaleString();
                
                console.log(dateArreglada);

                document.getElementById("datos").innerHTML =`
                <div id="name">${historyDatos[7].title}</div>
                <div id="details">Details <div id="txtDetails">${historyDatos[7].details}</div></div>
                <div id="eventUtc">Event UTC <div id="txtEventUtc">${dateArreglada}</div></div>
                <div id="event">Event <div id="txtEvent">${historyDatos[7].event_date_unix}</div></div>
                <a href="${historyDatos[7].links}" class="links"><div id="article">Article</div></a>`
                
            }
            if(valor==9){
                console.log(historyDatos[8].name)
                
                const date= historyDatos[8].event_date_utc
                const newDate= new Date(date)
                const dateArreglada = newDate.toLocaleString();
                
                console.log(dateArreglada);

                document.getElementById("datos").innerHTML =`
             
                <div id="name">${historyDatos[8].title}</div>
                <div id="details">Details <div id="txtDetails">${historyDatos[8].details}</div></div>
                <div id="eventUtc">Event UTC <div id="txtEventUtc">${dateArreglada}</div></div>
                <div id="event">Event <div id="txtEvent">${historyDatos[8].event_date_unix}</div></div>
                <a href="${historyDatos[8].links}" class="links"><div id="article">Article</div></a>`
                
            } if(valor==10){
                console.log(historyDatos[9].name)
                
                const date= historyDatos[9].event_date_utc
                const newDate= new Date(date)
                const dateArreglada = newDate.toLocaleString();
                
                console.log(dateArreglada);

                document.getElementById("datos").innerHTML =`
                <div id="name">${historyDatos[9].title}</div>
                <div id="details">Details <div id="txtDetails">${historyDatos[9].details}</div></div>
                <div id="eventUtc">Event UTC <div id="txtEventUtc">${dateArreglada}</div></div>
                <div id="event">Event <div id="txtEvent">${historyDatos[9].event_date_unix}</div></div>
                <a href="${historyDatos[9].links}" class="links"><div id="article">Article</div></a>`
                
            }
            if(valor==11){
                console.log(historyDatos[10].name)
                
                const date= historyDatos[10].event_date_utc
                const newDate= new Date(date)
                const dateArreglada = newDate.toLocaleString();
                
                console.log(dateArreglada);

                document.getElementById("datos").innerHTML =`
             
                <div id="name">${historyDatos[10].title}</div>
                <div id="details">Details <div id="txtDetails">${historyDatos[10].details}</div></div>
                <div id="eventUtc">Event UTC <div id="txtEventUtc">${dateArreglada}</div></div>
                <div id="event">Event <div id="txtEvent">${historyDatos[10].event_date_unix}</div></div>
                <a href="${historyDatos[10].links}" class="links"><div id="article">Article</div></a>`
                
            }
            if(valor==12){
                console.log(historyDatos[11].name)
                
                const date= historyDatos[11].event_date_utc
                const newDate= new Date(date)
                const dateArreglada = newDate.toLocaleString();
                
                console.log(dateArreglada);

                document.getElementById("datos").innerHTML =`
                <div id="name">${historyDatos[11].title}</div>
                <div id="details">Details <div id="txtDetails">${historyDatos[11].details}</div></div>
                <div id="eventUtc">Event UTC <div id="txtEventUtc">${dateArreglada}</div></div>
                <div id="event">Event <div id="txtEvent">${historyDatos[11].event_date_unix}</div></div>
                <a href="${historyDatos[11].links}" class="links"><div id="article">Article</div></a>`
                
            }
            if(valor==13){
                console.log(historyDatos[12].name)
                
                const date= historyDatos[12].event_date_utc
                const newDate= new Date(date)
                const dateArreglada = newDate.toLocaleString();
                
                console.log(dateArreglada);

                document.getElementById("datos").innerHTML =`
             
                <div id="name">${historyDatos[12].title}</div>
                <div id="details">Details <div id="txtDetails">${historyDatos[12].details}</div></div>
                <div id="eventUtc">Event UTC <div id="txtEventUtc">${dateArreglada}</div></div>
                <div id="event">Event <div id="txtEvent">${historyDatos[12].event_date_unix}</div></div>
                <a href="${historyDatos[12].links}" class="links"><div id="article">Article</div></a>`
                
            }
            if(valor==14){
                console.log(historyDatos[13].name)
                
                const date= historyDatos[13].event_date_utc
                const newDate= new Date(date)
                const dateArreglada = newDate.toLocaleString();
                
                console.log(dateArreglada);

                document.getElementById("datos").innerHTML =`
                <div id="name">${historyDatos[13].title}</div>
                <div id="details">Details <div id="txtDetails">${historyDatos[13].details}</div></div>
                <div id="eventUtc">Event UTC <div id="txtEventUtc">${dateArreglada}</div></div>
                <div id="event">Event <div id="txtEvent">${historyDatos[13].event_date_unix}</div></div>
                <a href="${historyDatos[13].links}" class="links"><div id="article">Article</div></a>`
                
            }
            if(valor==53){
                console.log(historyDatos[14].name)
                
                const date= historyDatos[14].event_date_utc
                const newDate= new Date(date)
                const dateArreglada = newDate.toLocaleString();
                
                console.log(dateArreglada);

                document.getElementById("datos").innerHTML =`
             
                <div id="name">${historyDatos[14].title}</div>
                <div id="details">Details <div id="txtDetails">${historyDatos[14].details}</div></div>
                <div id="eventUtc">Event UTC <div id="txtEventUtc">${dateArreglada}</div></div>
                <div id="event">Event <div id="txtEvent">${historyDatos[14].event_date_unix}</div></div>
                <a href="${historyDatos[14].links}" class="links"><div id="article">Article</div></a>`
                
            }
        }
    })
}
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