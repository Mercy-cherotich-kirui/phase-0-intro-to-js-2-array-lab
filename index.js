// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"]


function destructivelyAppendCat(name){
    cats.push(name)
}

function destructivelyPrependCat(name){
    cats.unshift(name)
}

function destructivelyRemoveLastCat(Garfield){
    cats.pop("Garfield")
}

function destructivelyRemoveFirstCat(Milo){
    cats.shift("Milo")
}

function appendCat(name){
    return [...cats ,name]
}

function prependCat(name){
    return [name, ...cats]
}
function removeLastCat(Garfield){
    return cats.slice(0, cats.length -1)
}
function removeFirstCat(Milo){
    return cats.slice(1)
}