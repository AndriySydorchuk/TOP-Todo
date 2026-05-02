import "./style.css";
import { handleTaskForm } from "./addtaskform";
import { handleModal } from './modal';
import { handleNavTabs } from './navtabs';
import { toggleElementByClass } from './domhelper';

document.addEventListener("DOMContentLoaded", () => {
    handleNavTabs();
    handleTaskForm();
    handleModal();
});