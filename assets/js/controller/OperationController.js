export default class OperationController {
    constructor(opt, operation = []) {
        this.operation = operation;
        this.onCalculate = opt.onCalculate;
    }
    add(value) {
        if (this.operation.length === 3) {
            this.calculate();
        }
        this.operation.push(value);
        console.log(this.operation);
        return this.length;
    }
    calculate() {
        let result = this.getResult();
        if (result.length > 12) {
            result = result.substring(0, 12);
        }
        this.operation = [result];
        this.onCalculate(result);
    }
    getResult() {
        let result = "0";
        try {
            result = eval(this.operation.join("")).toString();
        }
        catch (error) {
            console.error(error);
            result = "ERROR";
        }
        return result;
    }
    get length() {
        return this.operation.length;
    }
}
//# sourceMappingURL=OperationController.js.map