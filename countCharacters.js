//count characters in string
function getCounts(string) {
    const histogram = {};
    for ( let i=0 ; i<string.length ; i++){
        const ch=string[i];
        if ( !histogram[ch])
        {
            histogram[ch]=0;
        }
        histogram [ch]++;
    }
    return histogram;
}
console.log(getCounts("adjfdffjdjfaaaja"))