class NumberList{
    constructor(private list:number[]) {
    }
    push(value:number){
        this.list.push(value);
    }
    pop():number | undefined{
        return this.list.pop();
    }
    print():number[]{
        return this.list;
    }
}

/*Generic으로 만들어 보자*/
class List<T>{
    constructor(private list:T[]) {
    }
    push(value:T){
        this.list.push(value);
    }
    pop():T | undefined{
        return this.list.pop();
    }
    print():T[]{
        return this.list;
    }
}

const numberList = new List<number>([1,2,3]);
numberList.push(4);
numberList.pop();
console.log(numberList.print());

const stringList = new List<string>(['h','a','b']);
stringList.push('c');
stringList.pop();
console.log(stringList.print());
