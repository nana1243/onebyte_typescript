/*Generic*/

function func<T>(value:T) :T{
    return value;
}

const result1 = func<string>('hello');
const result2 = func<number>(123);
const result3 = func<boolean>(true);