export default function intersection(nationalities){
    let interArr = [];
    for(let i = 0; i < nationalities.length; i++){
        interArr.push(nationalities[i].noVisa);
    }
    var result = interArr.shift().reduce(function(prev, curr) {
        if (!prev.includes(curr) && interArr.every(nationality => nationality.includes(curr))) prev.push(curr);
        return prev;
    }, []);
    return result;
}