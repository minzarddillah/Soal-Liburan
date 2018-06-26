// mirip soal pasangan , namun agak beda
// 1 orang bisa ngerjain soal ini , klo dia bisa, kamu juga
function soal2(param){
    var result = []
    var terakhir = param.length-1
    var angka = Math.round(param.length / 2)
    
  
    for(var i = 0 ; i < 1 ; i++){
        for(var j = 0 ; j < angka ; j++){
            var arrayKosong = []
            arrayKosong.push(param[j])
            arrayKosong.push(param[terakhir])
            terakhir--
            result.push(arrayKosong)
        }
    }

    if(result[result.length-1][0] === result[result.length-1][1]){
      result[result.length-1][1] = 'Instruktur'
    }
    return result
}
  
console.log(soal2(['Aries','Dimas','Gatot',"Nurmantyo","Zainul","Majdi"]))
/*
    output: 
    [['Aries','Majdi'],['Dimas','Zainul'],['Gatot','Nurmantyo']]
*/
  
console.log(soal2(['A','B','C','D','E']))//
// [ ['A','E'] , ['B','D'], ['C','Instruktur']]
  
console.log(soal2(['Susan','Albert','Erithiana','Zaki','Sisijoan','Henry',"Nio"]))
// [['Susan','Nio'],['Albert','Henry'],['Erithiana','Sisijoan'],['Zaki','Instruktur']]