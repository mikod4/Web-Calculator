var op = '';
var sval = 0;
var mval = 0;

function write(val){ //write new digit on screen and check its length
    //if(document.getElementById('display').textContent.length<10){
        document.getElementById('display').innerText += val;
    //}
}

function newval(){ //start entering new value i.e. after clicking '+' clears screen and saves previous value from screen
    var dsp = document.getElementById('display');
    mval = parseFloat(dsp.textContent);
    dsp.innerText = '';
    return mval;
}

function calc(symbol){  //Preform operation chosen previously and display outcome on screen
    var dsp = document.getElementById('display');
    sval = parseFloat(dsp.textContent);
    switch(symbol){
        case '+':{
            mval += sval;

            dsp.innerText = mval;
            break;
        }
        case '-':{
            mval -= sval;
            dsp.innerText = mval;
            break;
        }
        case 'x':{
            mval *= sval;
            dsp.innerText = mval;
            break;
        }
        case '/':{
            if(sval!=0){
                mval /= sval;
                dsp.innerText = mval;
            }else{
                dsp.innerText = 'err';
            }
            break;
        }
    }
}

function clear(){ //clear screen and all values
    sval = 0;
    mval = 0;
    document.getElementById('display').innerText = '';
}

function clear_last(){ //delte last digit
    var dsp = document.getElementById('display');
    var curval = dsp.textContent;
    dsp.innerText = '';
    for(var i=0;i<curval.length-1;i++){
        dsp.innerText += curval[i];
    }
}

function make_float(){ //next digits written are going to be treated as digits after '.' additionaly it checks if length after add dot isn't going to be grater than max length on display
    var dsp = document.getElementById('display');
    var curval = dsp.textContent;
    if(curval.length<10){
        for(var i=0;i<curval.length;i++){
            if(curval[i]=='.') return;
        }
        dsp.innerText += '.';
    }
}

function press(key){ //list what all buttons do and calling functions for those buttons
    const display = document.getElementById('display');
        switch(key){
            case '1':{
                write(1);
                break;
            }
            case '2':{
                write(2);
                break;
            }
            case '3':{
                write(3);
                break;
            }
            case '4':{
                write(4);
                break;
            }
            case '5':{
                write(5);
                break;
            }
            case '6':{
                write(6);
                break;
            }
            case '7':{
                write(7);
                break;
            }
            case '8':{
                write(8);
                break;
            }
            case '9':{
                write(9);
                break;
            }
            case '0':{
                write(0);
                break;
            }
            case '+':{
                newval();
                op='+';
                break;
            }
            case '-':{
                op = '-';
                newval();
                break;
            }
            case 'x': case '*':{
                op = 'x';
                newval();
                break;
            }
            case '/':{
                op = '/';
                newval();
                break;
            }
            case '=': case 'Enter':{
                calc(op);
                break;
            }
            case 'C': case 'c':{
                clear();
                break;
            }
            case 'Backspace':{
                clear_last();
                break;
            }
            case '.':{
                make_float();
                break;
            }
        }
}

document.addEventListener('keydown', (event) =>{ //listen to keys pressed and use them as input to calculator
    var name = event.key;
    press(event.key);
    if(name === 'c'){
        press('c');
    }
},false)