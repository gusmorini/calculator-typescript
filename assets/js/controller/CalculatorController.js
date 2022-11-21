import DateAndTimeController from "./DateAndTimeController.js";
import DisplayController from "./DisplayController.js";
export default class CalculatorController {
    constructor(display = new DisplayController()) {
        this.display = display;
        new DateAndTimeController();
        this.btnEvents();
    }
    btnEvents() {
        document.querySelectorAll("#teclado button").forEach((button) => {
            button.addEventListener("click", (e) => {
                const target = e.target;
                switch (target.id) {
                    case "um":
                    case "dois":
                    case "tres":
                    case "quatro":
                    case "cinco":
                    case "seis":
                    case "sete":
                    case "oito":
                    case "nove":
                    case "zero":
                        this.addNumberDisplay(Number(target.dataset.valor));
                        break;
                    case "adicao":
                    case "subtracao":
                    case "multiplicacao":
                    case "divisao":
                        break;
                    case "ponto":
                        break;
                    case "limpar":
                        break;
                    case "desfazer":
                        break;
                    case "porcentagem":
                        break;
                    case "igual":
                        break;
                }
            });
        });
    }
    addNumberDisplay(value) {
        this.display.content = value.toString();
    }
}
//# sourceMappingURL=CalculatorController.js.map