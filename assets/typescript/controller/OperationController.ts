interface ICalculate {
  onCalculate: any;
}

export default class OperationController {
  private onCalculate: any;

  constructor(opt: ICalculate, private operation: string[] = []) {
    this.onCalculate = opt.onCalculate;
  }

  clean(): void {
    this.operation = [];
  }

  add(value: string): number {
    if (this.operation.length === 3) {
      this.calculate();
    }
    this.operation.push(value);
    console.log(this.operation);
    return this.length;
  }

  calculate(): void {
    let result = this.getResult();
    if (result.length > 12) {
      result = result.substring(0, 12);
    }
    this.operation = [result];
    this.onCalculate(result);
  }

  getResult(): string {
    let result: string = "0";
    try {
      result = eval(this.operation.join("")).toString();
    } catch (error) {
      console.error(error);
      result = "ERROR";
    }
    return result;
  }

  get latestPosition(): string {
    return this.operation.length
      ? this.operation[this.operation.length - 1]
      : "0";
  }

  set latestPosition(value: string) {
    const index = this.operation.length ? this.operation.length - 1 : 0;
    this.operation[index] = value;
  }

  get length(): number {
    return this.operation.length;
  }
}
