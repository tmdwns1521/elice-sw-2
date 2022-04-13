let i = 30;

function printMessage(message, times){
    for (var i = 0; i < times; i++){
        console.log(message);
    }

    console.log(`value of i is ${i}`);
}

printMessage('hello',35);