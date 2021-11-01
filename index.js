let date;
let timeout;

function out() {
    document.getElementById('timer').innerHTML = date.toLocaleTimeString();
}
async function timer(){
    let promise = new Promise((resolve) => {
        out();
        if (date.getSeconds()!=0){
            date.setSeconds(date.getSeconds()-1);
            timeout = setTimeout(timer, 1000);
        }
        else{
            resolve("Время вышло!");
        }
    })
        .then(value => setTimeout(() => alert(value), 0));
}

function start(){
    date = new Date(0, 0, 0, 0, 0, 10, 0);
    clearTimeout(timeout);
    out();
    timer();
}

