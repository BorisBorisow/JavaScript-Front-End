function pianist(input) {
    let n = input.shift();
    let pieces = {};
    let commandParser = {
        "Add": addPiece,
        "Remove": removePiece,
        "changeKey": changeKey,
    };

    for (let index = 0; index < n; index++) {
        let [ piece, composer, key ] = input.shift().split('|');
        
        pieces[piece] = { composer, key };
    }
    
    for (let line of input) {
        if (line === "Stop") {
            break;
        }
        
       
        let tokens = line.split("|");
        // let command = tokens.shift();
        // commandParser[command](...tokens)
        let command = tokens[0];
        commandParser[command](...tokens.slice(1));
    }

    for (const piece in pieces) {
        const [ key, composer ] = pieces[piece];
        console.log(`${piece} -> Composer: ${composer}, Key: ${key}`)
    }

    function addPiece(piece, composer, key) {
        if (!pieces.hasOwnProperty(piece)) {
            pieces[piece] = { composer, key };
            console.log(`${piece} by ${composer} in ${key} added to the collection!`);
        } else {
            console.log(`${piece} is already in the collection!`);
        }
        
    }

    function removePiece(piece) {
        
        if (!pieces.hasOwnProperty(piece)) {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
        } else {
            delete pieces[piece];
            console.log(`Successfully removed ${piece}!`);
        }
    }

    function changeKey(piece, newKey) {
        if (!pieces.hasOwnProperty(piece)) {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
        } else {
            pieces[piece].key = newKey;
            console.log(`Changed the key of ${piece} to ${newKey}!`);
        }
    }
    
}



pianist([
    "3",
    "Fur Elise|Beethoven|A Minor",
    "Moonlight Sonata|Beethoven|C# Minor",
    "Clair de Lune|Debussy|C# Minor",
    "Add|Sonata No.2|Chopin|B Minor",
    "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
    "Add|Fur Elise|Beethoven|C# Minor",
    "Remove|Clair de Lune",
    "ChangeKey|Moonlight Sonata|C# Major",
    "Stop",
  ]);
  
  