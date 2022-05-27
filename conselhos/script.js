const ajax = new XMLHttpRequest();

ajax.open('GET', 'https://api.adviceslip.com/advice');
ajax.send();
ajax.onload = function(){

    obj = JSON.parse(this.responseText);

    document.getElementById('con').innerHTML = obj.slip.advice; 

   

  

}