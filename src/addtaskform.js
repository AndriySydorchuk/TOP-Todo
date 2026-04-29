import { closeOnOutsideClick, createElement, openOnClick, toggleElement, toggleElementByClass } from './domhelper.js';
import { Icons } from "./icons.js";

export function addTaskForm(parent) {
    const taskform = createElement("div", "taskform");

    const inputSection = createTaskInput();
    const attrSection = createTaskAttr();

    taskform.append(inputSection, attrSection);

    parent.append(taskform);
}

function createTaskInput() {
    const inputSection = createElement("div", "taskform-input");

    const titleInput = createElement("input", "title-input");
    titleInput.placeholder = "Lorem ipsum dolor sit amet, consectetur";

    const descrInput = createElement("input", "descr-input");
    descrInput.placeholder = "Description";

    inputSection.append(titleInput, descrInput);

    return inputSection;
}

function createTaskAttr() {
    const attrSection = createElement("div", "taskform-attr");

    //date
    const dateAttr = createElement("div", "date");
    dateAttr.textContent = "Date";

    const dateInput = createElement("input", "date-input hidden");
    dateInput.type = "date";
    dateAttr.append(dateInput);

    openOnClick(dateAttr, dateInput);
    closeOnOutsideClick(dateInput);

    dateInput.addEventListener("change", () => {
        const selectedDate = dateInput.valueAsDate.toString();
        const month = selectedDate.split(" ")[1];
        let day = selectedDate.split(" ")[2];
        if (day.startsWith("0")) day.slice(1);

        dateAttr.innerHTML = `${Icons.calendar}${day} ${month}`;

        const removeDateBtn = createElement("span", "remove-date-btn");
        removeDateBtn.innerHTML = Icons.x;
        removeDateBtn.addEventListener("click", () => {
            dateInput.value = "";
            dateAttr.innerHTML = `${Icons.calendar}Date`;
        });

        dateAttr.append(removeDateBtn);
    })


    attrSection.append(dateAttr);

    //priority
    const priorityAttr = createElement("span", "priority");
    priorityAttr.innerHTML = `${Icons.priorityMain}Priority`;

    const priorityDropdown = createElement("div", "priority-dropdown hidden");

    Icons.priorities.forEach((priorityIcon, index) => {
        const priorityOption = createElement("a", "priority-dropdown-option");
        priorityOption.innerHTML = `${Icons.priorities[index]}Priority ${index++}`;

        priorityDropdown.append(priorityOption);
    })

    priorityAttr.append(priorityDropdown);

    openOnClick(priorityAttr, priorityDropdown);
    closeOnOutsideClick(priorityDropdown);

    attrSection.append(priorityAttr);

    return attrSection;
}

