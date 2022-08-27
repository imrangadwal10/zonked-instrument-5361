let container = document.getElementById("container");

let data2 = [
    { 
        p:"TOPIC General",
        l1:"Everything available from Google Digital Garage",
    },
    {
        p:"What knowledge and skills will I gain upon completing my Google Digital Garage training?",
        l1:"There's no limit to how much you can grow with our digital training! After watching video tutorials from everyday experts who've been in your shoes, you'll build the digital marketing skills to promote yourself and your business online. You'll learn how to get noticed by the right people, and how to make the most of the web to achieve your goals. Have fun!",
    },
    {
        p:"What is the Google Digital Garage?",
        l1:"Brush up your digital skills to grow your business, your career, or just your confidence. The everyday experts at Google Digital Garage will help you succeed online. Anyone can benefit, regardless of their skill level, goals or background.",
    },
    {
        p:"Why has Google set up Google Digital Garage?",
        l1:"Digital skills help us make the most of life, whether it’s getting the career you want, or being confident online. No-one should be held back because they don’t have the digital skills they need.",
    },
    {
        p:"Who is Google Digital Garage for?",
        l1:"Everyone. Gain today's most in-demand skills, whether you're growing your business, starting a career, or just want to try something new. We’ve got a range of courses and over 40 hours of learning available to help take you where you need to go. If you’re keen to come and learn, we’re keen to meet you!",
    },   
    {
        p:"How much does it cost?",
        l1:"Not a penny. Everything available from Google Digital Garage is absolutely free.",
    }
    

]

function putData(data2){
    data2.forEach(function(ele) {
        let div1 = document.createElement("div")
        div1.id="ok1"
        div1.innerText=ele.p
        
        let details = document.createElement("details")
        let summary = document.createElement("summary");

        let div = document.createElement("div");
        div.id = "put";
        
        let p1 = document.createElement("p");
        p1.innerText = ele.l1;

        div.append(p1);
        summary.append(div1)
        
        details.append(summary,div);
        container.append(details);
    });
}
putData(data2);