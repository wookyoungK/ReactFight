function* f1() {
    yield 10;
    yield 20;
    return 'finished';
}
for (const v of f1()){
    console.log(v);
}

const arr = [...f1()];
console.log(arr);