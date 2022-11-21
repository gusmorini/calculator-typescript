export default class DateAndTimeController {
    constructor(elDate = document.querySelector("#datetime > div:nth-child(2)"), elTime = document.querySelector("#datetime time")) {
        this.elDate = elDate;
        this.elTime = elTime;
        this.render();
        setInterval(() => this.render(), 1000);
    }
    set date(content) {
        if (this.elDate) {
            this.elDate.innerHTML = content;
        }
    }
    set time(content) {
        if (this.elTime) {
            this.elTime.innerHTML = content;
        }
    }
    render() {
        const currentDate = new Date();
        const day = currentDate.getDate();
        const month = currentDate.toLocaleDateString("pt-BR", {
            month: "long",
        });
        const year = currentDate.getFullYear();
        const hour = currentDate.getHours();
        const minutes = currentDate.getMinutes().toString().padStart(2, "0");
        const separator = currentDate.getSeconds() % 2 === 0 ? ":" : " ";
        this.date = `${day} ${month} ${year}`;
        this.time = `${hour}${separator}${minutes}`;
    }
}
//# sourceMappingURL=DateAndTimeController.js.map