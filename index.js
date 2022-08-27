
    let q1= document.getElementById("q1");
    let q2= document.getElementById("q2");
    let ans1= document.getElementById("ans1");
    let ans2= document.getElementById("ans2");
    let flagq1= false;
    let flagq2= false;

    q1.addEventListener("click", q1func);
    function q1func(event){
        event.preventDefault();
        if(flagq1===false){
            flagq1= true;
            ans1.innerHTML="";
            let p= document.createElement("p");
            p.innerText= "Everyone. Gain today's most in-demand skills, whether you're growing your business, starting a career, or just want to try something new. We’ve got a range of courses and over 40 hours of learning available to help take you where you need to go. If you’re keen to come and learn, we’re keen to meet you!";
            ans1.append(p);
            ans1.style.display= "inline";
            ans1.style.marginBottom= "30px";
            document.getElementById("q1down").style.transform= "rotate(180deg)";
        }else if(flagq1===true){
            flagq1= false;
            ans1.innerHTML="";
            document.getElementById("q1down").style.transform= "rotate(0deg)";
        }
    }

    q2.addEventListener("click", q2func);
    function q2func(event){
        event.preventDefault();
        if(flagq2===false){
            flagq2= true;
            ans2.innerHTML="";
            let p= document.createElement("p");
            p.innerText= "Some of the courses are provided by us, and others from our partner universities or institutions.";
            ans2.append(p);
            ans2.style.display= "inline";
            ans2.style.marginBottom= "30px";
            document.getElementById("q2down").style.transform= "rotate(180deg)";
        }else if(flagq2===true){
            flagq2= false;
            ans2.innerHTML="";
            document.getElementById("q2down").style.transform= "rotate(0deg)";
        }
    }






    document.getElementById("findyourcourse").addEventListener("click", function(){
        window.location.href= "./online.html";
    });


    
    document.getElementById("digital").addEventListener("click", function(){
        window.location.href= "./online.html";
    });
    document.getElementById("career").addEventListener("click", function(){
        window.location.href= "./online.html";
    });
    document.getElementById("data").addEventListener("click", function(){
        window.location.href= "./online.html";
    });