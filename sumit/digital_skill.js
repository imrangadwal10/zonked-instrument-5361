let hidden = document.getElementById("hidden-menu")
let temp = false;
function toggleMenu(event){ 
    if(temp===false){
        temp = true;
        hidden.style.height="130px"
        hidden.style.boxShadow="rgba(9, 30, 66, 0.5) 0px 3px 1px, rgba(9, 30, 66, 0.14) 0px 0px 0px 1px";
   
    } else if(temp===true){
        temp = false;
        hidden.style.height="0px";
        hidden.style.boxShadow = "none"
    }  
 }
  
let sel = document.getElementById("sel")
let flag = false;
function select(event){
    if(flag===false){
        flag=true;
        sel.style.background="#e4e8ed";
    }else if(flag===true){
        flag=false;
        sel.style.backgroundColor="white";
    }
}

