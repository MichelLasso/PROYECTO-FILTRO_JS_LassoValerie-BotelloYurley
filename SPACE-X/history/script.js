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
            <a href="${historyDatos[0].links.article}" class="link"><div id="article">Article</div></a>

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
                <a href="${historyDatos[1].links}" class="link"><div id="article">Article</div></a>`
                
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
                <a href="${historyDatos[2].links}" class="link"><div id="article">Article</div></a>`
                
            }
        }
    })
}