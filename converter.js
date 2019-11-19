function convertToBinary(input) {
    let resultInBinary = "";
    while (input > 0){
        resultInBinary = (input % 2) + resultInBinary;
        input = Math.floor(input/2);
    }

    return resultInBinary;
     
}


function convertToHexa(input) {
    let resultInHexa = ""
    while (input > 0){
        switch(input % 16) {
            case 10:
                resultInHexa = "A" + resultInHexa
                break;
            case 11:
                resultInHexa = "B" + resultInHexa
                break;
            case 12:
                resultInHexa = "C" + resultInHexa
                break;
            case 13:
                resultInHexa = "D" + resultInHexa
                break;
            case 14:
                resultInHexa = "E" + resultInHexa
                break;
            case 15:
                resultInHexa = "F" + resultInHexa
                break;
            default:
                resultInHexa = (input % 16) + resultInHexa;
        }
        
        input = Math.floor(input/16);
        
    }
    return resultInHexa;
}