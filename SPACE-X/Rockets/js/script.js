

function mostrar(){
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
            <h4><span  id="span">Type</span> <br>${data[0].type}</h4><br>
            <h4><span  id="span">Propellant1</span><br> ${data[0].engines.propellant_1}</h4><br>
            <h4><span  id="span">Propellant2</span><br> ${data[0].engines.propellant_2}</h4><br>
            <h4><span  id="span">Version</span><br> ${data[0].engines.version}</h4><br>
            <h4><span  id="span">Layout</span><br>${data[0].engines.layout} </h4>
            <h4><span  id="span">Number</span><br>${data[0].engines.number} </h4>
        `
    })
}
mostrar()

document.getElementById("pasar-Pagina").addEventListener("click", fun11)
function fun11(event){
    fetch("https://api.spacexdata.com/v4/rockets")
    .then(res=>res.json())
    .then(data=>{
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
                /*
                const progress=document.querySelector('progress')
                let Value=progress.value;
                Value=80;
                console.log(Value)
                */
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
                    <h4><span id="span">Type</span> <br>${data[1].type}</h4><br>
                    <h4><span  id="span">Propellant1</span><br> ${data[1].engines.propellant_1}</h4><br>
                    <h4><span  id="span">Propellant2</span><br> ${data[1].engines.propellant_2}</h4><br>
                    <h4><span  id="span">Version</span><br> ${data[1].engines.version}</h4><br>
                    <h4><span  id="span">Layout</span><br>${data[1].engines.layout} </h4>
                    <h4><span  id="span">Number</span><br>${data[1].engines.number} </h4>
                `
            }
            if(valor==3){
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
                    <h4><span  id="span">Type</span><br>${data[2].type}</h4><br>
                    <h4><span  id="span">Propellant1</span><br> ${data[2].engines.propellant_1}</h4><br>
                    <h4><span id="span" >Propellant2</span><br> ${data[2].engines.propellant_2}</h4><br>
                    <h4><span id="span">Version</span><br> ${data[2].engines.version}</h4><br>
                    <h4><span id="span">Layout</span><br>${data[2].engines.layout} </h4>
                    <h4><span id="span">Number</span><br>${data[2].engines.number} </h4>
                `
            }
            if(valor==4){
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
                        <img id="fotosnaves" src="${element}" alt="img">
                    `
                
                })
                document.getElementById("infocohete").innerHTML=`
                    <h4><span id="span">Type</span><br>${data[3].type}</h4><br>
                    <h4><span id="span">Propellant1</span><br> ${data[3].engines.propellant_1}</h4><br>
                    <h4><span id="span">Propellant2</span><br> ${data[3].engines.propellant_2}</h4><br>
                    <h4><span id="span">Version</span><br> No information</h4><br>
                    <h4><span id="span">Layout</span><br> No information </h4><br>
                    <h4><span id="span">Number</span><br>${data[3].engines.number} </h4>
                `
            
            }
        }
    
    })
 
}

const progressc11=document.getElementsByClassName('progressc1')[0];
const blocked=document.getElementsByClassName('block');

for(var i = 1; i < 100; i ++){
    progressc11.innerHTML+=`<div class="block"></div>`
    blocked[i].style.transform="rotate("+3.6 * i +"deg)"
    blocked[i].style.animationDelay=`${i/45}s`;

}
/*
const target = +circulo.getAttribute('data-target');
var elements = document.querySelectorAll("p:nth-child(-n)")
elements = +target
document.documentElement.style.setProperty("--variable",elements)
console.log(target)
console.log(elements)
const estilos=getComputedStyle(document.documentElement)
const valor=estilos.getPropertyValue("--variable")
console.log(valor)
*/







