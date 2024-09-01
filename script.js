let totalHt=0;
var listHt = document.getElementById("list").clientHeight;
console.log(listHt);
var canAdd =true;

function appendTodo(){
    if(item!==null){
        var item = document.getElementById("task").value;
        let li =document.createElement("li");
        li.innerHTML=item;
        document.getElementById("list").appendChild(li);
        
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        document.getElementById("task").value=""; 
        totalHt+=li.clientHeight+20;
        canAdd = (totalHt+li.clientHeight+20>listHt)?false:true;
    }
}


document.getElementById("submit").addEventListener("click",function(){
    if(canAdd){ 
         appendTodo();   
    }
    else{
        alert("Too Many Tasks,Complete A Few!");
    }
});

document.getElementById("list").addEventListener("click",function(e){
    if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
    else if(e.target.tagName==="LI"){
        e.target.classList.add("checked");
    }
});

    

