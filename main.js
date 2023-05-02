

window.addEventListener('load', () => { // (<) On load all the code inside this function will excecute.
    const form = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const list_el = document.querySelector('#tasks');

  form.addEventListener('submit', (e) => { //(<) When form is submitted all the code inside it will execute.
    e.preventDefault();

    const task = input.value; // (<) task is equal to whatever text is type inside the forms input.

  

    if (!task) {
        alert('Please fill out the task')
        return;
    } 

    const task_el = document.createElement("div"); 
    task_el.classList.add("task");
    //18-19 (^) When submitted creates a div: with class "task"

    const check_el = document.createElement("div") // (<) Creates a div for checking off
    check_el.classList.add("check") // (<) add div to class
    task_el.appendChild(check_el)

    task_el.addEventListener('click', () => {
        check_el.classList.add("checked")
        strike()
    })

    const task_content_el = document.createElement("div");
    task_content_el.classList.add("content");
    //22-23 (^) When submitted creates a div: with class "content"

    task_el.appendChild(task_content_el)
    //26 (^) Adds the div with class "task"(task_el) and puts the div with class "content" (task_content_el) inside it.

    const task_input_el = document.createElement("input") // (<) Creates an input element.
    task_input_el.classList.add("text") // (<) Adds the "text" class to input element.
    task_input_el.classList.type = "text" // (<) Sets the type of value input to "text".
    task_input_el.value = task; // (<) Sets the value to task.
    task_input_el.setAttribute("readonly", "readonly"); // (<) Sets an attribute of readonly to task (CANNOT BE MOTIFIED)

    function strike() {
        task_input_el.classList.add('strike')
    }

    task_content_el.appendChild(task_input_el)
     //36 (^)  Adds the input with class "text" inside the div with the class "content"
 
    const task_actions_el = document.createElement("div");
    task_actions_el.classList.add("actions");
    //39-40 (^) Creates a div with a class "actions"

    const task_edit_el = document.createElement("button")
    task_edit_el.classList.add("edit");
    task_edit_el.innerHTML = "Edit";
    //43-45 (^) Creates a button, adds a class of "list" and sets the innerHTML to "Edit".
  
    const task_delete_el = document.createElement("button");
    task_delete_el.classList.add("delete")
    task_delete_el.innerHTML = "Delete";
    //48 - 50 (^) Creates a button, adds a class of "delete" and sets the innerHTML to "Delete".
 
    task_actions_el.appendChild(task_edit_el); // (<) Makes the "edit" element a child of "actions" element.
    task_actions_el.appendChild(task_delete_el); // (<) Makes the "delete" element a child of "actions" element.

    task_el.appendChild(task_actions_el); // (<) Makes the "actions" element the child of "task" element.

    list_el.appendChild(task_el); // (<) Makes "task" element the child of "list" element.
   

    input.value = ""; // (<) Clears the input value.

    task_edit_el.addEventListener('click', () => { // (<) This finction will execute all code below if "edit" button is clicked.
        if (task_edit_el.innerText.toLowerCase() == "edit") { // (<) IF innertext is =  "edit" execute following code:
            task_input_el.removeAttribute("readonly"); // (<) Removes the attribute of readonly.
            task_input_el.focus();  // (<) Sets focus on task input textfield.
            task_edit_el.innerText = "Save"; // (<) Changes innerText to "save" if "edit" button is clicked.
               } else {
                task_input_el.setAttribute("readonly", "readonly");
                task_edit_el.innerText = "Edit";
               }       
       });
    task_delete_el.addEventListener('click', () => { // 73-74 (<) Will delete the entire task element if clicked.
        list_el.removeChild(task_el);
     });
   })
})