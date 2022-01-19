const wordSearch = (letters, word) => { 
    // console.log(letters[0].length, letters.length)
    let bigArray = [];
    for(let row in letters[0]) {// looping 8 times
        let newArray = [];
        // console.log(letters.length)
       
        for (let col in letters) { //looping 9 times
            // console.log(letters)
            newArray.push(letters[col][row]);
            // if (col === undefined) {
            //   row++ or col++  
            // }
            // console.log('col', newArray)
        }
        bigArray.push(newArray)
    }
    // console.log('bigArray', bigArray)
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    const verticalJoin = bigArray.map(ls => ls.join(''))
    for (l of verticalJoin) {
        if (l.includes(word)) return true
    }
    
return false;

}

module.exports = wordSearch;

// wordSearch([
//     ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
//     ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
//     ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
//     ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
//     ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
//     ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
//     ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
//   ], 'FRANK');