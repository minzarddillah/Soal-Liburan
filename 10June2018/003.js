function soal3(param)
{
    // your code here
    var abjad = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var obj = {

    }
    for(var i = 0 ; i < abjad.length ; i++){
        var arrayKosong = []
        for(var j = 0 ; j < param.length ; j++){
            if(abjad[i] === param[j][0]){
                obj[abjad[i]] = []
                arrayKosong.push(param[j])
                var test = abjad[i]
                obj[abjad[i]].push(arrayKosong)
            }
        }
        
    }
    return obj
}

console.log(soal3(['Ayam','Kucing','Bebek','Sapi','Babi','Curut','Cacing','Monyet']));
/*
    {
        A:['Ayam'],
        B:['Bebek','Babi'],
        C:['Cacing','Curut'],
        K:['Kucing'],
        M:['Monyet'],
        S:['Sapi']
    }
*/

console.log(soal3(['Anjing','Kuda','Anoa','Zebra','Lipan','Kudanil','Landak']))
/*
    {
        A:['Anjing','Anoa'],
        L:['Lipan','Landak'],
        K:['Kuda','Kudanil'],
        Z:['Zebra']
    }
*/