/*
    membuat bendera scotlandia
    output hanya menggunakan console.log string yang isinya 
    hanya berupa spasi kosong dan char *
     petunjuk : 
    - input harus lebih dari 3 , jika tidak maka "invalid input"
    - input harus bernilai ganjil , jika tidak ganjil maka " invalid input "
*/

function scotlandFlag(param)
{
    // yout code here 
    if(param <= 2){
        return 'Invalid input'
    }
    var result = ''
    var left = 0
    var right = param-1
    
    for(var i = 0 ; i < param ; i++){
        for(var j = 0 ; j < param ; j++){
            if(j === left || j === right){
            result+='*'
            }else{
            result+=' '
            }
        }
        left++
        right--
        console.log(result)
        result = ''
    }
    return result
}

console.log(scotlandFlag(5))
/*
    '*   *'
    ' * * '
    '  *  '
    ' * * '
    '*   *'
*/

console.log(scotlandFlag(9))
/*
    '*       *'
    ' *     * '
    '  *   *  '
    '   * *   '
    '    *    '
    '   * *   '
    '  *   *  '
    ' *     * '
    '*       *'
*/

console.log(scotlandFlag(2))