const resultfield = document.getElementById('result');

const calculate = (value)=>{
    const calcvalue = eval(value || null);
    if(isNaN(calcvalue)){
        resultfield.value = "Syntax error"
    }else{
        resultfield.value = calcvalue;
    }
}

const displayValue = (value)=>{
    if(!resultfield.value){
        resultfield.value = "";
    }

    resultfield.value+= value;
}

// If we want to enter numbers via keyboard

document.addEventListener('keydown',keyboardfunction);

const keyboardfunction = (e)=>{
   e.preventDefault();

   if(e.key==='0'){
    resultfield.value+='0';
   }
   else if(e.key==='1'){
    resultfield.value+='1';
   }
   else if(e.key==='2'){
    resultfield.value+='2';
   }
   else if(e.key==='3'){
    resultfield.value+='3';
   }
   else if(e.key==='4'){
    resultfield.value+='4';
   }
   else if(e.key==='5'){
    resultfield.value+='5';
   }
   else if(e.key==='6'){
    resultfield.value+='6';
   }
   else if(e.key==='7'){
    resultfield.value+='7';
   }
   else if(e.key==='8'){
    resultfield.value+='8';
   }
   else if(e.key==='9'){
    resultfield.value+='9';
   }


   if(e.key==="+"){
    resultfield.value += '+';
   }else if(e.key==="*"){
    resultfield.value += '*';
   }else if(e.key==="-"){
    resultfield.value+='-';
   }else if(e.key==="/"){
    resultfield.value+='/'
   }

   if(e.key==="Backspace"){
    const resInput = resultfield.value;
    resultfield.value = resInput.substring(0,resultfield.value.length - 1);
   }

   if(e.key==="."){
    resultfield.value+='.'
   }

   if(e.key==="Enter"){
    calculate(result.value)
   }

}