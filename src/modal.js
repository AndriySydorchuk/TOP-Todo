import { addTaskForm } from "./addtaskform.js"

export function addTaskModal() {
    const modal = document.getElementById("modal");
    addTaskForm(modal);

    const modalBtns = document.querySelectorAll("[data-modal-btn]");
    const overlay = document.getElementById("overlay");

    modalBtns.forEach((btn) => {
        btn.addEventListener("click", () => toggleModal())
    })
}

function toggleModal() {
    const modal = document.getElementById("modal")
    const overlay = document.getElementById("overlay");

    if (modal == null) return;

    modal.classList.toggle("active");
    overlay.classList.toggle("active");
}