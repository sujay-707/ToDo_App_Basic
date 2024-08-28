// let btn = document.querySelector("button");
// let ul = document.querySelector("ul");
// let inp = document.querySelector("input");
// // let lis = document.querySelector("li");





//     btn.addEventListener("click", function () {
//         // Check if the input value is empty
//         if (inp.value.trim() === "") {
//           alert("Please enter a task!"); // You can also display an error message on the page.
//           return; // Exit the function if input is empty
//         }
      
//     let item = document.createElement("li");
//     item.innerText = inp.value;


//     let delbtn = document.createElement("button");
//     delbtn.innerText = "delete";
//     delbtn.classList.add("delete");

//     item.appendChild(delbtn); 


//     ul.appendChild(item);
//     inp.value ="";

 
//     console.log("button clicked");
// });


// ul.addEventListener("click",function(event)
// {
//     if(event.target.nodeName == "BUTTON")
//     {
//        let lisitem = event.target.parentElement;
//        lisitem.remove();
//         console.log("Delted");
//     }
     
// });




let addTaskButton = document.getElementById("add-task");
let taskInput = document.getElementById("task-input");
let taskList = document.getElementById("task-list");

addTaskButton.addEventListener("click", function() {
    let taskText = taskInput.value.trim();
    if (taskText !== "") {
        let taskItem = document.createElement("li");
        taskItem.textContent = taskText;

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete");

        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);

        taskInput.value = "";
    }
});

taskList.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete")) {
        event.target.parentElement.remove();
    }
});