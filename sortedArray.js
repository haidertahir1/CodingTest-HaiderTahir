//Sorted array of integers 
let A=[-5,-3,0,1,5,7];
//x declared as sum of -2
let x=-2;
let size=A.length;

if ( checkPair ( A , size , x)) {
    console.log('pair exist');
}
else {
    console.log ('no Valid pair'+ x);
}

function checkPair ( A , size, x) {
    for ( i=0 ; i<(size-1) ; i++)
    {
        for ( j=(i+1); j<size-1 ; j++)
        {
            if (A[i]+A[j]==x){
                console.log("paired with " + x +" is (" + A[i]+"," + A[j] + ')')
                return true;
            }
        }
    }
    return false ;
}
