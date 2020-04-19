// Code your solutions in this file
function writeCards(names, eventName) { 
    let msgs = []
    for (let i = 0; i < names.length; i++) {
        let msg = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`
        msgs.push(msg)
    }
    return msgs 
}

names = ["Ada", "Brendan", "Ali"]
events = "birthday"

writeCards(names, events)

function countDown(num) {
    let i = num 
    while (i > -1) {
        console.log(i);
        i = i-1
    }
    
}