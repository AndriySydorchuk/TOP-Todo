export function createElement(tagName, className, parent, textContent = "") {
    const newElement = document.createElement(tagName);
    newElement.classList.add(...className.split(" "));
    newElement.textContent = textContent;
    parent.append(newElement);

    return newElement;
}

export function toggleElement(element) {
    element.classList.toggle("hidden");
}

export function toggleElementByClass(className) {
    const element = document.querySelector(`.${className}`);
    element.classList.toggle("hidden");
}

export function openOnClick(targetElement, elementToOpen) {
    targetElement.addEventListener("click", (event) => {
        event.stopPropagation();

        toggleElement(elementToOpen);
    })
}

export function closeOnOutsideClick(element) {
    document.body.addEventListener("click", (event) => {
        if (!element.classList.contains("hidden")) {
            toggleElement(element);
        }
    })
}