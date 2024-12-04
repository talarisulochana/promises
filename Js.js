var a=new Promise((x,y)=>{
    if(1){
        x("product will be rearched")
    }else{
        y("reject")
    }
})


var b=new Promise((x,y) => {
    if(1){
        x("order will be comform")
    }else{
        y("reject")
    }
})


var c=new Promise((x,y) => {
    if(1){
        y("delivery partner")
    }else{
        x("reject")
    }
})

var d=new Promise((x,y) => {
    if(1){
        x("delivery will be completed")
    }else{
        y("reject")

        
    }
    
})

a.then((res)=>{
    console.log(res);
    return b;
}).then((res)=>{
    console.log(res);
    return c;
}).then((res)=>{
    console.log(res)
    return d;
}).then((res)=>{
    console.log(res)
}).catch(err=>{
    console.log(err)
})