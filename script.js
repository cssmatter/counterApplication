var counter = document.getElementById('counter');

counterData = 0;

counter.innerHTML = counterData;

function makeCounter(countertype){
  
    if(countertype == 'add'){
        changeCounter = ++counterData
        initialTranslate = 'translateY(-100%)'
        addTranslate = 'translateY(100%)'

            if(counterData > 0){
                counter.style.color = 'yellow'
            }else if(counterData == 0){
                counter.style.color = 'white'
            }

    }else if(countertype == 'subtract'){
        changeCounter = --counterData
        initialTranslate = 'translateY(100%)'
        addTranslate = 'translateY(-100%)'

        if(counterData < 0){
            counter.style.color = 'red'
        }else if(counterData == 0){
            counter.style.color = 'white'
        }
    }

    csstranform = '-webkit-transform'

   counter.style.transform = initialTranslate;
   counter.style.csstranform = initialTranslate;
   counter.style.opacity = '0';

   timeOut = 80;

   setTimeout(function () {
        counter.innerHTML = changeCounter;
        setTimeout(function () {
            counter.style.transform = addTranslate;  
            counter.style.csstranform = addTranslate;    
            counter.style.opacity = '0'; 
            setTimeout(function () {
                counter.style.transform = 'translateY(0%)';   
                counter.style.csstranform = 'translateY(0%)';  
                counter.style.opacity = '1'; 
            },timeOut)
        },timeOut)
   },timeOut)

}
