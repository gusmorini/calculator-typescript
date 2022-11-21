import DateAndTimeController from "./DateAndTimeController.js";
import DisplayController from "./DisplayController.js";

export default class CalculatorController {
  constructor(private display = new DisplayController()) {
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

  addNumberDisplay(value: number): void {
    this.display.content = value.toString();
  }
}
