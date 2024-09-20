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
    })

}
mostrar()
