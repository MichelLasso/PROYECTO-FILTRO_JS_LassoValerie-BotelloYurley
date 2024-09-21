class botones extends HTMLElement{
        constructor(){
                super();
                let mibotoncito =this.attachShadow({mode:'open'})
                mibotoncito.innerHTML=`
                        <ul>
                                <li class="link active" value="1" >1</li>
                                <li class="link"  value="2" >2</li>
                                <li class="link"  value="3" id="3">3</li>
                                <li class="link" value="4" id="4">4</li>
                        </ul>
                `
        }
}
customElements.define('boton-page',botones);

function mostrar(){
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
document.getElementById("pasar-Pagina").addEventListener("click", fun11)
function fun11(event){
        fetch("https://api.spacexdata.com/v4/capsules")
        .then(res=>res.json())
        .then(daticos=>{
          
                var link= document.getElementsByClassName("link");
                let valor=1;
                activelink(event)
                function activelink(event){
                        for( let i of link){
                                i.classList.remove("active");
                        }
                        event.target.classList.add("active");
                        valor=event.target.value;
                        if(valor==1){
                                mostrar()
                        }
                        if(valor==2){
                                document.getElementById("tittle").innerHTML=`
                                        <h1 id="titu">${daticos[1].type}</h1>
                                `
                                document.getElementById("text").innerHTML=`
                                        <h1 id="textico">${daticos[1].last_update}</h1>
                                `
                                document.getElementById("idecita").innerHTML=`
                                        <h1 id="idd">${daticos[1].id}</h1>
                                `
                                document.getElementById("star1").innerHTML=`
                                        <h1>${daticos[1].land_landings}</h1>
                                `
                                document.getElementById("star2").innerHTML=`
                                        <h1>${daticos[1].reuse_count}</h1>
                                `
                                document.getElementById("star3").innerHTML=`
                                        <h1 >${daticos[1].water_landings}</h1>
                                `
                                document.getElementById("star4").innerHTML=`
                                        <h1>${daticos[1].serial}</h1>
                                `
                                document.getElementById("star5").innerHTML=`
                                        <h1>${daticos[1].status}</h1>
                                `
                                document.getElementById("lauchess").innerHTML=`
                                        <h1 id="launchess">${daticos[1].launches}</h1>
                                `
                               
                        }
                        if(valor==3){
                                document.getElementById("tittle").innerHTML=`
                                        <h1 id="titu">${daticos[2].type}</h1>
                                `
                                document.getElementById("text").innerHTML=`
                                        <h1 id="textico">${daticos[2].last_update}</h1>
                                `
                                document.getElementById("idecita").innerHTML=`
                                        <h1 id="idd">${daticos[2].id}</h1>
                                `
                                document.getElementById("star1").innerHTML=`
                                        <h1>${daticos[2].land_landings}</h1>
                                `
                                document.getElementById("star2").innerHTML=`
                                        <h1>${daticos[2].reuse_count}</h1>
                                `
                                document.getElementById("star3").innerHTML=`
                                        <h1 >${daticos[2].water_landings}</h1>
                                `
                                document.getElementById("star4").innerHTML=`
                                        <h1>${daticos[2].serial}</h1>
                                `
                                document.getElementById("star5").innerHTML=`
                                        <h1>${daticos[2].status}</h1>
                                `
                                document.getElementById("lauchess").innerHTML=`
                                        <h1 id="launchess">${daticos[2].launches}</h1>
                                `
                               
                        }
                        if(valor==4){
                                document.getElementById("tittle").innerHTML=`
                                        <h1 id="titu">${daticos[3].type}</h1>
                                `
                                document.getElementById("text").innerHTML=`
                                        <h1 id="textico">${daticos[3].last_update}</h1>
                                `
                                document.getElementById("idecita").innerHTML=`
                                        <h1 id="idd">${daticos[3].id}</h1>
                                `
                                document.getElementById("star1").innerHTML=`
                                        <h1>${daticos[3].land_landings}</h1>
                                `
                                document.getElementById("star2").innerHTML=`
                                        <h1>${daticos[3].reuse_count}</h1>
                                `
                                document.getElementById("star3").innerHTML=`
                                        <h1 >${daticos[3].water_landings}</h1>
                                `
                                document.getElementById("star4").innerHTML=`
                                        <h1>${daticos[3].serial}</h1>
                                `
                                document.getElementById("star5").innerHTML=`
                                        <h1>${daticos[3].status}</h1>
                                `
                                document.getElementById("lauchess").innerHTML=`
                                        <h1 id="launchess">${daticos[3].launches}</h1>
                                `
                               
                        }
                        if(valor==5){
                                document.getElementById("tittle").innerHTML=`
                                        <h1 id="titu">${daticos[4].type}</h1>
                                `
                                document.getElementById("text").innerHTML=`
                                        <h1 id="textico">${daticos[4].last_update}</h1>
                                `
                                document.getElementById("idecita").innerHTML=`
                                        <h1 id="idd">${daticos[4].id}</h1>
                                `
                                document.getElementById("star1").innerHTML=`
                                        <h1>${daticos[4].land_landings}</h1>
                                `
                                document.getElementById("star2").innerHTML=`
                                        <h1>${daticos[4].reuse_count}</h1>
                                `
                                document.getElementById("star3").innerHTML=`
                                        <h1 >${daticos[4].water_landings}</h1>
                                `
                                document.getElementById("star4").innerHTML=`
                                        <h1>${daticos[4].serial}</h1>
                                `
                                document.getElementById("star5").innerHTML=`
                                        <h1>${daticos[4].status}</h1>
                                `
                                document.getElementById("lauchess").innerHTML=`
                                        <h1 id="launchess">${daticos[4].launches}</h1>
                                `
                               
                        }
                }
        })
}
