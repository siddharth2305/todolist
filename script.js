

let addTask=document.getElementById('add-btn');

let taskContainer = document.getElementById('todo-tasks');

let inputValue = document.getElementById('todo-input');

let totalTasks=document.querySelector('#count');

var count=0;


// console.log('hello');


function addTodo(){

    // creating element 

    let todoItem=document.createElement('div');

    todoItem.classList.add("todo-div");


    // creating li tag for each task 

    let li =document.createElement('li');

    li.innerText=`${inputValue.value}`;    

    todoItem.appendChild(li);

    let checkButton=document.createElement('input');

    checkButton.type = "checkbox";
    checkButton.name = "name";
    checkButton.value = "false";
    checkButton.id = "id";
    checkButton.checked=false;

    checkButton.classList.add('todo-check');
    todoItem.appendChild(checkButton);

    // adding completed to list item if checked equals true 
    checkButton.addEventListener('click',function(){
        if(checkButton.checked!=false){

            li.style.backgroundColor="grey";
            li.innerText += '  Completed'; 
            li.style.color="green";
            

        }else{
            li.style.backgroundColor="white";
            li.innerText=li.innerText.slice(0,-10) ;
            li.style.color="black";
        
        }
    })

    // console.log(checkButton.id);

    // console.log(checkButton.checked);


    // adding delete  Button 

    let deleteButton=document.createElement('button');

    deleteButton.innerHTML='<i class="fa-solid fa-circle-minus"></i>';

    deleteButton.classList.add('todo-delete');

    todoItem.appendChild(deleteButton);

    // checking if the value is empty 
    if(inputValue.value === ""){
        alert('Empty Task Cannot be Added');
    }else{
        taskContainer.appendChild(todoItem);
        count++;
    }


    // filter buttons based on the completed ,pending and all
    // we are just changing the display property to filter the todolist elements
    const completed =document.getElementById('completed');

    completed.addEventListener('click',function(){

    checkButton.parentElement.style.display = "flex";

    if(checkButton.value=="false"){
        checkButton.parentElement.style.display = "none";
    }

    })

    const pending =document.getElementById('pending');

    pending.addEventListener('click',function(){
        checkButton.parentElement.style.display = "flex";

    if(checkButton.value=="true"){
        checkButton.parentElement.style.display = "none";
    }

    })

    const all =document.getElementById('all');

    all.addEventListener('click',function(){
        checkButton.parentElement.style.display = "flex";

    })

        inputValue.value="";    
        totalTasks.innerText=count;
    }


addTask.addEventListener('click',addTodo);


// delete task function 

function deleteTask(e){
    let target=e.target;
    
    // console.log(target)

    if( target.classList.contains("todo-delete") ){
        let item =target.parentElement;
        item.remove();
        count--;
        totalTasks.innerText=count;
    }

    if( target.classList.contains("fa-circle-minus") ){
        let item =target.parentElement;
        let itemParent=item.parentElement;
        itemParent.remove();
        count--;
        totalTasks.innerText=count;
    }

    
}

taskContainer.addEventListener('click',deleteTask);


// just made this to toggle the target value changing the target.value in DOM after clicking the checkbox  we made this toggle value so that we can filter the todo list on the basis of completed , pending. if target is checked then its value will be true else false
function toggle(e){

    let target=e.target;

    if( target.classList.contains("todo-check") ){
        if(target.checked==false){

            
            target.value=false;

        }else{
            
            target.value=true;

        }
        
    }
}
document.addEventListener('click',toggle);













