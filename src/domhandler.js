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
        addTaskBtn.addEventListener("click", () => {
            this.toggleElement("empty__state");
            this.createNewTaskForm(document.querySelector(".main"));
        });
    }

    createElement(tagName, className) {
        const newEl = document.createElement(tagName);
        newEl.classList.add(...className.split(" "));
        return newEl;
    }

    toggleElement(className) {
        document.querySelector(`.${className}`).classList.toggle("hidden");
    }

    createNewTaskForm = (parent) => {
        //create new template
        const container = this.createElement("div", "container__addtask");

        //upper input section
        const inputSection = this.createInputSection(container);

        //attributes
        const inputAttributesSection = this.createInputAttrSection(inputSection);

        parent.append(container);
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

        const date = this.createElement("span", "section__input-attr date");
        date.innerHTML = `${Icons.calendar}Date`;

        const dateInput = this.createElement("input", "section__input-attr date-input");
        dateInput.type = "date";
        dateInput.classList.add("hidden");
        date.append(dateInput);

        date.addEventListener("click", (e) => {
            e.stopPropagation();
            dateInput.classList.remove("hidden");
        });

        document.body.addEventListener("click", (e) => {
            e.stopPropagation();
            dateInput.classList.add("hidden");
        })

        inputAttrSection.append(date);

        const priority = this.createAttr("priority", Icons.priority, "Priority", inputAttrSection);

        parent.append(inputAttrSection);

        return inputAttrSection;
    }

    createAttr(className, icon, text, parent) {
        const attr = this.createElement("span", `section__input-attr ${className}`);
        attr.innerHTML = `${icon}${text}`;
        parent.append(attr);
    }

    handleNavTabs() {
        const tabs = document.querySelectorAll('[class*="list-item"]');
        const projectsTab = document.querySelector(".projects__list-title");

        tabs.forEach(tab => {
            tab.addEventListener("click", () => {
                tabs.forEach(tab => tab.classList.remove("list-item-active"));
                projectsTab.classList.remove("list-item-active");

                tab.classList.add("list-item-active");
                //show tab content
            })
        })

        projectsTab.addEventListener("click", () => {
            tabs.forEach(tab => tab.classList.remove("list-item-active"));
            projectsTab.classList.add("list-item-active");
        })

    }

    switchNavTab() {

    }

    handleAddTaskModal() {
        const modal = document.getElementById("modal");
        this.createNewTaskForm(modal);

        const modalBtns = document.querySelectorAll("[data-modal-btn]");
        const overlay = document.getElementById("overlay");

        modalBtns.forEach(btn => {
            btn.addEventListener("click", () => this.toggleModal());
        });

        overlay.addEventListener("click", () => this.toggleModal());
    }

    toggleModal() {
        const modal = document.getElementById("modal");
        const overlay = document.getElementById("overlay");

        if (modal == null) return;
        modal.classList.toggle("active");
        overlay.classList.toggle("active");
    }
}

export const DomHandler = new DOMHandler();