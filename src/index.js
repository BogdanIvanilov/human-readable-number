module.exports = function toReadable (number) {
    let arr1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven','twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let arr2 = [];
    let arr3 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let arr4 = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred', ];
    let a = 0;
    number = String(number)
    if(number.length == 1){
        if(number[0] == '0'){
            arr2.push(arr1[0]);
        }
        if(number[0] == '1'){
            arr2.push(arr1[1]);
        }
        if(number[0] == '2'){
            arr2.push(arr1[2]);
        }
        if(number[0] == '3'){
            arr2.push(arr1[3]);
        }
        if(number[0] == '4'){
            arr2.push(arr1[4]);
        }
        if(number[0] == '5'){
            arr2.push(arr1[5]);
        }
        if(number[0] == '6'){
            arr2.push(arr1[6]);
        }
        if(number[0] == '7'){
            arr2.push(arr1[7]);
        }
        if(number[0] == '8'){
            arr2.push(arr1[8]);
        }
        if(number[0] == '9'){
            arr2.push(arr1[9]);
        }
    }else if(number.length == 2){
        if(number[0] == '1'){
            if(number[1] == '0'){
                arr2.push(arr1[10]);
            }
            if(number[1] == '1'){
                arr2.push(arr1[11]);
            }
            if(number[1] == '2'){
                arr2.push(arr1[12]);
            }
            if(number[1] == '3'){
                arr2.push(arr1[13]);
            }
            if(number[1] == '4'){
                arr2.push(arr1[14]);
            }
            if(number[1] == '5'){
                arr2.push(arr1[15]);
            }
            if(number[1] == '6'){
                arr2.push(arr1[16]);
            }
            if(number[1] == '7'){
                arr2.push(arr1[17]);
            }
            if(number[1] == '8'){
                arr2.push(arr1[18]);
            }
            if(number[1] == '9'){
                arr2.push(arr1[19]);
            }
            a = 1;
        }
        if(number[0] == 2){
            arr2.push(arr3[0]);
        }
        if(number[0] == 3){
            arr2.push(arr3[1]);
        }
        if(number[0] == 4){
            arr2.push(arr3[2]);
        }
        if(number[0] == 5){
            arr2.push(arr3[3]);
        }
        if(number[0] == 6){
            arr2.push(arr3[4]);
        }
        if(number[0] == 7){
            arr2.push(arr3[5]);
        }
        if(number[0] == 8){
            arr2.push(arr3[6]);
        }
        if(number[0] == 9){
            arr2.push(arr3[7]);
        }
        if(a == 0){
            if(number[1] == '1'){
                arr2.push(arr1[1]);
            }
            if(number[1] == '2'){
                arr2.push(arr1[2]);
            }
            if(number[1] == '3'){
                arr2.push(arr1[3]);
            }
            if(number[1] == '4'){
                arr2.push(arr1[4]);
            }
            if(number[1] == '5'){
                arr2.push(arr1[5]);
            }
            if(number[1] == '6'){
                arr2.push(arr1[6]);
            }
            if(number[1] == '7'){
                arr2.push(arr1[7]);
            }
            if(number[1] == '8'){
                arr2.push(arr1[8]);
            }
            if(number[1] == '9'){
                arr2.push(arr1[9]);
            }
        }
    }else{
        if(number[0] == '1'){
            arr2.push(arr4[0])
        }
        if(number[0] == '2'){
            arr2.push(arr4[1])
        }
        if(number[0] == '3'){
            arr2.push(arr4[2])
        }
        if(number[0] == '4'){
            arr2.push(arr4[3])
        }
        if(number[0] == '5'){
            arr2.push(arr4[4])
        }
        if(number[0] == '6'){
            arr2.push(arr4[5])
        }
        if(number[0] == '7'){
            arr2.push(arr4[6])
        }
        if(number[0] == '8'){
            arr2.push(arr4[7])
        }
        if(number[0] == '9'){
            arr2.push(arr4[8])
        }
        if(number[1] == '1'){
            if(number[2] == '0'){
                arr2.push(arr1[10]);
            }
            if(number[2] == '1'){
                arr2.push(arr1[11]);
            }
            if(number[2] == '2'){
                arr2.push(arr1[12]);
            }
            if(number[2] == '3'){
                arr2.push(arr1[13]);
            }
            if(number[2] == '4'){
                arr2.push(arr1[14]);
            }
            if(number[2] == '5'){
                arr2.push(arr1[15]);
            }
            if(number[2] == '6'){
                arr2.push(arr1[16]);
            }
            if(number[2] == '7'){
                arr2.push(arr1[17]);
            }
            if(number[2] == '8'){
                arr2.push(arr1[18]);
            }
            if(number[2] == '9'){
                arr2.push(arr1[19]);
            }
            a = 1;
        }
        if(number[1] == 2){
            arr2.push(arr3[0]);
        }
        if(number[1] == 3){
            arr2.push(arr3[1]);
        }
        if(number[1] == 4){
            arr2.push(arr3[2]);
        }
        if(number[1] == 5){
            arr2.push(arr3[3]);
        }
        if(number[1] == 6){
            arr2.push(arr3[4]);
        }
        if(number[1] == 7){
            arr2.push(arr3[5]);
        }
        if(number[1] == 8){
            arr2.push(arr3[6]);
        }
        if(number[1] == 9){
            arr2.push(arr3[7]);
        }
        if(a == 0){
            if(number[2] == '1'){
                arr2.push(arr1[1]);
            }
            if(number[2] == '2'){
                arr2.push(arr1[2]);
            }
            if(number[2] == '3'){
                arr2.push(arr1[3]);
            }
            if(number[2] == '4'){
                arr2.push(arr1[4]);
            }
            if(number[2] == '5'){
                arr2.push(arr1[5]);
            }
            if(number[2] == '6'){
                arr2.push(arr1[6]);
            }
            if(number[2] == '7'){
                arr2.push(arr1[7]);
            }
            if(number[2] == '8'){
                arr2.push(arr1[8]);
            }
            if(number[2] == '9'){
                arr2.push(arr1[9]);
            }
        }
    }
    arr2 = arr2.join(' ');
    return arr2;
}
