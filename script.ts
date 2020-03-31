let gracz = "X";
const busy = new Array(9);
function select(btn){
    if(busy[btn] != null){}
    else{
        if(gracz == "X"){
            gracz ="O";
            document.getElementById(btn).innerHTML=gracz;
            busy[btn] = gracz;
        }
        else{
            gracz="X";
            document.getElementById(btn).innerHTML=gracz;
            busy[btn] = gracz;
        }
        check()
    }
}
function end(){
    busy.splice(0,busy.length);
    busy.push('end','end','end','end','end','end','end','end','end');
}

function check(){
    console.log(busy);
    if(busy[0]==busy[1]&&busy[1]==busy[2]&&busy[1]!=null&&busy[1]!='end'){
        alert("wygrał "+ busy[1]);
        end();
    }
    else if(busy[3]==busy[4]&&busy[4]==busy[5]&&busy[4]!=null&&busy[4]!='end'){
        alert("wygrał "+ busy[4]);
        end();
    }
    else if(busy[6]==busy[7]&&busy[7]==busy[8]&&busy[7]!=null&&busy[7]!='end'){
        alert("wygrał "+ busy[7]);
        end();
    }
    else if(busy[0]==busy[3]&&busy[3]==busy[6]&&busy[3]!=null&&busy[3]!='end'){
        alert("wygrał "+ busy[7]);
        end();
    }
    else if(busy[1]==busy[4]&&busy[4]==busy[7]&&busy[4]!=null&&busy[4]!='end'){
        alert("wygrał "+ busy[7]);
        end();
    }
    else if(busy[2]==busy[5]&&busy[5]==busy[8]&&busy[5]!=null&&busy[5]!='end'){
        alert("wygrał "+ busy[7]);
        end();
    }
    else if(busy[0]==busy[4]&&busy[4]==busy[8]&&busy[4]!=null&&busy[4]!='end'){
        alert("wygrał "+ busy[7]);
        end();
    }
    else if(busy[2]==busy[4]&&busy[4]==busy[6]&&busy[4]!=null&&busy[4]!='end'){
        alert("wygrał "+ busy[7]);
        end();
    }
}

function restart(){
    let pole = 0;
    do{
        document.getElementById(pole.toString()).innerHTML="";
        pole++;
        
    } while( pole <= 8)
    busy.splice(0,busy.length);
    console.log(busy)
}