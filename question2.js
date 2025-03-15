function sum_array(number){
    return number.reduce((sum, num) => sum + num, 0);

}

console.log(sum_array([1,2,3,4,5]));