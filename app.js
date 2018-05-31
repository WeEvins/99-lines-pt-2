let friends = ['Marinette', 'Juleka', 'Rose', 'Chloe', 'Alya']

for (let f = 0; f < friends.length; f++) {
    for (let i = 99; i >= 1; i--){
        let currentPlural = (i > 1) ? 'lines' : 'line'
        let nextPlural = (i === 2) ? 'line' : 'lines'

        console.log (`${i} ${currentPlural} of code in the file. ${i} lines of code. ${friends} strikes one out, clears it all out. 
        ${i-1} ${nextPlural} lines of code on the wall.`)
    }
}