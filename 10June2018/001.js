/*
    analisa sendiri dengan apa yang diminta soal melalui test case. 
    wajib menggunakan pseudocode
    PSEUDOCODE HERE : 

    STORE param with any NUMBER value
    STORE tandaSeru 0
    STORE atSign with 1
    STORE pagar with 2
    STORE j with 0
    STORE result with empty array

    FOR EACH character of param
      STORE arrayKosong with empty array
      FOR EACH NUMBER of param
        IF tandaSeru EQUALS j
          PUSH arrayKosong with '!'
          tandaSeru plus 3
        ELSE IF atSign EQUALS j
          PUSH arrayKosong with '@'
          atSign plus 3
        ELSE
          PUSH arrayKosong with '#'
          pagar plus 3
      END FOR
      PUSH result with arrayKosong
    END FOR
    IF result EQUALS undefined
      DISPLAY 'Invalid Input'
    ELSE
      DISPLAY result
*/
function soal1(param){

    var tandaSeru = 0
    var atSign = 1
    var pagar = 2
    var result = []
  
    for(var i = 0 ; i < 1 ; i++){
        var arrayKosong = []
        for(var j = 0 ; j < param ; j++){
            if(tandaSeru === j){
            arrayKosong.push('!')
            tandaSeru+=3
            }else if(atSign === j){
            arrayKosong.push('@')
            atSign+=3
            }else{
            arrayKosong.push('#')
            pagar+=3
            }
        }
        result.push(arrayKosong)
    }

    if(result[0][0] === undefined){
      return 'Invalid Input'
    }else{
      return result
    }
}
  
console.log(soal1(3))
// output : ['!','@','#']
  
console.log(soal1(6));
// output : ['!','@','#','!','@','#']
  
console.log(soal1(4))
// output : ['!','@','#','!']
  
console.log(soal1(0)) // invalid input