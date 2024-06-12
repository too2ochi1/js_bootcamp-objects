let conversion = function (fahrenheit) {
    return {
        celsius : (fahrenheit-32)/(9/5),
        kelvin : (fahrenheit+459.67)*5/9
    }
}
let finalTemp = conversion (200)
console.log (`The results are ${finalTemp.kelvin} in Kelvin and ${finalTemp.celsius} in degree Celsius respectively`)