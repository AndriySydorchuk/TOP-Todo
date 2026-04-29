import { closeOnOutsideClick, createElement, openOnClick, toggleElement, toggleElementByClass } from './domhelper.js';

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

        dateAttr.textContent = `${day} ${month}`;
    })

    attrSection.append(dateAttr);

    //priority
    const priorityAttr = createElement("span", "priority");
    priorityAttr.textContent = "Priority";

    const priorityDropdown = createElement("div", "priority-dropdown hidden");

    for (let i = 0; i < 4; i++) {
        const priorityOption = createElement("a", "priority-dropdown-option");
        priorityOption.textContent = `Priority ${i}`;

        priorityDropdown.append(priorityOption);
    }

    priorityAttr.append(priorityDropdown);

    openOnClick(priorityAttr, priorityDropdown);
    closeOnOutsideClick(priorityDropdown);

    attrSection.append(priorityAttr);

    return attrSection;
}

