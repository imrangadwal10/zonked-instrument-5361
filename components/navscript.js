let data= JSON.parse(localStorage.getItem("signedin")) || null;
if(data!==null){

    document.getElementById("before").style.display= "none";
    document.getElementById("after").style.display= "flex";
    document.getElementById("right").style.display= "none";
    document.getElementById("navbar").style.padding= "27px 0px 18px 0px";


    let container= document.getElementById("signinmoreappend");
    let more= document.getElementById("signinmore");
    more.addEventListener("click", signinmorefunc);
    let flag= false;

    function signinmorefunc(){
        if(flag===false){
            flag= true;
            container.innerHTML="";
            let div= document.createElement("div");

            let div1= document.createElement("a");
            div1.innerText= "Certification";
            div1.href= "./certificate.html";
            div1.setAttribute("id", "certification");

            let div2= document.createElement("a");
            div2.innerText= "Tools & Resources";
            div2.href= "./Tools&Resources.html";
            div2.setAttribute("id", "tools_and_resources")

            let div3= document.createElement("a"); 
            div3.innerText= "Help & FAQs";
            div3.setAttribute("id", "help_and_FAQs")

            let div4= document.createElement("a");
            div4.innerText= "Feedback";
            div4.setAttribute("id", "feedback")

            let div5= document.createElement("a"); 
            div5.innerText= "My Profile";
            div5.setAttribute("id", "my_profile")

            let div6= document.createElement("button");
            div6.innerText= "Sign out";
            div6.setAttribute("id", "signout");
            div6.addEventListener("click", function(){
                data= null;
                alert("Successfully Signed Out.");
                localStorage.setItem("signedin", JSON.stringify(data));
                window.location.assign("index.html");
            })

            div.append(div1, div2, div3, div4, div5, div6);
            container.append(div);
            container.style.display= "inline";
        }else if(flag===true){
            flag= false;
            container.innerHTML="";
        }
    }

    let aftermenudiv= document.getElementById("aftermenudiv");
    let aftermenu= document.getElementById("aftermenu");
    aftermenu.addEventListener("click", aftermenufunc);
    let flag1= false;

        function aftermenufunc(){
            if(flag1===false){
                flag1= true;
                aftermenudiv.style.display= "inline";
                document.getElementById("menusignout").addEventListener("click", function(){
                    data= null;
                    alert("Successfully Signed Out.");
                    localStorage.setItem("signedin", JSON.stringify(data));
                    aftermenufunc();
                    window.location.assign("index.html");
                })
            }else if(flag1===true){
                flag1= false;
                aftermenudiv.style.display= "none";
            }
        }

}
if(data===null){

    document.getElementById("before").style.display= "flex";
    document.getElementById("after").style.display= "none";
    document.getElementById("right").style.display= "flex";
    document.getElementById("navbar").style.padding= "16px 0px 7px 0px";


    let container= document.getElementById("moreappend");
    let more= document.getElementById("more");
    more.addEventListener("click", morefunc);
    let flag= false;

    function morefunc(){
        if(flag===false){
            flag= true;
            container.innerHTML="";
            let div= document.createElement("div");

            let div1= document.createElement("a");
            div1.innerText= "Tools & Resources";
            div1.href= "./Tools&Resources.html";
            div1.setAttribute("id", "tools_and_resources");

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

    let menudiv= document.getElementById("menudiv");
    let menu= document.getElementById("menu");
    menu.addEventListener("click", menufunc);
    let flag1= false;

        function menufunc(){
            if(flag1===false){
                flag1= true;
                menudiv.style.display= "inline";
            }else if(flag1===true){
                flag1= false;
                menudiv.style.display= "none";
            }
        }
}

    document.getElementById("signin").addEventListener("click", function(){
        window.location.href= "./signin.html";
    })
    document.getElementById("register").addEventListener("click", function(){
        window.location.href= "./register.html";
    })
    document.getElementById("logo").addEventListener("click", function(){
        window.location.href= "./index.html";
    })



    document.getElementById("onlinecourses").addEventListener("click", function(){
        window.location.href= "./online.html";
    });
    document.getElementById("certifications").addEventListener("click", function(){
        window.location.href= "./certificate.html";
    });
    document.getElementById("livetraining").addEventListener("click", function(){
        window.location.href= "./LiveTranining.html";
    });
    document.getElementById("remoteworking").addEventListener("click", function(){
        window.location.href= "./rem_work.html";
    });
