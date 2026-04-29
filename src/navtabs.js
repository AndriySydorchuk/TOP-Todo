export function handleNavTabs() {
    const tabs = document.querySelectorAll('[class*="list-item"]');
    const projectsTab = document.querySelector(".projects-list-title");

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