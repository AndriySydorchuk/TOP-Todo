import { addTaskForm } from "./addtaskform.js"
import { toggleElement } from './domhelper.js';

function addTaskModal() {
    const modal = document.getElementById("modal");

    if (!modal) return;

    if (!modal.querySelector(".taskform")) {
        addTaskForm(modal);
    }

    toggleModal();
}

function toggleModal() {
    const modal = document.getElementById("modal")
    const overlay = document.getElementById("overlay");

    if (modal == null) return;

    modal.classList.toggle("active");
    overlay.classList.toggle("active");
}

export function handleModal() {
    const sidebarAddTaskBtn = document.querySelector(".sidebar-newtask-btn");
    sidebarAddTaskBtn.addEventListener("click", () => {
        addTaskModal();
    })

    const overlay = document.getElementById("overlay");
    overlay.addEventListener("click", () => {
        toggleModal();
    })
}