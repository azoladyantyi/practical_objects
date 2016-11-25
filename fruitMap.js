var fruitString = 'Banana,Banana,Pear,Orange,Apple,Melon,Grape,Apple,Banana,Grape,Melon,Grape,Melon,Apple,Grape,Banana,Orange,Melon,Orange,Banana,Banana,Orange,Pear,Grape,Orange,Orange,Apple,Apple,Banana';

var fruitList = fruitString.split(',');
var fruitMap = {};

for (var i = 0; i < fruitList.length; i++) {
    var currentFruit = fruitList[i];
    //check if the current fruit is already in the Map
    if (fruitMap[currentFruit] === undefined){
        fruitMap[currentFruit] = 0;
    }
    //increment the current entry in the map with 1
    fruitMap[currentFruit] = fruitMap[currentFruit] + 1
    //you can also use
    //fruitMap[currentFruit]++;
}
console.log(fruitMap);
