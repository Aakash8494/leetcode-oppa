
function fibrecur(n: number): number {
    if (n < 2) return n;

    return fibrecur(n - 1) + fibrecur(n - 2);
};

console.log('fibrecur(6): ', fibrecur(6));