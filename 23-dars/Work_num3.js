function num(a,b,c){
    ab = a+b; bc = b+c; ca = a+c;
    if(ab == bc && bc == ca && ab == ca ){return ("equal_nums")}
    else if(ab > bc && ab > ca ){return ("ab")}
    else if(bc > ca && bc > ab){return ("bc")}
    else if(ca > ab && ca > bc){return ("ca")}
    
} 
function canculate(a,b,c){
    result = num(a,b,c)
    if(result == 'ab'){console.log(`${a} + ${b} = ${a+b}`)}
    else if(result == 'bc'){console.log(`${b} + ${c} = ${b+c}`)}
    else if(result == 'ca'){console.log(`${c} + ${a} = ${c+a}`)}
    else if(result == 'equal_nums'){console.log('Ikkita bir hil yig\'indi mavjud \n yoki \nBarcha sonlar teng\n(bu ham ikkita birhil yig\'indi mavjud ekanligini bildiradi :)')}
}
canculate(10,10,10)