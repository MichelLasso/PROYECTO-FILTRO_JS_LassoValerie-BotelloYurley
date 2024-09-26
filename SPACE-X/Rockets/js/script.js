function mostrar(){ //mostrar datos al principio de la página.
    fetch("https://api.spacexdata.com/v4/rockets")
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        document.getElementById("titulo").innerHTML=`
            ${data[0].name}
        `
        document.getElementById("info-D").innerHTML=`
            <h1><span id="span"> &#9733 Country</span><br>${data[0].country}</h1><br>
            <h1><span  id="span"> &#9733 Cost</span> <br>${data[0].cost_per_launch}</h1><br>
            <h1><span  id="span"> &#9733 First Flight</span><br> ${data[0].first_flight}</h1><br>
            <h1><span  id="span"> &#9733 Description<br></span> ${data[0].description}</h1><br>
            <h1><span  id="span"> &#9733 Wikipedia<span><br> <a id="enlace"href="${data[0].wikipedia}">${data[0].wikipedia}</a></h1>
        `
        document.getElementById("imagen").innerHTML=`
            <img id="fotosnaves" src="/SPACE-X/img/falcon1.webp" alt="">
        `
        document.getElementById("infocohete").innerHTML=`
            <h4><span  id="span1">Type</span> <br>${data[0].type}</h4><br>
            <h4><span  id="span1">Propellant1</span><br> ${data[0].engines.propellant_1}</h4><br>
            <h4><span  id="span1">Propellant2</span><br> ${data[0].engines.propellant_2}</h4><br>
            <h4><span  id="span1">Version</span><br> ${data[0].engines.version}</h4><br>
            <h4><span  id="span1">Layout</span><br>${data[0].engines.layout} </h4>
            <h4><span  id="span1">Number</span><br>${data[0].engines.number} </h4>
        `
        document.getElementById("Info-I").innerHTML=`
            <p id="info2">Height--22.25mts--73ft</p>
            <progress  value="${data[0].height.meters}" max="118"></progress>
            <p id="info2">Diameter--1.68mts--5.5ft</p>
            <progress value="${data[0].diameter.meters}" max="13"></progress>
            <p id="info2">Mass--30146kg--66460lb</p>
            <progress value="${data[0].mass.kg}" max="1420788"></progress>
            <p id="info2">Thrust Sea Level--420KN--94000lbf</p>
            <progress value="${data[0].first_stage.thrust_sea_level.lbf}" max="128000"></progress>
            <p id="info2">Thrust Vacuum--480KN--110000lbf</p>
            <progress value="${data[0].first_stage.thrust_vacuum.lbf}" max="138000"></progress>
            <p id="info2">Fuel Amount Tons--44.3</p>
            <progress value="${data[0].first_stage.fuel_amount_tons}" max="3300"></progress>
            <p id="info2">Thrust--31KN--7000lbf</p>
            <progress value="${data[0].second_stage.thrust.kN}" max="1957"></progress>
        `
        progress1()
      
    })
}
mostrar()

