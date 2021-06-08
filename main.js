

function showRange(){
    document.getElementById("forintialRange").innerHTML = document.getElementById("intialRange").value;
    var i = parseInt( document.getElementById("intialRange").value)
    i+=20;
    document.getElementById("finalRange").value=i
    // console.log(i);
    document.getElementById("forfinalRange").innerHTML = document.getElementById("finalRange").value;
}


function randomGen(){
    var randomNum=0;
    do{
        randomNum = parseInt(  Math.random()*100);
        console.log(randomNum);
    }while(randomNum>100 && randomNum<0)
    return randomNum
}

function check(){
    var intialRange = document.getElementById("intialRange").value;
    var finalRange = document.getElementById("finalRange").value;
    var randomNum = randomGen();
    if(randomNum>=intialRange && randomNum<finalRange){
        alert("The Number is : "+randomNum+" and You guess it correct")
    }else{
        alert("The Number is : "+randomNum+" and You guess it incorrect")
    }
    // console.log(randomNum>=intialRange);
    // console.log(randomNum<finalRange);
}