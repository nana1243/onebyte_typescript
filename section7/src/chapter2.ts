/*
* map 메서드
* */

const arr = [1,2,3];
const newArr = arr.map(item => item * 2);

function mapV2<T,U>(arr:T[],callback: (item:T)=> U) {
    const result = [];
    for(let i=0; i<(arr).length; i++) {
        result.push(callback((arr)[i] as T));
    }
}
mapV2(arr, item => item*2)
mapV2(['hello','hi'], (item)=> parseInt(item))


/*
* forEach
* */

const arr2 = [1,2,3];
arr2.forEach(item => console.log(item));

function forEachV2<T>(arr:T[], callback:(item:T) => void) {
    for(let i=0; i<arr.length; i++) {
        callback(arr[i] as T);
    }
}

forEachV2(arr2, item => console.log(item));
forEachV2(['hello','hi'], item => console.log(item));