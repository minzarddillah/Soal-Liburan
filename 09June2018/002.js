function soal2(param)
{
    var result = []
  
    for(var i = 0 ; i < param.length ; i++){
      var obj = {
        firtName:param[0][0],
        lastName:param[0][1],
        hobbies:param[0][2],
        profession:param[0][3]
    }
    result.push(obj)
    }
    return result
}
  
console.log(soal2([ ['Aries','Dimas',['coding','pubg','anime'],'Web Developer'] , 
['Radit','Dika',['manga','gaming'],'Web Developer'] ]));
/* output 
    
    [
        {
            firtName:"Aries",
            lastName:"Dimas",
            hobbies:['coding','pubg','anime'],
            profession:'Web Developer'
        },
        {
            firtName:"Radit",
            lastName:"Dika",
            hobbies:['manga','gaming'],
            profession:'Web Developer'
        }
    ]
*/ 

console.log([ ['Awtian','Akbar',['coding','main kucing','anime'],'Web Instructur'] , 
['Megalo','Maniak',['metal music','maniac'],'Maniac Expert'] ]);