document.getElementById("pasar-Pagina").addEventListener("click", fun11)//se llama la id y se le agrega el evento de click
function fun11(event){//creamos la anterior función y agregamos un parametros que nos permitira conectar con la funcion active link
    fetch("https://api.spacexdata.com/v4/rockets")
    .then(res=>res.json())
    .then(data=>{
        var link= document.getElementsByClassName("link");
        let valor=1;
        
        activelink(event)//definimos la funcion
        function activelink(event){
            for( let i of link){//recorremos las clases link 
                i.classList.remove("active");//esto eliminara el active de la clase que ante fue clickeada
            }
            event.target.classList.add("active");//y aqui le agregara el active a la que se clikeo recientemente
            valor=event.target.value;//obtener el value de los botones
            let x=valor-1 //a ese value le restamos 1 para obtener las posiciones dependiendo del boton clickeado
            function bar_progress(){//creamos una nueva funcion donde recorreremos la info de la pregress bar circulares dependiendo cada posicion segun el boton
                fetch("https://api.spacexdata.com/v4/rockets")
                .then(res=>res.json())
                .then(data=>{
                    let progresscbar1=document.getElementsByClassName('progressc1')[0];
                    let blocken=document.getElementsByClassName('block');
                
                    for(var i = 1; i < 100; i ++){
                        progresscbar1.innerHTML+=`<div class="block"></div>
                        
                        `
                        blocken[i].style.transform="rotate("+3.6 * i +"deg)"
                        blocken[i].style.animationDelay=`${i/45}s`;
                
                    }
                    const circulo=document.querySelector('.circulo')
                    let target = +circulo.getAttribute('data-target');
                    let totalPH= data[x].success_rate_pct/100*36.0
                    target=totalPH;
                    for (let a = 0; a < target; a++) {
                        blocken[a].classList.add('target')
                    }
                    
                    let progresscbar22=document.getElementsByClassName('progressc2')[0];
                    let block22=document.getElementsByClassName('block2');
                
                    for(var r = 1; r < 100; r ++){
                        progresscbar22.innerHTML+=`<div class="block2"></div>`
                        block22[r].style.transform="rotate("+3.6 * r +"deg)"
                        block22[r].style.animationDelay=`${r/45}s`;
                
                    }
                    const circulo2=document.querySelector('.circulo2')
                    let target2 = +circulo2.getAttribute('data-target');
                    let totalPD=data[x].engines.isp.sea_level/100*3.6
                    target2=totalPD;
                    for (let l = 0; l < target2; l++) {
                        block22[l].classList.add('target2')
                        
                    }
                    console.log(target2);
                    
                    let progressc33=document.getElementsByClassName('progressc3')[0];
                    let block33=document.getElementsByClassName('block3');
                
                    for(var b = 1; b < 100; b ++){
                        progressc33.innerHTML+=`<div class="block3"></div>`
                        block33[b].style.transform="rotate("+3.6 * b+"deg)"
                        block33[b].style.animationDelay=`${b/45}s`;
                
                    }
                    const circulo3=document.querySelector('.circulo3')
                    let target3 = +circulo3.getAttribute('data-target');
                    let totalTw= data[x].engines.thrust_to_weight/100*36.0
                    target3=totalTw;
                    for (let c = 0; c < target3; c ++) {
                        block33[c].classList.add('target3')
                        
                    }
                    
                })
              
            }//deppendiendo cada boton clickeado se mostrara la info correspondiente.
            if(valor==1){
                mostrar()
                bar_progress()
             
            }
            if(valor==2){
                console.log(data[1].name)
                document.getElementById("titulo").innerHTML=`
                    ${data[1].name}
                `
                document.getElementById("info-D").innerHTML=`
                    <h1><span  id="span">&#9733 Country</span> <br>${data[1].country}</h1><br>
                    <h1><span  id="span">&#9733 Cost</span><br> ${data[1].cost_per_launch}</h1><br>
                    <h1><span  id="span">&#9733 First Flight</span><br> ${data[1].first_flight}</h1><br>
                    <h1><span  id="span">&#9733 Description</span><br> ${data[1].description}</h1><br>
                    <h1><span  id="span">&#9733 Wikipedia</span><br> <a id="enlace"href="${data[1].wikipedia}">${data[1].wikipedia}</a></h1>
                `
                let esto=data[1].flickr_images
                esto.forEach(element => {
                    console.log(element)
                    document.getElementById("imagen").innerHTML=`
                        <img id="fotosnaves"src="${element}" alt="">
                    `
                
                })
                document.getElementById("infocohete").innerHTML=`
                    <h4><span id="span1">Type</span> <br>${data[1].type}</h4><br>
                    <h4><span  id="span1">Propellant1</span><br> ${data[1].engines.propellant_1}</h4><br>
                    <h4><span  id="span1">Propellant2</span><br> ${data[1].engines.propellant_2}</h4><br>
                    <h4><span  id="span1">Version</span><br> ${data[1].engines.version}</h4><br>
                    <h4><span  id="span1">Layout</span><br>${data[1].engines.layout} </h4>
                    <h4><span  id="span1">Number</span><br>${data[1].engines.number} </h4>
                `
                document.getElementById("Info-I").innerHTML=`
                    <p id="info2">Height--70mts--229.6ft</p>
                    <progress  value="${data[1].height.meters}" max="118"></progress>
                    <p id="info2">Diameter--3.7mts--12ft</p>
                    <progress value="${data[1].diameter.meters}" max="13"></progress>
                    <p id="info2">Mass--549054kg--1207920lb</p>
                    <progress value="${data[1].mass.kg}" max="1420788"></progress>
                    <p id="info2">Thrust Sea Level--7607KN--1710000lbf</p>
                    <progress value="${data[1].first_stage.thrust_sea_level.lbf}" max="128000"></progress>
                    <p id="info2">Thrust Vacuum--8227KN--1849500lbf</p>
                    <progress value="${data[1].first_stage.thrust_vacuum.lbf}" max="138000"></progress>
                    <p id="info2">Fuel Amount Tons--385</p>
                    <progress value="${data[1].first_stage.fuel_amount_tons}" max="3300"></progress>
                    <p id="info2">Thrust--934KN--210000lbf</p>
                    <progress value="${data[1].second_stage.thrust.kN}" max="1957"></progress>
                `
                bar_progress()
            }
            if(valor===3){
                console.log(data[2].name)
                document.getElementById("titulo").innerHTML=`
                    ${data[2].name}
                `
                document.getElementById("info-D").innerHTML=`
                    <h1><span  id="span">&#9733 Country</span><br> ${data[2].country}</h1><br>
                    <h1><span  id="span">&#9733 Cost </span><br>${data[2].cost_per_launch}</h1><br>
                    <h1><span  id="span">&#9733 First Flight</span><br> ${data[2].first_flight}</h1><br>
                    <h1><span  id="span">&#9733 Description</span> <br>${data[2].description}</h1><br>
                    <h1><span  id="span">&#9733 Wikipedia</span><br> <a id="enlace"href="${data[2].wikipedia}">${data[2].wikipedia}</a></h1>
                `
                let esto=data[2].flickr_images
                esto.forEach(element => {
                    console.log(element)
                    document.getElementById("imagen").innerHTML=`
                        <img id="fotosnaves"src="${element}" alt="">
                    `
                
                })
                document.getElementById("infocohete").innerHTML=`
                    <h4><span  id="span1">Type</span><br>${data[2].type}</h4><br>
                    <h4><span  id="span1">Propellant1</span><br> ${data[2].engines.propellant_1}</h4><br>
                    <h4><span id="span1" >Propellant2</span><br> ${data[2].engines.propellant_2}</h4><br>
                    <h4><span id="span1">Version</span><br> ${data[2].engines.version}</h4><br>
                    <h4><span id="span1">Layout</span><br>${data[2].engines.layout} </h4>
                    <h4><span id="span1">Number</span><br>${data[2].engines.number} </h4>
                `
                document.getElementById("Info-I").innerHTML=`
                    <p id="info2">Height--70mt--229.6ft</p>
                    <progress  value="${data[2].height.meters}" max="118"></progress>
                    <p id="info2">Diameter--12.2mt--39.9ft</p>
                    <progress value="${data[2].diameter.meters}" max="13"></progress>
                    <p id="info2">Mass--1420788kg--3125735lb</p>
                    <progress value="${data[2].mass.kg}" max="1420788"></progress>
                    <p id="info2">Thrust Sea Level--246819KN--5130000lbf</p>
                    <progress value="${data[2].first_stage.thrust_sea_level.lbf}" max="128000"></progress>
                    <p id="info2">Thrust Vacuum--24681KN--5548500lbf</p>
                    <progress value="${data[2].first_stage.thrust_vacuum.lbf}" max="138000"></progress>
                    <p id="info2">Fuel Amount Tons--1155</p>
                    <progress value="${data[2].first_stage.fuel_amount_tons}" max="3300"></progress>
                    <p id="info2">Thrust--934KN--210000lbf</p>
                    <progress value="${data[2].second_stage.thrust.kN}" max="1957"></progress>
                `
                bar_progress()
              
            }
            if(valor===4){
                console.log(data[3].name)
                document.getElementById("titulo").innerHTML=`
                    ${data[3].name}
                `
                document.getElementById("info-D").innerHTML=`
                    <h1><span id="span">&#9733 Country</span><br> ${data[3].country}</h1><br>
                    <h1><span id="span">&#9733 Cost</span> <br>${data[3].cost_per_launch}</h1><br>
                    <h1><span id="span">&#9733 First Flight</span><br> ${data[3].first_flight}</h1><br>
                    <h1><span id="span">&#9733 Description</span><br> ${data[3].description}</h1><br>
                    <h1><span id="span">&#9733 Wikipedia</span>:<br> <a id="enlace"href="${data[3].wikipedia}">${data[3].wikipedia}</a></h1> 
                `
                let esto=data[3].flickr_images
                esto.forEach(element => {
                    console.log(element)
                    document.getElementById("imagen").innerHTML=`
                        <img id="fotosnaves" src="https://live.staticflickr.com/65535/48953946911_e60c5bcc5c_b.jpg" alt="img">
                    `
                
                })
                document.getElementById("infocohete").innerHTML=`
                    <h4><span id="span1">Type</span><br>${data[3].type}</h4><br>
                    <h4><span id="span1">Propellant1</span><br> ${data[3].engines.propellant_1}</h4><br>
                    <h4><span id="span1">Propellant2</span><br> ${data[3].engines.propellant_2}</h4><br>
                    <h4><span id="span1">Version</span><br> No information</h4><br>
                    <h4><span id="span1">Layout</span><br> No information </h4><br>
                    <h4><span id="span1">Number</span><br>${data[3].engines.number} </h4>
                `
                document.getElementById("Info-I").innerHTML=`
                    <p id="info2">Height--118mt--387ft</p>
                    <progress  value="${data[3].height.meters}" max="118"></progress>
                    <p id="info2">Diameter--9mt--30ft</p>
                    <progress value="${data[3].diameter.meters}" max="13"></progress>
                    <p id="info2">Mass--1335000kg--2943000lb</p>
                    <progress value="${data[3].mass.kg}" max="1420788"></progress>
                    <p id="info2">Thrust Sea Level--128000KN--28775544lbf</p>
                    <progress value="${data[3].first_stage.thrust_sea_level.lbf}" max="128000"></progress>
                    <p id="info2">Thrust Vacuum--138000KN--31023634lbf</p>
                    <progress value="${data[3].first_stage.thrust_vacuum.lbf}" max="138000"></progress>
                    <p id="info2">Fuel Amount Tons--3300</p>
                    <progress value="${data[3].first_stage.fuel_amount_tons}" max="3300">height</progress>
                    <p id="info2">Thrust--1957KN--440000lbf</p>
                    <progress value="${data[3].second_stage.thrust.kN}" max="1957"></progress>
                `
                bar_progress()
            
            }
        }
    
    })
 
}
//esta funcion se utiliza para mostrar las progress circulares al inicio.
function progress1(){
    fetch("https://api.spacexdata.com/v4/rockets")
    .then(res=>res.json())
    .then(data=>{
        let progressc11=document.getElementsByClassName('progressc1')[0];
        let blocked=document.getElementsByClassName('block');
    
        for(var i = 1; i < 100; i ++){
            progressc11.innerHTML+=`<div class="block"></div>`
            blocked[i].style.transform="rotate("+3.6 * i +"deg)"
            blocked[i].style.animationDelay=`${i/45}s`;
    
        }
        const circulo=document.querySelector('.circulo')
        let target = +circulo.getAttribute('data-target');
        let totalPH= data[0].success_rate_pct/100*36.0/100*36.0
        target=totalPH;
        for (let a = 0; a < target; a++) {
            blocked[a].classList.add('target')
            
        }
        let progressc22=document.getElementsByClassName('progressc2')[0];
        let block22=document.getElementsByClassName('block2');
    
        for(var r = 1; r < 100; r ++){
            progressc22.innerHTML+=`<div class="block2"></div>`
            block22[r].style.transform="rotate("+3.6 * r +"deg)"
            block22[r].style.animationDelay=`${r/45}s`;
    
        }
        const circulo2=document.querySelector('.circulo2')
        let target2 = +circulo2.getAttribute('data-target');
        let totalPD=data[0].engines.isp.sea_level/100*3.6
        target2=totalPD;
        for (let l = 0; l < target2; l++) {
            block22[l].classList.add('target2')
            
        }
        console.log(target2);
        
        let progressc33=document.getElementsByClassName('progressc3')[0];
        let block33=document.getElementsByClassName('block3');
    
        for(var b = 1; b < 100; b ++){
            progressc33.innerHTML+=`<div class="block3"></div>`
            block33[b].style.transform="rotate("+3.6 * b+"deg)"
            block33[b].style.animationDelay=`${b/45}s`;
    
        }
        const circulo3=document.querySelector('.circulo3')
        let target3 = +circulo3.getAttribute('data-target');
        let totalTw= data[0].engines.thrust_to_weight/100*36.0
        target3=totalTw;
        for (let c = 0; c < target3; c ++) {
            block33[c].classList.add('target3')
            
        }
        
    })
  
}










