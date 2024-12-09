function convertToAdjList(adjMatrix){
    var newList = [];
    for (n = 0; n < adjMatrix.length; n++){
        var newArray = [];
        for (i = 0; i < adjMatrix.length; i++){
            if (adjMatrix[n][i] == 1){
                newArray.push(i);
            }
        }
        newList[n] = newArray;
    }
    return newList;
}

function convertToAdjMatrix(adjList){
    var adjMatrix = [];
    for (n = 0; n < adjList.Length; n++){
        var newArray = adjList[n];
        var temp = [];
        var pos = 0;
        for (i = 0; i < adjList.length; i++){
            if (i == newArray[pos]){
                temp.push(1);
            } 
            else{
                temp.push(0);
            }
            pos = pos + 1;
        }
        adjMatrix.push(temp);
    }
    return adjMatrix;
}
