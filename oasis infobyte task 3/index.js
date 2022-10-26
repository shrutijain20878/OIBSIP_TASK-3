function func(){
    var num=document.getElementById("num");
    var temp=document.getElementById("temp");
    var r=document.getElementById("result");
    var n=parseFloat(num.value);
    var t=temp.value;
    if(t=="cel"){
        var ans = (n*(9/5)+32)+"°F";
    }
    else if(t=="fah"){
        var ans =((5/9)*(n-32))+"°C";
    }
    r.value=parseFloat(ans);
}