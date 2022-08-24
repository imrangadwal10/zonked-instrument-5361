let navjs= () => {
    return `let container= document.getElementById("moreappend");
    let more= document.getElementById("more");
    more.addEventListener("click", morefunc);
    let flag= false;
    
        function morefunc(event){
            event.preventDefault();
            if(flag===false){
                flag= true;
                container.innerHTML="";
                let div= document.createElement("div");
    
                let div1= document.createElement("a");
                div1.innerText= "Tools & Resources";
                div1.setAttribute("id", "tools_and_resources")
    
                let div2= document.createElement("a"); 
                div2.innerText= "Help & FAQs";
                div2.setAttribute("id", "help_and_FAQs")
    
                let div3= document.createElement("a");
                div3.innerText= "Feedback";
                div3.setAttribute("id", "feedback")
    
                div.append(div1, div2, div3);
                container.append(div);
                container.style.display= "inline";
            }else if(flag===true){
                flag= false;
                container.innerHTML="";
            }
        }
    
        document.getElementById("signin").addEventListener("click", function(){
            window.location.href= "/signin.html";
        })
        document.getElementById("register").addEventListener("click", function(){
            window.location.href= "/register.html";
        })
        document.getElementById("logo").addEventListener("click", function(){
            window.location.href= "./index.html";
        })
    
    let menudiv= document.getElementById("menudiv");
    let menu= document.getElementById("menu");
    menu.addEventListener("click", menufunc);
    let flag1= false;
    
        function menufunc(event){
            event.preventDefault();
            if(flag1===false){
                flag1= true;
                menudiv.style.display= "inline";
            }else if(flag1===true){
                flag1= false;
                menudiv.style.display= "none";
            }
        }`;
}
export default navjs;