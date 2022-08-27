
let bottom = document.getElementById("bottom")

let Data = [
    { 
    l1:"Work from anywhere",
    l2:"These resources will help you and your teams to communicate and collaborate effectively, even when you’re not together in person.",
    p1:"Start using tools for better remote working",
    p2:"Communicate effectively, from wherever you are",
    p3:"Collaborate with others while working remotely",
    p4:"Learn to schedule, prepare for and run a successful meeting",
    p5:"4 tips for staying productive when working from home",
    p6:"6 tips for better video calls when working from home",
    src:"digital_skill.html",
    img:"https://lh3.googleusercontent.com/WqqOQgvDCWBKyCCvRatA2g_N3D4VXtX5BEaul65DIzymFUApKJ0yBglbnLIVLbt8Xcuhc_YKpDlZYWLmSSzfvsTdztq8kJZ2EM7Vxg=s0-rj"
},

{ 
    l1:"Run your business from anywhere",
    l2:"Put the right tools and practices in place to make sure your business is running smoothly, your teams are connected, and your customers stay happy.",
    p1:"Work faster, work smarter with G-suite",
    p2:"Keep customers informed through Google My Business",
    p3:"A guide to hosting virtual events on YouTube",
    p4:"Achieve a balanced and flexible workforce",
    p5:"3 things we're considering as we rethink live events",
    p6:null,
    src:"demo.html",
    img:"https://lh3.googleusercontent.com/Bn6Qh_YH0fE7D0neX2GqODs13hV7z0sA7CVYqyhJhXmrdbBalHDQQ15UmBUOVGgz1jwWUIuCE5yFlLn8BV_QNfAndplGSSUFhMNUAw=s0-rj"
},
{ 
    l1:"Teach from anywhere",
    l2:"Explore ways to keep students engaged through distance learning resources for educators.",
    p1:"Explore resources for distance learning",
    p2:"Learn to use digital tools in your lesson plans",
    p3:"Share information by creating an interactive presentation",
    p4:"Test yourself and others by creating a quiz in Google Forms",
    p5:"Use comments in Google Docs to give feedback on work",
    p6:null,
    src:"demo.html",
    img:"https://lh3.googleusercontent.com/LahFn7ylv7oBbbi80t1lb0UivE5J1bYTOune-iApM_Mio8MRLdDu0V7c5lslq62wUcYX6qTRpFHnlujlMlAxfJEOEvFBshUeBGlsPv8=s0-rj"
},
{ 
    l1:"Learn from anywhere",
    l2:"Keep learning new skills to develop personally and professionally, wherever you are.",
    p1:"Start learning new skills online for free",
    p2:"Take bite-sized business and marketing lessons",
    p3:"Begin coding through quick lessons on your phone",
    p4:"Get organised with Google Drive",
    p5:null,
    p6:null,
    src:"demo.html",
    img:"https://lh3.googleusercontent.com/ugYgbdlUWcBrW2QAL5JDwVk5FLkvvex72iYsHetgkHZf7alW6QMtQi4J9f_u2hHZSingvczC1QK6rcE7SRvep0cnJ2EPLgWNVGyM7w=s0-rj"
},

    

]

function ShowData(data){

    data.forEach(function(ele,i){
    
        let div = document.createElement("div")
        div.id="seperate"

        let main_div1 = document.createElement("div")
        main_div1.id="box1"

        let main_div2 = document.createElement("div");
        main_div2.setAttribute("id", "main_div2");
        

        let div1 = document.createElement("div")
        let l1 = document.createElement("h2")
        l1.innerText = ele.l1;

        let div0 = document.createElement("div")
        div0.id="div0"
        let l2 = document.createElement("h5")
        l2.innerText = ele.l2
        div1.id="upper_box"


        let div2 = document.createElement("div")
        let p1 = document.createElement("p")
        p1.innerText = ele.p1
        div2.addEventListener('click', function(i) {
            window.location.href = ele.src;
        }, false);

        let div3 = document.createElement("div")
        let p2 = document.createElement("p")
        p2.innerText = ele.p2
        
        let div4 = document.createElement("div")
        let p3 = document.createElement("p")
        p3.innerText = ele.p3
        
        let div5 = document.createElement("div")
        let p4 = document.createElement("p")
        p4.innerText = ele.p4
        
        let div6 = document.createElement("div")
        let p5 = document.createElement("p")
        p5.innerText = ele.p5
        
        let div7 = document.createElement("div")
        let p6 = document.createElement("p")
        p6.innerText = ele.p6
        
        let img = document.createElement("img")
        img.src = ele.img 

        div0.append(l2)
        div1.append(l1,div0)
        div2.append(p1)
        div3.append(p2)
        div4.append(p3)
        div5.append(p4)
        div6.append(p5)
        div7.append(p6)

        if(ele.p5 === null && ele.p6 === null ){
            main_div1.append(div1,div2,div3,div4,div5)     
        }
        else if( ele.p6 === null ){
            main_div1.append(div1,div2,div3,div4,div5,div6)        
        }
        else{
            main_div1.append(div1,div2,div3,div4,div5,div6,div7)
        }

        main_div2.append(img)
        if(i%2==0){
            div.append(main_div1,main_div2)
            bottom.append(div)
        }else{
            div.append(main_div2,main_div1)
            bottom.append(div)
        }
        
    });  
}
ShowData(Data)