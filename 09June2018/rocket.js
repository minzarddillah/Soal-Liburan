/*
    soal : 
    buatlah bendera inggris pada abad pertengahan dan era perang salib 
    dengan lambang St. George's Cross, 
    https://id.wikipedia.org/wiki/Bendera_Inggris
    dengan berbagai ukuran yang ditentukan
    oleh input. bendera berbentuk persegi .
    output hanya menggunakan console.log string yang isinya 
    hanya berupa spasi kosong dan char *
    petunjuk : 
    - input harus bernilai ganjil , jika tidak ganjil maka " invalid input "
*/
function benderaInggris(param)
{
    var result = ''
    var tengah = Math.floor(param /2)

    if(param % 2 === 0){
        return 'Invalid input'
    }

    for(var i = 0 ; i < param ; i++){
        for(var j = 0 ; j < param ; j++){
            if(i === tengah){
            result+='*'
            }else if(j === tengah){
            result+='*'
            }else{
            result+=' '
            }
        }
        console.log(result)
        result=''
    }
    return result
}

console.log(benderaInggris(9))

/*
    output:
    '    *    ' // 1
    '    *    ' // 2
    '    *    ' // ..
    '    *    '
    '*********'
    '    *    '
    '    *    '
    '    *    '
    '    *    ' // 9
*/

console.log(benderaInggris(5))
/*
    '  *  '
    '  *  '
    '*****'
    '  *  '
    '  *  '
*/

console.log(benderaInggris(4)) // invalid input