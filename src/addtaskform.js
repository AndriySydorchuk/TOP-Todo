import { closeOnOutsideClick, createElement, openOnClick, toggleElement, toggleElementByClass, hideElement, showElement } from './domhelper.js';
import { Icons } from './icons.js';

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

    const dateIcon = createElement("span", "date-icon", dateAttr);
    dateIcon.innerHTML = Icons.calendar;

    const dateText = createElement("span", "date-text", dateAttr, "Date");

    const dateInput = createElement("input", "date-input hidden", dateAttr);
    dateInput.type = "date";

    openOnClick(dateAttr, dateInput);
    closeOnOutsideClick(dateInput);

    const removeDateBtn = createElement("button", "removedate-btn hidden", dateAttr, "x");
    removeDateBtn.addEventListener("click", (event) => {
        event.stopPropagation();

        dateInput.value = "";
        dateText.textContent = "Date";

        hideElement(removeDateBtn);
    })

    dateInput.addEventListener("change", () => {
        if (!dateInput.value) return;

        const selectedDate = dateInput.valueAsDate.toString();
        const month = selectedDate.split(" ")[1];
        let day = selectedDate.split(" ")[2];
        if (day.startsWith("0")) day = day.slice(1);

        dateText.textContent = `${day} ${month}`;

        hideElement(dateInput);
        showElement(removeDateBtn);
    })

    //priority
    const priorityAttr = createElement("span", "priority", attrSection);

    const priorityIcon = createElement("span", "priority-icon", priorityAttr);
    priorityIcon.innerHTML = Icons.priorityMain;

    const priorityText = createElement("span", "priority-text", priorityAttr, "Priority");

    const priorityDropdown = createElement("div", "priority-dropdown hidden", priorityAttr);

    Icons.priorities.forEach((priorityIcon, index) => {
        const priorityOption = createElement("a", "priority-dropdown-option", priorityDropdown);

        const priorityOptionIcon = createElement("span", "priority-option-icon", priorityOption);
        priorityOptionIcon.innerHTML = priorityIcon;

        const priorityOptionText = createElement("span", "priority-option-text", priorityOption, `Priority ${index + 1}`);
    })

    openOnClick(priorityAttr, priorityDropdown);
    closeOnOutsideClick(priorityDropdown);

    priorityDropdown.childNodes.forEach(option => {
        option.addEventListener("click", (event) => {
            event.stopPropagation();

            priorityIcon.innerHTML = option.firstElementChild.innerHTML;
            priorityText.textContent = option.lastElementChild.textContent;

            hideElement(priorityDropdown);
        })
    })
}

