document.getElementById("pasar-Pagina").addEventListener("click", fun11)
function fun11(event){
    fetch("https://api.spacexdata.com/v4/rockets")
    .then(res=>res.json())
    .then(data=>{
        var link= document.getElementsByClassName("link");
        let valu=document.getElementById("5e9d0d95eda69955f709d1eb");
        let valu1=document.getElementById("5e9d0d95eda69973a809d1ec");
        activelink(event)
        function activelink(event){
            for( let i of link){
                i.classList.remove("active");
            }
            event.target.classList.add("active");
        }
        
        if(valu.id===data[0].id){
            console.log(data[0].name)
            document.getElementById("titulo").innerHTML=`
                ${data[0].name}
            `
        }
        if(valu1.id===data[1].id){
            console.log(valu1.id);
            console.log(data[1].name)
            document.getElementById("titulo").innerHTML=`
                ${data[1].name}
            `
        
        }
            
        
    })
       
    
  
  
}



