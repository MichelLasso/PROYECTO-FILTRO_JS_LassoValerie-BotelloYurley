document.getElementById("pasar-Pagina").addEventListener("click", fun11)

function fun11(event){
    var link= document.getElementsByClassName("link");
    let valu=1;
    activelink(event)
    function activelink(event){
        for( let i of link){
            i.classList.remove("active");
        }
        event.target.classList.add("active");
        valu=event.target.value;
        
    }
    function btnprev(){
        if(valu>1){
            for( let i of link){
                i.classList.remove("active");
            }
            link[valu-1].classList.add("active");
        }
    }
 
    function btnnext(){
        if(valu<4){
            for( let i of link){
                i.classList.remove("active");
            }
            link[valu+1].classList.add("active");
        }
    }
   
   
  
    fetch("https://api.spacexdata.com/v4/rockets")
    .then(res=>res.json())
    .then(data=>{
       document.getElementById("titulo").innerHTML=`
            ${data[0].name}
       `
       
            
        
    })
}


