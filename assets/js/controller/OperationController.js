export default class OperationController {
    constructor(operation = []) {
        this.operation = operation;
    }
    add(value) {
        this.operation.push(value);
        console.log(this.operation);
        return this.length;
    }
    get length() {
        return this.operation.length;
    }
}
//# sourceMappingURL=OperationController.js.map