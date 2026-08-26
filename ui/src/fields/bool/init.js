import { input } from "./input";
import { settings } from "./settings";
import { view } from "./view";

window.app = window.app || {};
window.app.fieldTypes = window.app.fieldTypes || {};
window.app.fieldTypes.bool = {
    icon: "ri-toggle-line",
    label: "Bool",
    settings,
    input,
    view,
    dummyData: (f, forSubmit = false) => {
        return (typeof crypto !== "undefined" && typeof crypto.getRandomValues === "function")
            ? (crypto.getRandomValues(new Uint8Array(1))[0] & 1) === 1
            : Math.random() < 0.5;
    },
};
