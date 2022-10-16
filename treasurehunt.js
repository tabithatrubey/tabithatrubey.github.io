// alert("You're Connected")
var winner= Math.floor(Math.random()*9)


var loser=Math.floor(Math.random()*9)
console.log(winner,loser)

// const treasure= (id)=>{
// if(id===winner){
//     return document.getElementById(id).innerHTML="🗡"
// }else if(id===1){
//     return document.getElementById(id)
//     .innerHTML="☠️"}
// else if(id===2){return document.getElementById(id)
//     .innerHTML="🐋"
// }
// else if(id===3){return document.getElementById(id)
//     .innerHTML=""}
// else if(id===4){return document.getElementById(id)
//     .innerHTML=""}

// else if(id===5){return document.getElementById(id)
//     .innerHTML=""}
//     else if(id===6){return document.getElementById(id)
//         .innerHTML=""}
//         else if(id===7){return document.getElementById(id)
//             .innerHTML=""}
//             else (id===8){return document.getElementById(id)
//                 .innerHTML=""}

// }
const treasure= (id)=>{
    if(id===winner){
        return document.getElementById(id).innerHTML="🗡"
    }else if(id===loser){
        return document.getElementById(id).innerHTML="☠️"
    }else {
        alert("nothing")
    }
    }
