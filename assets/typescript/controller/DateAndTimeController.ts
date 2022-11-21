export default class DateAndTimeController {
  constructor(
    private elDate: HTMLDivElement | null = document.querySelector(
      "#datetime > div:nth-child(2)"
    ),
    private elTime: HTMLTimeElement | null = document.querySelector(
      "#datetime time"
    )
  ) {
    this.render();
    setInterval(() => this.render(), 1000);
  }

  set date(content: string) {
    if (this.elDate) {
      this.elDate.innerHTML = content;
    }
  }

  set time(content: string) {
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
