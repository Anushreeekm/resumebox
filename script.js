
  
  function addNewAQField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");
  
    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");
  
    aqOb.insertBefore(newNode, aqAddButtonOb);
  }
  
  function generateCV(){
    let nameField=document.getElementById("nameField").value ;
     let nameT1=document.getElementById("nameT1");

     nameT1.innerHTML=nameField;

     document.getElementById("ContactT").innerHTML=document.getElementById("contactField").value ;

     document.getElementById("addressT").innerHTML=document.getElementById("addressField").value ;

     document.getElementById("LkT").innerHTML=document.getElementById("LinkedInField").value ;
     document.getElementById("gtT").innerHTML=document.getElementById("githubField").value ;

     document.getElementById("ObjectiveT").innerHTML=document.getElementById("ObjectiveField").value ;

     document.getElementById("weT").innerHTML=document.getElementById("weField").value ;

     let aqs=document.getElementsByClassName("aqField");
     let str='';
     for(let e of aqs)
     {
      str=str+`<li> ${e.value} </li>`;
     }

     document.getElementById("aqT").innerHTML=str ;

     document.getElementById("skT").innerHTML=document.getElementById("SkillsField").value ;

     let file=document.getElementById("imgField").files[0] ;

     console.log("file");

     let reader=new FileReader()

     reader.readAsDataURL(file);
     console.log(reader.result);

     reader.onloadend=function(){
      document.getElementById("imgT").src=reader.result;
     }

     document.getElementById("cv-form").style.display="none";
     document.getElementById("cv-tempelate").style.display="block";
     
  }

  function printCV(){
    window.print();
  }