let time = 10;
var div=document.createElement("div");
var h1 =document.createElement("h1")
h1.setAttribute("class","countdown");
h1.innerHTML=time;
div.append(h1);
document.body.append(div);


var countdown= document.querySelector(".countdown");
countdown.innerHTML=time--;
setTimeout(()=>{countdown.innerHTML=time--;
    setTimeout(()=>{countdown.innerHTML=time--;
        setTimeout(()=>{countdown.innerHTML=time--;
            setTimeout(()=>{countdown.innerHTML=time--;
                setTimeout(()=>{countdown.innerHTML=time--;
                    setTimeout(()=>{countdown.innerHTML=time--;
                        setTimeout(()=>{countdown.innerHTML=time--;
                            setTimeout(()=>{countdown.innerHTML=time--;
                                setTimeout(()=>{countdown.innerHTML=time--;
                                    setTimeout(()=>{countdown.innerHTML=time--;
                                            countdown.innerHTML="Happy Independence Day💕🫡"
                                    },1000);
                                },1000);
                            },1000);
                        },1000);
                    },1000);
                },1000);
            },1000);
        },1000);
    },1000);
},1000);