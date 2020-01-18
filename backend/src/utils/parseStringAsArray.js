module.exports = function parseStringAsArray(arrayAsString) {
    return arrayAsString.split(',').map(tech => tech.trim());  //split string to array by "," separator, then go throught array and trim possible spaces in each string 
}