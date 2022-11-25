import DateAndTimeController from "./DateAndTimeController.js";
import DisplayController from "./DisplayController.js";
import OperationController from "./OperationController.js";
export default class CalculatorController {
    constructor(display = new DisplayController(), operation = new OperationController({
        onCalculate: (result) => (this.display.content = result),
    })) {
        this.display = display;
        this.operation = operation;
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
                        this.addNumber(Number(target.dataset.valor));
                        break;
                    case "adicao":
                    case "subtracao":
                    case "multiplicacao":
                    case "divisao":
                        this.addOperator(target.dataset.valor);
                        break;
                    case "ponto":
                        break;
                    case "limpar":
                        this.display.content = "0";
                        this.operation.clean();
                        break;
                    case "desfazer":
                        break;
                    case "porcentagem":
                        break;
                    case "igual":
                        this.calculate();
                        break;
                }
            });
        });
    }
    calculate() {
        this.operation.calculate();
    }
    addOperation(value) {
        this.operation.add(value);
    }
    addNumber(value) {
        if (isNaN(Number(this.operation.latestPosition))) {
            this.addOperation(value.toString());
        }
        else {
            value = Number(this.operation.latestPosition.toString() + value.toString());
            this.operation.latestPosition = value.toString();
        }
        this.display.content = value.toString();
    }
    addOperator(operator) {
        if (isNaN(Number(this.operation.latestPosition))) {
            this.operation.latestPosition = operator;
        }
        else {
            if (!this.operation.length)
                this.addOperation("0");
            this.addOperation(operator);
        }
    }
}
//# sourceMappingURL=CalculatorController.js.map