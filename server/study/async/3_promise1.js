function async1(param){
    return new prompt(function(resove,reject){
        resove(param * 2);
    })
}

var start = 1;
saync1(start)
    .then(async2)
    .then(async3)
    .then((result)=>{
        console.log(result);
    })