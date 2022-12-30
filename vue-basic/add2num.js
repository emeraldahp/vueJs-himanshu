function add2numtmp(a,b){
    
    
    return a+b;
}

//console.log(add2numtmp(2,3))


function add2num(a,b){
    
    function add(){
        sum = a+b;
        console.log(sum);
    }
    add();
}

//add2num(2,3)



function hoisting(){
    
    console.log(sum)
    var sum=3+5;
    console.log(sum)

}

//hoisting()

function fun1(){
    function fun2(){
        return 5;
    }

    return fun2
}

const fun = fun1();
console.log(fun());