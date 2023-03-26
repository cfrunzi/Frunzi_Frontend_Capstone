const randomSeed = function(seed){
    var max = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % max;
    return function(){
        return(s = (s * a) % max) / max;
    };
};

// fetch the current date from the API
export const fetchAPI = function(date){
    let result = [];
    let rand = randomSeed(date.getDate());

    for(let i = 17; i <= 23; i++){
        if(rand() < 0.5){
            result.push(i + ":00");
        }
        if(rand() <= 0.5){
            result.push(i + ":30");
        }
    }

    return result;
};

export const submitAPI = function(formData){
    return true;
};