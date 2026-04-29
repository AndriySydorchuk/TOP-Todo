import { closeOnOutsideClick, createElement, openOnClick, toggleElement, toggleElementByClass } from './domhelper.js';

export function addTaskForm(parent) {
    const taskform = createElement("div", "taskform", parent);

    createTaskInput(taskform);
    createTaskAttr(taskform);
}

function createTaskInput(parent) {
    const inputSection = createElement("div", "taskform-input", parent);

    const titleInput = createElement("input", "title-input", inputSection);
    titleInput.placeholder = "Lorem ipsum dolor sit amet, consectetur";

    const descrInput = createElement("input", "descr-input", inputSection);
    descrInput.placeholder = "Description";
}

function createTaskAttr(parent) {
    const attrSection = createElement("div", "taskform-attr", parent);

    //date
    const dateAttr = createElement("div", "date", attrSection);

    const dateText = createElement("span", "date-text", dateAttr, "Date");

    const dateInput = createElement("input", "date-input hidden", dateAttr);
    dateInput.type = "date";

    openOnClick(dateAttr, dateInput);
    closeOnOutsideClick(dateInput);

    dateInput.addEventListener("change", () => {
        const selectedDate = dateInput.valueAsDate.toString();
        const month = selectedDate.split(" ")[1];
        let day = selectedDate.split(" ")[2];
        if (day.startsWith("0")) day = day.slice(1);

        dateText.textContent = `${day} ${month}`;
        dateInput.classList.toggle("hidden");
    })

    //priority
    const priorityAttr = createElement("span", "priority", attrSection, "Priority");

    const priorityDropdown = createElement("div", "priority-dropdown hidden", priorityAttr);

    //magic number
    for (let i = 0; i < 4; i++) {
        const priorityOption = createElement("a", "priority-dropdown-option", priorityDropdown, `Priority ${i}`);
    }

    openOnClick(priorityAttr, priorityDropdown);
    closeOnOutsideClick(priorityDropdown);
}

