const sign = ["+", "-", "*", "/"];
function randomNumber() {
   const max = 10;
   const min = -10;
   const number = Math.round(Math.random() * (max - min) + min);
   return number ? number : max;
}
 function button() {
  return Math.floor(4 * Math.random());
 }
function choose (n1, n2, key) {
    switch (key) {
        case 0: 
            return n1 + n2;
        case 1: 
            return n1 - n2;
        case 2: 
            return n1 * n2;
        case 3: 
            return Math.round((n1 / n2) * 10 / 10);
        
    }
}

while (true){
    const NumFirst = randomNumber();
    const NumSecond = randomNumber();
    const key = button();
    const enter = prompt (` ${NumFirst} ${sign[key]} ${NumSecond} = `);
    const result = choose (NumFirst, NumSecond, key);
    if (result == enter) {
        alert ('Наливай дальше!');
    }
    else { 
        alert (`Хватит пить!\n Правильный ответ: ${result}`) 
    }

}

