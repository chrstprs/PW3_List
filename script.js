document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('taskForm');
    const taskList = document.getElementById('taskList');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const taskInput = document.getElementById('taskInput').value.trim();
        if (taskInput !== '') {
            addTask(taskInput);
            form.reset();
        }
    });
    taskList.addEventListener('click', function(event) {
        const target = event.target;
        if (target.classList.contains('delete')) {
            target.parentElement.remove();
        } else if (target.classList.contains('complete')) {
            target.parentElement.classList.toggle('completed');
        } else if (target.classList.contains('edit')) {
            const newText = prompt('Enter new text:');
            if (newText !== null && newText.trim() !== '') {
                target.parentElement.firstChild.textContent = newText.trim();
            }
        }
    });
    function addTask(taskInput) {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.innerHTML = `
            ${taskInput}
            <button class="btn btn-warning btn-sm float-right edit">Edit</button>
            <button class="btn btn-danger btn-sm float-right delete">Delete</button>
            <button class="btn btn-success btn-sm float-right complete">Complete</button>
        `;
        taskList.appendChild(li);
    }
});
