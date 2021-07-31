function* naturalNumbers() {
    let v =1;
    while(true){
        yield v++;
    }
}