export default class {
    constructor() {
        this.PI = 3.145467;
    }

    sum(...numbers){
        return numbers.reduce((number, total)=> number+total);
    }

    multi(...numbers){
        return numbers.reduce((number, total)=> number*total);
    }
}
