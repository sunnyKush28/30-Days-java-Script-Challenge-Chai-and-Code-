let tasks = []
let taskFromLocalStorage = localStorage.getItem('tasks')
const taskData = document.getElementById('taskData')

if (taskFromLocalStorage != null) {
    tasks = (JSON.parse(taskFromLocalStorage));

    const showTasks = tasks.map((task) => {


        return (
            `<tr>
                        <td>${task.id}</td>
                        <td>${task.title}</td>
                        <td>${task.description}</td>
                        <!-- <td>Status of Task</td> -->
                        <td>
                            <select name="status" onchange="statusChange(${task.id})" id='${task.id}'>
                                <option value="" selected disabled>${task.status}</option>
                                <option value="Running">Running</option>
                                <option value="Completed">Completed</option>
                                <option value="Hold">Hold</option>
                            </select>
                        </td>
                        <td><button class="edit"  onclick="handleEdit(${task.id})"><i class="fa-solid fa-pen"></i></button></td>
                        <td><button class="deleteBtn"  onclick="handleModel(${task.id})"><i class="fa-solid fa-trash-can"></i></button></td>
                    </tr>`
        )
    }).join('')

    taskData.innerHTML = showTasks

    taskData.innerHTML = showTasks
}

console.log(tasks);

const formData = document.getElementById('formData')

formData.addEventListener('submit', (e) => {
    e.preventDefault()

    const getFormData = new FormData(formData)


    // for (let [key, value] of getFormData.entries()) {
    //     console.log(`${key}: ${value}`);
    // }

    let id = tasks.length + 1;

    tasks.push({
        id: id,
        title: getFormData.get('title'),
        description: getFormData.get('description'),
        complitiondate: getFormData.get('complitiondate'),
        status: "Running"
    })


    localStorage.setItem('tasks', JSON.stringify(tasks))

    const showTasks = tasks.map((task) => {


        return (
            `<tr>
                        <td>${task.id}</td>
                        <td>${task.title}</td>
                        <td>${task.description}</td>
                        <!-- <td>Status of Task</td> -->
                        <td>
                            <select name="status" onchange="statusChange(${task.id})" id='${task.id}'>
                                <option value="" selected disabled>${task.status}</option>
                                <option value="Running">Running</option>
                                <option value="Completed">Completed</option>
                                <option value="Hold">Hold</option>
                            </select>
                        </td>
                        <td><button class="edit" onclick="handleEdit(${task.id})"><i class="fa-solid fa-pen"></i></button></td>
                        <td><button class="deleteBtn" onclick="handleModel(${task.id})"><i class="fa-solid fa-trash-can"></i></button></td>
                    </tr>
`
        )
    }).join('')

    taskData.innerHTML = showTasks

})

const statusChange = (id) => {
    const select = document.getElementById(id).value
    // console.log(select);

    let task = tasks.find(task => task.id === id)
    if (task) {
        task.status = select
    }
    localStorage.setItem('tasks', JSON.stringify(tasks))


}

const handleModel = (id) => {
    const deleteBtn = document.getElementsByClassName('deleteBtn')
    console.log(deleteBtn);
    Array.from(deleteBtn).forEach(element => {
        console.log(element);
        element.setAttribute('disabled', 'true')
    });


    const modeldiv = document.getElementById('modeldiv')

    const div = document.createElement('div')
    div.className = 'modal'

    const close = document.createElement('p')
    close.innerHTML = '<button class="edit" onclick="closeModel()"><i class="fa-solid fa-xmark"></i></button>'
    div.appendChild(close)
    const h4 = document.createElement('h4')
    const button = document.createElement('div')

    h4.textContent = 'Conform Delete'
    button.textContent = 'Delete'
    button.setAttribute('onclick', `handleDelete(${id})`)
    button.className = 'delete'

    div.appendChild(h4)
    div.appendChild(button)

    modeldiv.appendChild(div)
}

const handleDelete = (id) => {
    const deleteBtn = document.getElementsByClassName('deleteBtn')
    const modeldiv = document.getElementById('modeldiv')

    tasks = tasks.filter(task => task.id != id);
    localStorage.setItem('tasks', JSON.stringify(tasks))

    const showTasks = tasks.map((task) => {


        return (
            `<tr>
                        <td>${task.id}</td>
                        <td>${task.title}</td>
                        <td>${task.description}</td>
                        <!-- <td>Status of Task</td> -->
                        <td>
                            <select name="status" onchange="statusChange(${task.id})" id='${task.id}'>
                                <option value="" selected disabled>${task.status}</option>
                                <option value="Running">Running</option>
                                <option value="Completed">Completed</option>
                                <option value="Hold">Hold</option>
                            </select>
                        </td>
                        <td><button class="edit" onclick="handleEdit(${task.id})"><i class="fa-solid fa-pen"></i></button></td>
                        <td><button class="deleteBtn" onclick="handleModel(${task.id})"><i class="fa-solid fa-trash-can"></i></button></td>
                    </tr>
`
        )
    }).join('')

    taskData.innerHTML = showTasks

    Array.from(deleteBtn).forEach(element => {

        element.removeAttribute('disabled')
    });

    modeldiv.innerHTML = ''
}

const closeModel = () => {
    const deleteBtn = document.getElementsByClassName('deleteBtn')
    const modeldiv = document.getElementById('modeldiv')
    Array.from(deleteBtn).forEach(element => {

        element.removeAttribute('disabled')
    });

    modeldiv.innerHTML = ''
}

const handleEdit = (id) => {
    const modeldiv = document.getElementById('modeldiv')

    const div = document.createElement('div')
    div.className = 'modalUpdate'


    let task = tasks.filter(task => task.id === id);



    div.innerHTML =
        `<button class="closeUpdate" onclick="closeModel()"><i class="fa-solid fa-xmark"></i></button>
        <form class="formEdit" id="update">
                <div class="input">
                    <input type="text" name="title" placeholder="Task Title" required" value="${task[0].title}">
                    <input type="text" name="description" placeholder="Task Description" required value="${task[0].description}">


                    <label for="" style="font-size: 1.2rem;">Task Completion Date</label>
                    <input type="date" name="complitiondate" required value="${task[0].complitiondate}">

                </div>
                <div class="buttonSubmit">
                    <button type="submit" class="delete" onclick='updateData(${task[0].id})'>Submit</button>
                </div>
            </form>`
    modeldiv.appendChild(div)

}

const updateData = (id) => {
    const update = document.getElementById('update')


    update.addEventListener('submit', (e) => {
        // e.preventDefault()
        const formData = new FormData(update)

        let task = tasks.find(task => task.id === id)

        task.title = formData.get('title')
        task.description = formData.get('description')
        task.complitiondate = formData.get('complitiondate')


        localStorage.setItem('tasks', JSON.stringify(tasks))
    })
}




