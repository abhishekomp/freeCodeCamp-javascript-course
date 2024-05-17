// We are given a record collection and we need to update the record collection.
// We should preserve the initial record collection before updating it.
var recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

//Keep a copy of the collection for tests
var recordCollectionCopy = JSON.parse(JSON.stringify(recordCollection));

//Only change code below this line
function updateRecord(id, prop, value){
  if(value === ""){
    delete recordCollection[id][prop];
  } else if (prop === "tracks"){
      recordCollection[id][prop] = recordCollection[id][prop] || [];
      recordCollection[id][prop].push(value);
  } else {
    recordCollection[id][prop] = value;
  }
  return recordCollection;
}

// updateRecord(1245, "artist", "");
// updateRecord(5439, "artist", "ABBA");
// updateRecord(1245, "tracks", "Gorgeous");
//Add a track where tracks is not present at all
// updateRecord(5439, "tracks", "Summer in Sweden");


//Update the artist property of 2468 from Prince to Quincy
updateRecord(2468, "artist", "Quincy");
console.log(JSON.stringify(recordCollectionCopy));
console.log(JSON.stringify(recordCollection));