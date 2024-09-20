function mostrar(){
    fetch("https://api.spacexdata.com/v4/rockets")
    .then(res=>res.json())
    .then(data=>{
        document.getElementById("titulo").innerHTML=`
            ${data[0].name}
        `
        document.getElementById("info-D").innerHTML=`
            <h1>Country:<br> ${data[0].country}</h1><br>
            <h1>Cost: <br>${data[0].cost_per_launch}</h1><br>
            <h1>First Flight:<br> ${data[0].first_flight}</h1><br>
            <h1>Description:<br> ${data[0].description}</h1><br>
            <h1>Wikipedia:<br> <a id="enlace"href="${data[0].wikipedia}">${data[0].wikipedia}</a></h1>
        `
        document.getElementById("imagen").innerHTML=`
            <img id="fotosnaves" src="" alt="">
        `
        /*let esto=data[0].flickr_images
        esto.forEach(element => {
            console.log(element)
            document.getElementById("imagen").innerHTML+=`
                <img id="fotosnaves" style=display="flex" src="${element}" alt="">
            `

        });*/
        document.getElementById("infocohete").innerHTML=`
            <h1>Type: <br>${data[0].type}</h1><br>
            <h1>Propellant_1:<br> ${data[0].engines.propellant_1}</h1><br>
            <h1>Propellant_1:<br> ${data[0].engines.propellant_2}</h1><br>
            <h1>Version:<br> ${data[0].engines.version}</h1><br>
            <h1>Layout:<br>${data[0].engines.layout} </h1>
            <h1>Number:<br>${data[0].engines.number} </h1>
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
                document.getElementById("titulo").innerHTML=`
                    ${data[0].name}
                `
                document.getElementById("info-D").innerHTML=`
                    <h1>Country:<br> ${data[0].country}</h1><br>
                    <h1>Cost: <br>${data[0].cost_per_launch}</h1><br>
                    <h1>First Flight:<br> ${data[0].first_flight}</h1><br>
                    <h1>Description:<br> ${data[0].description}</h1><br>
                    <h1>Wikipedia:<br> <a id="enlace"href="${data[0].wikipedia}">${data[0].wikipedia}</a></h1>
                `
                document.getElementById("imagen").innerHTML=`
                        <img id="fotosnaves" src="" alt="">
                    `
                /*let esto=data[0].flickr_images
                esto.forEach(element => {
                    console.log(element)
                    document.getElementById("imagen").innerHTML+=`
                        <img id="fotosnaves" style=display="flex" src="${element}" alt="">
                    `
                
                });*/
                document.getElementById("infocohete").innerHTML=`
                    <h1>Type: <br>${data[0].type}</h1><br>
                    <h1>Propellant_1:<br> ${data[0].engines.propellant_1}</h1><br>
                    <h1>Propellant_1:<br> ${data[0].engines.propellant_2}</h1><br>
                    <h1>Version:<br> ${data[0].engines.version}</h1><br>
                    <h1>Layout:<br>${data[0].engines.layout} </h1>
                    <h1>Number:<br>${data[0].engines.number} </h1>
                 `
                
            }
            if(valor==2){
                console.log(data[1].name)
                document.getElementById("titulo").innerHTML=`
                    ${data[1].name}
                `
                document.getElementById("info-D").innerHTML=`
                    <h1>Country: <br>${data[1].country}</h1><br>
                    <h1>Cost:<br> ${data[1].cost_per_launch}</h1><br>
                    <h1>First Flight:<br> ${data[1].first_flight}</h1><br>
                    <h1>Description:<br> ${data[1].description}</h1><br>
                    <h1>Wikipedia:<br> <a id="enlace"href="${data[1].wikipedia}">${data[1].wikipedia}</a></h1>
                `
                let esto=data[1].flickr_images
                esto.forEach(element => {
                    console.log(element)
                    document.getElementById("imagen").innerHTML=`
                        <img id="fotosnaves"src="${element}" alt="">
                    `
                
                })
                document.getElementById("infocohete").innerHTML=`
                    <h1>Type: <br>${data[1].type}</h1><br>
                    <h1>Propellant_1:<br> ${data[1].engines.propellant_1}</h1><br>
                    <h1>Propellant_1:<br> ${data[1].engines.propellant_2}</h1><br>
                    <h1>Version:<br> ${data[1].engines.version}</h1><br>
                    <h1>Layout:<br>${data[1].engines.layout} </h1>
                    <h1>Number:<br>${data[1].engines.number} </h1>
                `
            }
            if(valor==3){
                console.log(data[2].name)
                document.getElementById("titulo").innerHTML=`
                    ${data[2].name}
                `
                document.getElementById("info-D").innerHTML=`
                    <h1>Country:<br> ${data[2].country}</h1><br>
                    <h1>Cost: <br>${data[2].cost_per_launch}</h1><br>
                    <h1>First Flight:<br> ${data[2].first_flight}</h1><br>
                    <h1>Description: <br>${data[2].description}</h1><br>
                    <h1>Wikipedia:<br> <a id="enlace"href="${data[2].wikipedia}">${data[2].wikipedia}</a></h1>
                `
                let esto=data[2].flickr_images
                esto.forEach(element => {
                    console.log(element)
                    document.getElementById("imagen").innerHTML=`
                        <img id="fotosnaves"src="${element}" alt="">
                    `
                
                })
                document.getElementById("infocohete").innerHTML=`
                    <h1>Type: <br>${data[2].type}</h1><br>
                    <h1>Propellant_1:<br> ${data[2].engines.propellant_1}</h1><br>
                    <h1>Propellant_1:<br> ${data[2].engines.propellant_2}</h1><br>
                    <h1>Version:<br> ${data[2].engines.version}</h1><br>
                    <h1>Layout:<br>${data[2].engines.layout} </h1>
                    <h1>Number:<br>${data[2].engines.number} </h1>
                `
            }
            if(valor==4){
                console.log(data[3].name)
                document.getElementById("titulo").innerHTML=`
                    ${data[3].name}
                `
                document.getElementById("info-D").innerHTML=`
                    <h1>Country:<br> ${data[3].country}</h1><br>
                    <h1>Cost: <br>${data[3].cost_per_launch}</h1><br>
                    <h1>First Flight:<br> ${data[3].first_flight}</h1><br>
                    <h1>Description:<br> ${data[3].description}</h1><br>
                    <h1>Wikipedia:<br> <a id="enlace"href="${data[3].wikipedia}">${data[3].wikipedia}</a></h1> 
                `
                let esto=data[3].flickr_images
                esto.forEach(element => {
                    console.log(element)
                    document.getElementById("imagen").innerHTML=`
                        <img id="fotosnaves" src="${element}" alt="img">
                    `
                
                })
                document.getElementById("infocohete").innerHTML=`
                    <h1>Type: <br>${data[3].type}</h1><br>
                    <h1>Propellant_1:<br> ${data[3].engines.propellant_1}</h1><br>
                    <h1>Propellant_1:<br> ${data[3].engines.propellant_2}</h1><br>
                    <h1>Version:<br> ${data[3].engines.version}</h1><br>
                    <h1>Layout:<br>${data[3].engines.layout} </h1>
                    <h1>Number:<br>${data[3].engines.number} </h1>
                `
            
            }
        }
    
    })
 
}



