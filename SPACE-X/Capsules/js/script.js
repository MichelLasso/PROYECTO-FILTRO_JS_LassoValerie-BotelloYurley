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
                        if(valor==6){
                                document.getElementById("tittle").innerHTML=`
                                <h1 id="titu">${daticos[5].type}</h1>
                                `
                                document.getElementById("text").innerHTML=`
                                        <h1 id="textico">${daticos[5].last_update}</h1>
                                `
                                document.getElementById("idecita").innerHTML=`
                                        <h1 id="idd">${daticos[5].id}</h1>
                                `
                                document.getElementById("star1").innerHTML=`
                                        <h1>${daticos[5].land_landings}</h1>
                                `
                                document.getElementById("star2").innerHTML=`
                                        <h1>${daticos[5].reuse_count}</h1>
                                `
                                document.getElementById("star3").innerHTML=`
                                        <h1 >${daticos[5].water_landings}</h1>
                                `
                                document.getElementById("star4").innerHTML=`
                                        <h1>${daticos[5].serial}</h1>
                                `
                                document.getElementById("star5").innerHTML=`
                                        <h1>${daticos[5].status}</h1>
                                `
                                document.getElementById("lauchess").innerHTML=`
                                        <h1 id="launchess">${daticos[5].launches[0]}</h1>
                                `
                        }
                        if(valor==7){
                                document.getElementById("tittle").innerHTML=`
                                <h1 id="titu">${daticos[6].type}</h1>
                                `
                                document.getElementById("text").innerHTML=`
                                        <h1 id="textico">${daticos[6].last_update}</h1>
                                `
                                document.getElementById("idecita").innerHTML=`
                                        <h1 id="idd">${daticos[6].id}</h1>
                                `
                                document.getElementById("star1").innerHTML=`
                                        <h1>${daticos[6].land_landings}</h1>
                                `
                                document.getElementById("star2").innerHTML=`
                                        <h1>${daticos[6].reuse_count}</h1>
                                `
                                document.getElementById("star3").innerHTML=`
                                        <h1 >${daticos[6].water_landings}</h1>
                                `
                                document.getElementById("star4").innerHTML=`
                                        <h1>${daticos[6].serial}</h1>
                                `
                                document.getElementById("star5").innerHTML=`
                                        <h1>${daticos[6].status}</h1>
                                `
                                document.getElementById("lauchess").innerHTML=`
                                        <h1 id="launchess">${daticos[6].launches[0]}</h1>
                                `
                        }
                        if(valor==8){
                                document.getElementById("tittle").innerHTML=`
                                <h1 id="titu">${daticos[7].type}</h1>
                                `
                                document.getElementById("text").innerHTML=`
                                        <h1 id="textico">${daticos[7].last_update}</h1>
                                `
                                document.getElementById("idecita").innerHTML=`
                                        <h1 id="idd">${daticos[7].id}</h1>
                                `
                                document.getElementById("star1").innerHTML=`
                                        <h1>${daticos[7].land_landings}</h1>
                                `
                                document.getElementById("star2").innerHTML=`
                                        <h1>${daticos[7].reuse_count}</h1>
                                `
                                document.getElementById("star3").innerHTML=`
                                        <h1 >${daticos[7].water_landings}</h1>
                                `
                                document.getElementById("star4").innerHTML=`
                                        <h1>${daticos[7].serial}</h1>
                                `
                                document.getElementById("star5").innerHTML=`
                                        <h1>${daticos[7].status}</h1>
                                `
                                document.getElementById("lauchess").innerHTML=`
                                        <h1 id="launchess">${daticos[7].launches[0]}</h1>
                                `
                        }
                        if(valor==9){
                                document.getElementById("tittle").innerHTML=`
                                <h1 id="titu">${daticos[8].type}</h1>
                                `
                                document.getElementById("text").innerHTML=`
                                        <h1 id="textico">${daticos[8].last_update}</h1>
                                `
                                document.getElementById("idecita").innerHTML=`
                                        <h1 id="idd">${daticos[8].id}</h1>
                                `
                                document.getElementById("star1").innerHTML=`
                                        <h1>${daticos[8].land_landings}</h1>
                                `
                                document.getElementById("star2").innerHTML=`
                                        <h1>${daticos[8].reuse_count}</h1>
                                `
                                document.getElementById("star3").innerHTML=`
                                        <h1 >${daticos[8].water_landings}</h1>
                                `
                                document.getElementById("star4").innerHTML=`
                                        <h1>${daticos[8].serial}</h1>
                                `
                                document.getElementById("star5").innerHTML=`
                                        <h1>${daticos[8].status}</h1>
                                `
                                document.getElementById("lauchess").innerHTML=`
                                        <h1 id="launchess">${daticos[8].launches[0]}</h1>
                                `
                        }
                        if(valor==10){
                                document.getElementById("tittle").innerHTML=`
                                <h1 id="titu">${daticos[9].type}</h1>
                                `
                                document.getElementById("text").innerHTML=`
                                        <h1 id="textico">${daticos[9].last_update}</h1>
                                `
                                document.getElementById("idecita").innerHTML=`
                                        <h1 id="idd">${daticos[9].id}</h1>
                                `
                                document.getElementById("star1").innerHTML=`
                                        <h1>${daticos[9].land_landings}</h1>
                                `
                                document.getElementById("star2").innerHTML=`
                                        <h1>${daticos[9].reuse_count}</h1>
                                `
                                document.getElementById("star3").innerHTML=`
                                        <h1 >${daticos[9].water_landings}</h1>
                                `
                                document.getElementById("star4").innerHTML=`
                                        <h1>${daticos[9].serial}</h1>
                                `
                                document.getElementById("star5").innerHTML=`
                                        <h1>${daticos[9].status}</h1>
                                `
                                document.getElementById("lauchess").innerHTML=`
                                        <h1 id="launchess">${daticos[9].launches[0]}</h1>
                                `
                        }
                        if(valor==11){
                                document.getElementById("tittle").innerHTML=`
                                <h1 id="titu">${daticos[10].type}</h1>
                                `
                                document.getElementById("text").innerHTML=`
                                        <h1 id="textico">${daticos[10].last_update}</h1>
                                `
                                document.getElementById("idecita").innerHTML=`
                                        <h1 id="idd">${daticos[10].id}</h1>
                                `
                                document.getElementById("star1").innerHTML=`
                                        <h1>${daticos[10].land_landings}</h1>
                                `
                                document.getElementById("star2").innerHTML=`
                                        <h1>${daticos[10].reuse_count}</h1>
                                `
                                document.getElementById("star3").innerHTML=`
                                        <h1 >${daticos[10].water_landings}</h1>
                                `
                                document.getElementById("star4").innerHTML=`
                                        <h1>${daticos[10].serial}</h1>
                                `
                                document.getElementById("star5").innerHTML=`
                                        <h1>${daticos[10].status}</h1>
                                `
                                document.getElementById("lauchess").innerHTML=`
                                        <h1 id="launchess">${daticos[10].launches[0]}</h1>
                                `
                        }
                        if(valor==12){
                                document.getElementById("tittle").innerHTML=`
                                        <h1 id="titu">${daticos[11].type}</h1>
                                `
                                document.getElementById("text").innerHTML=`
                                        <h1 id="textico">${daticos[11].last_update}</h1>
                                `
                                document.getElementById("idecita").innerHTML=`
                                        <h1 id="idd">${daticos[11].id}</h1>
                                `
                                document.getElementById("star1").innerHTML=`
                                        <h1>${daticos[11].land_landings}</h1>
                                `
                                document.getElementById("star2").innerHTML=`
                                        <h1>${daticos[11].reuse_count}</h1>
                                `
                                document.getElementById("star3").innerHTML=`
                                        <h1 >${daticos[11].water_landings}</h1>
                                `
                                document.getElementById("star4").innerHTML=`
                                        <h1>${daticos[11].serial}</h1>
                                `
                                document.getElementById("star5").innerHTML=`
                                        <h1>${daticos[11].status}</h1>
                                `
                                document.getElementById("lauchess").innerHTML=`
                                        <h1 id="launchess">${daticos[11].launches[0]}</h1>
                                `
                               
                        }
                        if(valor==13){
                                document.getElementById("tittle").innerHTML=`
                                        <h1 id="titu">${daticos[12].type}</h1>
                                `
                                document.getElementById("text").innerHTML=`
                                        <h1 id="textico">${daticos[12].last_update}</h1>
                                `
                                document.getElementById("idecita").innerHTML=`
                                        <h1 id="idd">${daticos[12].id}</h1>
                                `
                                document.getElementById("star1").innerHTML=`
                                        <h1>${daticos[12].land_landings}</h1>
                                `
                                document.getElementById("star2").innerHTML=`
                                        <h1>${daticos[12].reuse_count}</h1>
                                `
                                document.getElementById("star3").innerHTML=`
                                        <h1 >${daticos[12].water_landings}</h1>
                                `
                                document.getElementById("star4").innerHTML=`
                                        <h1>${daticos[12].serial}</h1>
                                `
                                document.getElementById("star5").innerHTML=`
                                        <h1>${daticos[12].status}</h1>
                                `
                                document.getElementById("lauchess").innerHTML=`
                                        <h1 id="launchess">${daticos[12].launches[0]}</h1>
                                `
                               
                        }
                        if(valor==14){
                                document.getElementById("tittle").innerHTML=`
                                        <h1 id="titu">${daticos[13].type}</h1>
                                `
                                document.getElementById("text").innerHTML=`
                                        <h1 id="textico">${daticos[13].last_update}</h1>
                                `
                                document.getElementById("idecita").innerHTML=`
                                        <h1 id="idd">${daticos[13].id}</h1>
                                `
                                document.getElementById("star1").innerHTML=`
                                        <h1>${daticos[13].land_landings}</h1>
                                `
                                document.getElementById("star2").innerHTML=`
                                        <h1>${daticos[13].reuse_count}</h1>
                                `
                                document.getElementById("star3").innerHTML=`
                                        <h1 >${daticos[13].water_landings}</h1>
                                `
                                document.getElementById("star4").innerHTML=`
                                        <h1>${daticos[13].serial}</h1>
                                `
                                document.getElementById("star5").innerHTML=`
                                        <h1>${daticos[13].status}</h1>
                                `
                                document.getElementById("lauchess").innerHTML=`
                                        <h1 id="launchess">${daticos[13].launches[0]}</h1>
                                `
                               
                        }
                        if(valor==15){
                                document.getElementById("tittle").innerHTML=`
                                        <h1 id="titu">${daticos[14].type}</h1>
                                `
                                document.getElementById("text").innerHTML=`
                                        <h1 id="textico">${daticos[14].last_update}</h1>
                                `
                                document.getElementById("idecita").innerHTML=`
                                        <h1 id="idd">${daticos[14].id}</h1>
                                `
                                document.getElementById("star1").innerHTML=`
                                        <h1>${daticos[14].land_landings}</h1>
                                `
                                document.getElementById("star2").innerHTML=`
                                        <h1>${daticos[14].reuse_count}</h1>
                                `
                                document.getElementById("star3").innerHTML=`
                                        <h1 >${daticos[14].water_landings}</h1>
                                `
                                document.getElementById("star4").innerHTML=`
                                        <h1>${daticos[14].serial}</h1>
                                `
                                document.getElementById("star5").innerHTML=`
                                        <h1>${daticos[14].status}</h1>
                                `
                                document.getElementById("lauchess").innerHTML=`
                                        <h1 id="launchess">${daticos[14].launches[0]}</h1>
                                `
                               
                        }
                        if(valor==16){
                                document.getElementById("tittle").innerHTML=`
                                <h1 id="titu">${daticos[15].type}</h1>
                                `
                                document.getElementById("text").innerHTML=`
                                        <h1 id="textico">${daticos[15].last_update}</h1>
                                `
                                document.getElementById("idecita").innerHTML=`
                                        <h1 id="idd">${daticos[15].id}</h1>
                                `
                                document.getElementById("star1").innerHTML=`
                                        <h1>${daticos[15].land_landings}</h1>
                                `
                                document.getElementById("star2").innerHTML=`
                                        <h1>${daticos[15].reuse_count}</h1>
                                `
                                document.getElementById("star3").innerHTML=`
                                        <h1 >${daticos[15].water_landings}</h1>
                                `
                                document.getElementById("star4").innerHTML=`
                                        <h1>${daticos[15].serial}</h1>
                                `
                                document.getElementById("star5").innerHTML=`
                                        <h1>${daticos[15].status}</h1>
                                `
                                document.getElementById("lauchess").innerHTML=`
                                        <h1 id="launchess">${daticos[15].launches[0]}</h1>
                                `
                        }
                        if(valor==17){
                                document.getElementById("tittle").innerHTML=`
                                <h1 id="titu">${daticos[16].type}</h1>
                                `
                                document.getElementById("text").innerHTML=`
                                        <h1 id="textico">${daticos[16].last_update}</h1>
                                `
                                document.getElementById("idecita").innerHTML=`
                                        <h1 id="idd">${daticos[16].id}</h1>
                                `
                                document.getElementById("star1").innerHTML=`
                                        <h1>${daticos[16].land_landings}</h1>
                                `
                                document.getElementById("star2").innerHTML=`
                                        <h1>${daticos[16].reuse_count}</h1>
                                `
                                document.getElementById("star3").innerHTML=`
                                        <h1 >${daticos[16].water_landings}</h1>
                                `
                                document.getElementById("star4").innerHTML=`
                                        <h1>${daticos[16].serial}</h1>
                                `
                                document.getElementById("star5").innerHTML=`
                                        <h1>${daticos[16].status}</h1>
                                `
                                document.getElementById("lauchess").innerHTML=`
                                        <h1 id="launchess">${daticos[16].launches[0]}</h1>
                                `
                        }
                        if(valor==18){
                                document.getElementById("tittle").innerHTML=`
                                <h1 id="titu">${daticos[17].type}</h1>
                                `
                                document.getElementById("text").innerHTML=`
                                        <h1 id="textico">${daticos[17].last_update}</h1>
                                `
                                document.getElementById("idecita").innerHTML=`
                                        <h1 id="idd">${daticos[17].id}</h1>
                                `
                                document.getElementById("star1").innerHTML=`
                                        <h1>${daticos[17].land_landings}</h1>
                                `
                                document.getElementById("star2").innerHTML=`
                                        <h1>${daticos[17].reuse_count}</h1>
                                `
                                document.getElementById("star3").innerHTML=`
                                        <h1 >${daticos[17].water_landings}</h1>
                                `
                                document.getElementById("star4").innerHTML=`
                                        <h1>${daticos[17].serial}</h1>
                                `
                                document.getElementById("star5").innerHTML=`
                                        <h1>${daticos[17].status}</h1>
                                `
                                document.getElementById("lauchess").innerHTML=`
                                        <h1 id="launchess">${daticos[17].launches[0]}</h1>
                                `
                        }
                        if(valor==19){
                                document.getElementById("tittle").innerHTML=`
                                <h1 id="titu">${daticos[18].type}</h1>
                                `
                                document.getElementById("text").innerHTML=`
                                        <h1 id="textico">${daticos[18].last_update}</h1>
                                `
                                document.getElementById("idecita").innerHTML=`
                                        <h1 id="idd">${daticos[18].id}</h1>
                                `
                                document.getElementById("star1").innerHTML=`
                                        <h1>${daticos[18].land_landings}</h1>
                                `
                                document.getElementById("star2").innerHTML=`
                                        <h1>${daticos[18].reuse_count}</h1>
                                `
                                document.getElementById("star3").innerHTML=`
                                        <h1 >${daticos[18].water_landings}</h1>
                                `
                                document.getElementById("star4").innerHTML=`
                                        <h1>${daticos[18].serial}</h1>
                                `
                                document.getElementById("star5").innerHTML=`
                                        <h1>${daticos[18].status}</h1>
                                `
                                document.getElementById("lauchess").innerHTML=`
                                        <h1 id="launchess">${daticos[18].launches[0]}</h1>
                                `
                        }
                        if(valor==20){
                                document.getElementById("tittle").innerHTML=`
                                <h1 id="titu">${daticos[19].type}</h1>
                                `
                                document.getElementById("text").innerHTML=`
                                        <h1 id="textico">${daticos[19].last_update}</h1>
                                `
                                document.getElementById("idecita").innerHTML=`
                                        <h1 id="idd">${daticos[19].id}</h1>
                                `
                                document.getElementById("star1").innerHTML=`
                                        <h1>${daticos[19].land_landings}</h1>
                                `
                                document.getElementById("star2").innerHTML=`
                                        <h1>${daticos[19].reuse_count}</h1>
                                `
                                document.getElementById("star3").innerHTML=`
                                        <h1 >${daticos[19].water_landings}</h1>
                                `
                                document.getElementById("star4").innerHTML=`
                                        <h1>${daticos[19].serial}</h1>
                                `
                                document.getElementById("star5").innerHTML=`
                                        <h1>${daticos[19].status}</h1>
                                `
                                document.getElementById("lauchess").innerHTML=`
                                        <h1 id="launchess">${daticos[19].launches[0]}</h1>
                                `
                        }
                        if(valor==21){
                                document.getElementById("tittle").innerHTML=`
                                <h1 id="titu">${daticos[20].type}</h1>
                                `
                                document.getElementById("text").innerHTML=`
                                        <h1 id="textico">${daticos[20].last_update}</h1>
                                `
                                document.getElementById("idecita").innerHTML=`
                                        <h1 id="idd">${daticos[20].id}</h1>
                                `
                                document.getElementById("star1").innerHTML=`
                                        <h1>${daticos[20].land_landings}</h1>
                                `
                                document.getElementById("star2").innerHTML=`
                                        <h1>${daticos[20].reuse_count}</h1>
                                `
                                document.getElementById("star3").innerHTML=`
                                        <h1 >${daticos[20].water_landings}</h1>
                                `
                                document.getElementById("star4").innerHTML=`
                                        <h1>${daticos[20].serial}</h1>
                                `
                                document.getElementById("star5").innerHTML=`
                                        <h1>${daticos[20].status}</h1>
                                `
                                document.getElementById("lauchess").innerHTML=`
                                        <h1 id="launchess">${daticos[20].launches[0]}</h1>
                                `
                        }
                        if(valor==22){
                                document.getElementById("tittle").innerHTML=`
                                <h1 id="titu">${daticos[21].type}</h1>
                                `
                                document.getElementById("text").innerHTML=`
                                        <h1 id="textico">${daticos[21].last_update}</h1>
                                `
                                document.getElementById("idecita").innerHTML=`
                                        <h1 id="idd">${daticos[21].id}</h1>
                                `
                                document.getElementById("star1").innerHTML=`
                                        <h1>${daticos[21].land_landings}</h1>
                                `
                                document.getElementById("star2").innerHTML=`
                                        <h1>${daticos[21].reuse_count}</h1>
                                `
                                document.getElementById("star3").innerHTML=`
                                        <h1 >${daticos[21].water_landings}</h1>
                                `
                                document.getElementById("star4").innerHTML=`
                                        <h1>${daticos[21].serial}</h1>
                                `
                                document.getElementById("star5").innerHTML=`
                                        <h1>${daticos[21].status}</h1>
                                `
                                document.getElementById("lauchess").innerHTML=`
                                        <h1 id="launchess">${daticos[21].launches[0]}</h1>
                                `
                        }
                        if(valor==23){
                                document.getElementById("tittle").innerHTML=`
                                <h1 id="titu">${daticos[7].type}</h1>
                                `
                                document.getElementById("text").innerHTML=`
                                        <h1 id="textico">Not information</h1>
                                `
                                document.getElementById("idecita").innerHTML=`
                                        <h1 id="idd">${daticos[22].id}</h1>
                                `
                                document.getElementById("star1").innerHTML=`
                                        <h1>${daticos[22].land_landings}</h1>
                                `
                                document.getElementById("star2").innerHTML=`
                                        <h1>${daticos[22].reuse_count}</h1>
                                `
                                document.getElementById("star3").innerHTML=`
                                        <h1 >${daticos[22].water_landings}</h1>
                                `
                                document.getElementById("star4").innerHTML=`
                                        <h1>${daticos[22].serial}</h1>
                                `
                                document.getElementById("star5").innerHTML=`
                                        <h1>${daticos[22].status}</h1>
                                `
                                document.getElementById("lauchess").innerHTML=`
                                        <h1 id="launchess">${daticos[22].launches[0]}</h1>
                                `
                        }
                        if(valor==24){
                                document.getElementById("tittle").innerHTML=`
                                <h1 id="titu">${daticos[23].type}</h1>
                                `
                                document.getElementById("text").innerHTML=`
                                        <h1 id="textico">Not information</h1>
                                `
                                document.getElementById("idecita").innerHTML=`
                                        <h1 id="idd">${daticos[23].id}</h1>
                                `
                                document.getElementById("star1").innerHTML=`
                                        <h1>${daticos[23].land_landings}</h1>
                                `
                                document.getElementById("star2").innerHTML=`
                                        <h1>${daticos[23].reuse_count}</h1>
                                `
                                document.getElementById("star3").innerHTML=`
                                        <h1 >${daticos[23].water_landings}</h1>
                                `
                                document.getElementById("star4").innerHTML=`
                                        <h1>${daticos[23].serial}</h1>
                                `
                                document.getElementById("star5").innerHTML=`
                                        <h1>${daticos[23].status}</h1>
                                `
                                document.getElementById("lauchess").innerHTML=`
                                        <h1 id="launchess">Not information</h1>
                                `
                        }
                        if(valor==25){
                                document.getElementById("tittle").innerHTML=`
                                <h1 id="titu">${daticos[24].type}</h1>
                                `
                                document.getElementById("text").innerHTML=`
                                        <h1 id="textico">Not information</h1>
                                `
                                document.getElementById("idecita").innerHTML=`
                                        <h1 id="idd">${daticos[24].id}</h1>
                                `
                                document.getElementById("star1").innerHTML=`
                                        <h1>${daticos[24].land_landings}</h1>
                                `
                                document.getElementById("star2").innerHTML=`
                                        <h1>${daticos[24].reuse_count}</h1>
                                `
                                document.getElementById("star3").innerHTML=`
                                        <h1 >${daticos[24].water_landings}</h1>
                                `
                                document.getElementById("star4").innerHTML=`
                                        <h1>${daticos[24].serial}</h1>
                                `
                                document.getElementById("star5").innerHTML=`
                                        <h1>${daticos[24].status}</h1>
                                `
                                document.getElementById("lauchess").innerHTML=`
                                        <h1 id="launchess">${daticos[24].launches[0]}</h1>
                                `
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
                let botonesS=document.getElementById("botones20-25");
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
presionar2()