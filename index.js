let date;

function out() {
    document.getElementById('timer').innerHTML = date.toLocaleTimeString();
}
async function timer(){
    let promise = new Promise((resolve, reject) => {
        if (date.getSeconds()!=0){
            out();
            date.setSeconds(date.getSeconds()-1);
            setTimeout(timer, 1000);
        }
        else{
            out();
            setTimeout(()=> reject(alert("Время вышло!")), 10)
        }
    })
}

function start(){
    date = new Date(0, 0, 0, 0, 0, 10, 0);
    out();
    timer();
}

