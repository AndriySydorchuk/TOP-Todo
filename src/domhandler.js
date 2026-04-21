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
        newEl.classList.add(className);
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
        const inputSection = this.createInputSection();

        //attributes
        const inputAttributesSection = this.createElement("div", "section__input-attr");

        inputSection.append(inputAttributesSection);

        container.append(inputSection);

        document.querySelector(".main").append(container);
    }

    createInputSection() {
        const inputSection = this.createElement("div", "section__input");

        const titleInput = this.createElement("input", "section__input-title");
        titleInput.placeholder = "Lorem ipsum dolor sit amet, consectetur";

        const descrInput = this.createElement("input", "section__input-descr");
        descrInput.placeholder = "Description";

        inputSection.append(titleInput, descrInput);
    }
}

export const DomHandler = new DOMHandler();