//removing duplicate array

//There are multiple method to remove duplicates in array (no 1 useSet method )
// no 2  indexOf() , filter ()
//here i use method 2 
var arr =['9', '8', '8', '3', '2', '1', '1','3'];
function removeDuplicates(arr){
    return arr.filter((item,index)=>arr.indexOf(item)===index);

}
console.log(removeDuplicates(arr));