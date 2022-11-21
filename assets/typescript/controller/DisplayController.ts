export default class DisplayController {
  constructor(
    private elDisplay: HTMLDivElement | null = document.querySelector("#values")
  ) {
    this.content = "0";
  }

  set content(value: string) {
    if (this.elDisplay) {
      if (value.toString().length > 12) {
        value = "ERROR";
      }
      this.elDisplay.innerHTML = value.toString().replace(".", ",");
    }
  }

  get content(): string {
    return this.elDisplay ? this.elDisplay.innerHTML : "0";
  }
}
