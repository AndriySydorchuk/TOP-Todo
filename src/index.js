import "./style.css";
import { addTaskForm } from "./addtaskform";
import { addTaskModal } from './modal';
import { handleNavTabs } from './navtabs';
import { toggleElementByClass } from './domhelper';

document.addEventListener("DOMContentLoaded", () => {
    handleNavTabs();

    const addTaskBtn = document.querySelector(".addtask-btn");
    addTaskBtn.addEventListener("click", () => {
        toggleElementByClass("empty-state");

        const main = document.querySelector(".main");
        addTaskForm(main);
    })

    const sidebarAddTaskBtn = document.querySelector(".sidebar-newtask-btn");
    sidebarAddTaskBtn.addEventListener("click", () => addTaskModal())
})