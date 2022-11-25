import DateAndTimeController from "./DateAndTimeController.js";
import DisplayController from "./DisplayController.js";
import OperationController from "./OperationController.js";

export default class CalculatorController {
  constructor(
    private display = new DisplayController(),
    private operation = new OperationController({
      onCalculate: (result: string) => (this.display.content = result),
    })
  ) {
    new DateAndTimeController();
    this.btnEvents();
  }

  btnEvents(): void {
    document.querySelectorAll("#teclado button").forEach((button) => {
      button.addEventListener("click", (e: Event) => {
        const target = e.target as HTMLButtonElement;

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
            this.addOperator(target.dataset.valor as string);
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

  calculate(): void {
    this.operation.calculate();
  }

  addOperation(value: string): void {
    this.operation.add(value);
  }

  addNumber(value: number): void {
    if (isNaN(Number(this.operation.latestPosition))) {
      this.addOperation(value.toString());
    } else {
      value = Number(
        this.operation.latestPosition.toString() + value.toString()
      );
      this.operation.latestPosition = value.toString();
    }

    this.display.content = value.toString();
  }

  addOperator(operator: string): void {
    if (isNaN(Number(this.operation.latestPosition))) {
      this.operation.latestPosition = operator;
    } else {
      if (!this.operation.length) this.addOperation("0");
      this.addOperation(operator);
    }
  }
}
