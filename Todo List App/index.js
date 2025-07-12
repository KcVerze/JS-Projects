function add(){
    const input = document.getElementById('task-input');
    // to remove white space 
    const taskValue = input.value.trim();
    // if empty
    if (taskValue=== '') {
        alert('Enter a new task');
        return;
    }
        // create new task
        const li = document.createElement('li');
        // the actual task container
        const taskText = document.createElement('span');
        taskText.textContent = taskValue;
        // delete btn
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = function(){ li.remove();};

        // assemble the li with the task text and delete btn
        li.appendChild(taskText);
        li.appendChild(deleteBtn);
        // to put the new task below the previous task
        document.getElementById('taskList').appendChild(li);
        // to clear input bar
        input.value = '';

        //checked or unchecked
        taskText.onclick = function(){taskText.classList.toggle("completed");};

        // edit text
        taskText.ondblclick = function(){
            input.value = taskText.textContent;
            li.remove();
        };
}