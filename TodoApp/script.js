const showNote = document.querySelector('.showNote');
const addButton = document.getElementById('addButton')
const addInput = document.getElementById('addInput')
const todoList = document.getElementById('todoList')
const message = document.querySelector('.message');
const empty = document.getElementById('empty')
const checkbox = document.querySelector('.checkbox');

let countTodo = 0;

//Creating a Li
const newList = (note) => {
    // create a li
    const li = document.createElement('li');
    li.setAttribute('class', 'note')

    // create a p for todo text
    const p = document.createElement('p');
    p.innerHTML = `${note}`;
    li.appendChild(p);

    const status = document.createElement("INPUT");
    status.setAttribute("type", "checkbox");
    status.className = "userCheck"
    li.appendChild(status);

    // create a edit btn
    const editBtn = document.createElement('button');
    editBtn.classList.add("edit", "btn")
    editBtn.innerHTML = "Edit"
    li.appendChild(editBtn);

    // create a delete btn
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add("delete", 'btn');
    deleteBtn.innerHTML = "Delete"
    li.appendChild(deleteBtn);

    showNote.appendChild(li);

    //for scrollBar
    countTodo++;
    if (countTodo > 5) {
        showNote.style.overflowY = 'scroll';
    }

    //PopUp MSG
    message.innerHTML = '<p>Todo added Successfully!!</p>';
    message.style.display = 'block';

    setTimeout(() => {
        message.style.display = 'none';
    }, 1000);
}

//Passing the li Value
const userNote = () => {
    addButton.innerHTML = "Add";
    const text = addInput.value.trim();
    if (text.length > 0) {
        addInput.value = "";
        newList(text)
        empty.style.display = 'none';
    }
    else {
        //PopUp MSG
        message.innerHTML = '<p>Please Enter a Todo ?</p>';
        message.children[0].style.backgroundColor = 'red';
        message.style.display = 'block';
        setTimeout(() => {
            message.style.display = 'none';
        }, 1000);
    }
}


//add the listener
addButton.addEventListener('click', userNote)

// more functonality
const updateTodo = (e) => {
    // console.log(e.target);
    if (e.target.innerHTML === 'Delete') {
        todoList.removeChild(e.target.parentElement);
        //PopUp MSG
        message.innerHTML = '<p>Todo Deleted Successfully!</p>';
        message.children[0].style.backgroundColor = 'orange';
        message.style.display = 'block';
        setTimeout(() => {
            message.style.display = 'none';
        }, 1000);
    }

    if (e.target.innerHTML === 'Edit') {
        addButton.innerHTML = "Edit";
        addInput.value = e.target.parentElement.firstElementChild.innerHTML;
        todoList.removeChild(e.target.parentElement);
    }

    //for status means complete todo
    if (e.target.checked == true) {
        e.target.parentElement.style.backgroundColor = '#9b60d1';
    } else {
        e.target.parentElement.style.backgroundColor = '#E8F0FE';
    }
}

todoList.addEventListener('click', updateTodo)




















// (() => {
//     console.log('IIFE CALLED!!!');
// })();

