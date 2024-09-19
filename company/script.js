fetch("https://api.spacexdata.com/v4/company")
.then(res => res.json())
.then(companyDatos=>{
    console.log(companyDatos);
})