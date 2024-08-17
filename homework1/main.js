const toDoList = [
    {
        id: 1,
        task: "do landry",
         status: " in rpogress"
    },
    
]



const container = document.querySelector("ul");
const h1 = document.querySelector("h1");
function renderToDoList() {
    container.innerHTML = " ";
    toDoList.forEach(tasks => {
        const block = `<li>
        <span>${tasks.id}.</span>
        <span>${tasks.task}</span>
        <span class="status">${tasks.status}</span><button id="${tasks.id}">Delete</button>
        </li>`
       
        container.insertAdjacentHTML("beforeend", block)
    })
    document.querySelectorAll("li button").forEach((button, index) => {
        button.addEventListener("click", function(){
            toDoList.splice(index, 1);
            renderToDoList()
    
        })
    })
    
} 
renderToDoList();


const buttonEl = document.querySelector(".addButton");
buttonEl.addEventListener("click", function(){
    const inputEl = document.querySelector("input");
    const newTask = {
        id: toDoList.length +1,
        task: inputEl.value,
        status: "Done ",
    }
    toDoList.push(newTask);
    renderToDoList();
    inputEl.value = "";
}) 


