function soal1(param)
{
    var angka = 0
    var total = []
    for(var i = 0 ; i < 1 ; i++){
        var arrayKosong = []
        for(var j = 1 ; j <= param ; j++){
            arrayKosong.push('')
            angka = angka + j
        }
        total.push(arrayKosong)
    }
    var bagi = (Math.floor(angka / total[0].length)) -1
    for(var k = 0 ; k < 1 ; k++){
        if(total[0].length % 2 === 1){
            total[0][bagi] = total[0][bagi] + '*'
        }else if(total[0].length % 2 === 0){
            total[0][bagi]+= '*'
            total[0][bagi+1]+='*'
        }
    }
    if(param === 0){
        return 'Invalid Input'
    }else{
        return total[0]
    }
}

// test case
console.log( soal1(5) ) 
/*
    output : 
    ['','','*','','']
*/
  
console.log( soal1(4)) // ['','*','*','']
  
console.log( soal1(7)) // ['','','','*','','','']
  
console.log( soal1(10)) // ['','','','','*','*','','','','']
  
console.log( soal1(0)) // invalid input 
  
console.log( soal1(1)) // ['*']