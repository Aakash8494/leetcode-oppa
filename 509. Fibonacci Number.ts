
function fib(n: number): number[] {
    let arr: number[] = [0, 1];
    for (let i = 2; i < n; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);
    }
    return arr;
};

console.log('fib(5): ', fib(5));