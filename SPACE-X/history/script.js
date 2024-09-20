fetch("https://api.spacexdata.com/v4/history")
.then(res=> res.json())
.then(historyDatos => {
    console.log(historyDatos);
    
})