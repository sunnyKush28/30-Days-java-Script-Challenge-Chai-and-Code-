const linearSearch = function (city, value) {
    for (let i = 0; i < city.length; i++) {
        if (city[i] === value) return i;
    }
    return -1;
}
var city = ["kathmandu", "pokhara", "butwal", "birgunj", "mahendranagar", "janakpur", "dharan", "narangadh", "bhairawa"]
console.log(linearSearch(city, "butwal"))


