function add(){
    const input = document.getElementById('task-input');
    // to remove white space 
    const taskText = input.value.trim();
    // if empty
    if (taskText === '') {
        alert('Enter a new task');
        return;
    }
    else{
        // create new task
        const li = document.createElement('li');
        li.textContent = taskText;
        // delete btn
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.onClick = function(){ li.remove()};

        // to combine the li and the deleteBtn
        li.appendChild(deleteBtn);
        // to put the new task below the previous task
        document.getElementById('tasklist').appendChild(li);
        // to clear input bar
        input.value = '';
    }

}