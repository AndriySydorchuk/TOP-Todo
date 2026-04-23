import { Icons } from "./icons.js";

class DOMHandler {
    constructor() {
        if (DOMHandler.instance) {
            return DOMHandler.instance;
        }

        DOMHandler.instance = this;
    }

    showNewTaskForm() {
        const addTaskBtn = document.querySelector(".addtask-btn");
        addTaskBtn.addEventListener("click", this.createNewTaskForm);
    }

    createElement(tagName, className) {
        const newEl = document.createElement(tagName);
        newEl.classList.add(...className.split(" "));
        return newEl;
    }

    toggleElement(className) {
        document.querySelector(`.${className}`).classList.toggle("hidden");
    }

    createNewTaskForm = () => {
        //clear inital content
        this.toggleElement("empty__state");

        //create new template
        const container = this.createElement("div", "container__addtask");

        //upper input section
        const inputSection = this.createInputSection(container);

        //attributes
        const inputAttributesSection = this.createInputAttrSection(inputSection);

        document.querySelector(".main").append(container);
    }

    createInputSection(parent) {
        const inputSection = this.createElement("div", "section__input");

        const titleInput = this.createElement("input", "section__input-title");
        titleInput.placeholder = "Lorem ipsum dolor sit amet, consectetur";

        const descrInput = this.createElement("input", "section__input-descr");
        descrInput.placeholder = "Description";

        inputSection.append(titleInput, descrInput);

        parent.append(inputSection);

        return inputSection;
    }

    createInputAttrSection(parent) {
        const inputAttrSection = this.createElement("div", "section__input-attr");

        const date = this.createAttr("date", Icons.calendar, "Date", inputAttrSection);

        const priority = this.createAttr("priority", Icons.priority, "Priority", inputAttrSection);

        parent.append(inputAttrSection);

        return inputAttrSection;
    }

    createAttr(className, icon, text, parent) {
        const attr = this.createElement("span", `section__input-attr ${className}`);
        attr.innerHTML = `${icon}${text}`;
        parent.append(attr);
    }
}

export const DomHandler = new DOMHandler();