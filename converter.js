function  convertToBinary(input) {
    let resultInBinary = ""
    while (input > 0){
        resultInBinary = (input % 2) + resultInBinary
        input = Math.floor(input/2);
    }

    return resultInBinary
     
}


