export default class OperationController {
  constructor(private operation: string[] = []) {}

  add(value: string): number {
    this.operation.push(value);
    console.log(this.operation);
    return this.length;
  }

  get length(): number {
    return this.operation.length;
  }
}
