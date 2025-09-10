let tasks = []

let add_notes_button = document.querySelector("#add-notes-button")
let targetElement = document.querySelector(".add-notes-pop-up")
let closeButton = document.querySelector('#close-pop-up')
let taskForm = document.querySelector("#task-form")
let addNotesFormContainer = document.querySelector(".add-notes-form")

function showAddNotesPopup() {
    targetElement.classList.add("active")
}

function closeAddNotesPopup() {
    targetElement.classList.remove("active")
}

add_notes_button.addEventListener('click', showAddNotesPopup)
closeButton.addEventListener('click', closeAddNotesPopup)

addNotesFormContainer.addEventListener("mouseleave", () => {
    document.getElementById("formSubmitButton").click()
})

let taskObject = {
    title: "",
    description: "",
    timeStamp: ""
}

taskForm.addEventListener('submit', e => {
    e.preventDefault()
    const title = e.target.title.value.trim()
    const description = e.target.description.value.trim()

    if (!title || !description) return console.log("empty fields!")

    tasks.push({
        title,
        description,
        timeStamp: `T: ${new Date().toLocaleTimeString()} D: ${new Date().toLocaleDateString()}`
    })

    e.target.reset()
    closeAddNotesPopup()
    displayTask()
})

function displayTask() {
    const tasksHTML = tasks.map(task => `
        <div class="task border p-4">
            <h4 class="title">${task.title}</h4>
            <p class="description">${task.description}</p>
            <span class="timeStamp">${task.timeStamp}</span>
        </div>
    `).join("")

    document.querySelector('.tasks-container').innerHTML = tasksHTML
}

