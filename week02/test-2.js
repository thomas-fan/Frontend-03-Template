// find abababx
function match(string) {
    let state = start
    for (let c of string)
        state = state(c)
    console.log(state);
    return state === end
}

function start(c) {
    if (c === 'a')
        return foundA
    else
        return start
}

function foundA(c) {
    if (c === 'b')
        return foundB
    else
        return start(c)
}

function foundB(c) {
    if (c === 'a')
        return foundA2
    else
        return start(c)
}


function foundA2(c) {
    if (c === 'b')
        return foundB2
    else
        return start(c)

}
function foundB2(c) {
    if (c === 'a')
        return foundA3
    else
        return start(c)
}

function foundA3(c) {
    if (c === 'b')
        return foundB3
    else
        return start(c)

}
function foundB3(c) {
    if (c === 'x')
        return end
    else
        return start(c)
}


function end(c) {
    return end
}

console.log(match("ababasbx"))
