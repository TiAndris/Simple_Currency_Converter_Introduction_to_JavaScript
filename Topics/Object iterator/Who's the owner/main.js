function switchTheValues(cats) {
    for (let i in cats){
        console.log(`${cats[i].name} has a cat named ${cats[i].owner}, whose breed is ${cats[i].breed}`)
    }
}