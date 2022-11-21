export default class DisplayController {
    constructor(elDisplay = document.querySelector("#values")) {
        this.elDisplay = elDisplay;
        this.content = "0";
    }
    set content(value) {
        if (this.elDisplay) {
            if (value.toString().length > 12) {
                value = "ERROR";
            }
            this.elDisplay.innerHTML = value.toString().replace(".", ",");
        }
    }
    get content() {
        return this.elDisplay ? this.elDisplay.innerHTML : "0";
    }
}
//# sourceMappingURL=DisplayController.js.map