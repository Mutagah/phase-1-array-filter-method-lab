function findMatching(myArray,myString)
{      const matchingData = arrayData => arrayData.toUpperCase() === myString.toUpperCase();
        return myArray.filter(matchingData)

}
function fuzzyMatch (myArray, myString)
{
        const matchingData = arrayData => arrayData.toLowerCase().charAt(0)  ===  myString.toLowerCase().charAt(0);
        return myArray.filter(matchingData)
}
function matchName(myArray, myString){
    const matchingData = arrayData => arrayData.name === myString;
    return myArray.filter(matchingData);
}