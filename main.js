let timer = document.querySelector('.time p');
let start = document.querySelector('.start');
let stop = document.querySelector('.stop');
let reset= document.querySelector('.reset');
let ms = 0;
let s = 0;
let m = 0;

let toggle = null;

start.addEventListener('click',function () {
    if (toggle !== null){
      clearInterval(toggle);
    }
    toggle = setInterval(starttime,10)
})

stop.addEventListener('click', function(){
    clearInterval(toggle);
});

reset.addEventListener('click', function(){
    clearInterval(toggle);
    timer.innerHTML = `00:00:00`;
    ms = s = m = 00;
});

function starttime(){
    ms++;
    if(ms == 100){
        ms = 0;
        s++;
        if(s == 60){
            s = 0;
            m++;
        }
    }

    let mss = ms < 10 ? `0${ms}` : ms;
    let ss = s < 10 ? `0${s}` : s;
    let msss = m < 10 ? `0${m}` : m;
    

    timer.innerHTML = `${msss}:${ss}:${mss}`;

  }
