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

let container = document.getElementById("container")

let data = [
    { 
        p:"1. Unit Introduction" ,
        l1:"1. Introduction to Use Digital Tools for Everyday Tasks",
        l2:null,
        l3:null,
        l4:null,
        l5:null,
        l6:null,
        src:"https://applieddigitalskills.withgoogle.com/c/college-and-continuing-education-uk/en-uk/digital-tools-for-everyday-tasks/unit-introduction/introduction-to-digital-tools-for-everyday-tasks.html",
    },
   
    {
        p:"2. Create a Google Account",
        l1:"1. Set Up a Username",
        l2:"2. Create a Strong Password",
        l3:"3. Using Your Google Account",
        l4:"4. Activity Wrap-Up: Creating and Exploring a Google Account",
        l5:null,
        l6:null,
    },

    {
        p:"3. Record and Share Ideas for Things to Do",
        l1:"1. Use a Document to Write Down and Share Information",
        l2:"2. Create and Name a Document",
        l3:"3. Add Ideas to Your Document",
        l4:"4. Make Your Document Easier to Read",
        l5:"5. Add Your Thoughts to Your Document",
        l6:"6. Activity Wrap-Up: Online Documents as Communication Tools",
    },

    { 
        p:"4. Search for Activities",
        l1:"1. Introduction to Search for Activities",
        l2:"2. Search Using Search Terms",
        l3:"3. Use Keywords to Refine Your Search",
        l4:"4. Use a Document to Record Search Results attachment",
        l5:"5. Activity Wrap-Up: Use an Internet Search to Find Activities",
        l6:null,
    },
 
    { 
        p:"5. Email Your Friend or Classmate",
        l1:"1. Gmail Overview",
        l2:"2. Type a Message",
        l3:"3. Insert a File from Google Drive or Add an Attachment",
        l4:"4. Gmail Wrap-Up",
        l5:null,
        l6:null,
    },
    
    {
        p:"6. Personalise Emails and Manage Your Inbox",
        l1:"1. Open and Reply to Emails",
        l2:"2. Format Your Email",
        l3:"3. Add an Image to Your Email",
        l4:"4. Manage Your Email Inbox",
        l5:"5. Continue Writing Emails",
        l6:null,
    },

    { 
         p:"7. Unit Wrap-Up: Digital Tools for Everyday Tasks",
         l1:"1. Unit Wrap-Up",
         l2:null,
         l3:null,
         l4:null,
         l5:null,
         l6:null,
    }
]

function putData(data){
    data.forEach(function(ele) {
        let div1 = document.createElement("div")
        div1.id="ok1"
        div1.innerText=ele.p
        
        let details = document.createElement("details")
        let summary = document.createElement("summary");
        

        let div = document.createElement("div");
        div.id = "put";
        
        let a1 = document.createElement("a")
        a1.href = ele.src
        let p1 = document.createElement("p");
        p1.innerText = ele.l1;

        let a2 = document.createElement("a")
        a2.href = "#"
        let p2 = document.createElement("p");
        p2.innerText = ele.l2;

        let a3 = document.createElement("a")
        a3.href = "#"
        let p3 = document.createElement("p");
        p3.innerText = ele.l3;

        let a4 = document.createElement("a")
        a4.href = "#"
        let p4 = document.createElement("p");
        p4.innerText = ele.l4;

        let a5 = document.createElement("a")
        a5.href = "#"
        let p5 = document.createElement("p");
        p5.innerText = ele.l5;

        let a6 = document.createElement("a")
        a6.href = "#"
        let p6 = document.createElement("p");
        p6.innerText = ele.l6;

         a1.append(p1)
         a2.append(p2)
         a3.append(p3)
         a4.append(p4)
         a5.append(p5)
         a6.append(p6)
        
        summary.append(div1)
        div.append(a1,a2,a3,a4,a5,a6)
        
        details.append(summary,div);
        container.append(details);
    });
}
putData(data);
