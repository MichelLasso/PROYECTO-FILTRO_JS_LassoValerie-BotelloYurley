fetch("https://api.spacexdata.com/v4/capsules")
.then(res=>res.json())
.then(daticos=>{
    console.log(daticos)
})