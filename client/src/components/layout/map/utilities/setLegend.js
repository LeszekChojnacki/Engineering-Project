export function setLegend(data){

    //var log = console.log

    function roundingToTen(number){

        if(number%10 === 0) return number
        if(number < 10) return 10

        var numberString = number.toString()
        numberString = numberString.substring(0, numberString.length - 1)
        
        return parseInt(numberString)*10+10
    }

    function roundingToFive(number){

        var tmp = Math.round(number)

        if(tmp%5 === 0) return tmp          
 
        do tmp++
        while(tmp%5 !== 0)       

        return tmp
    }

    function stopsArrFill(jumpLegendValue){

        var tmp = 0

        var tmpStops = [
            [0, '#f8d5cc'],
            [1, '#f4bfb6'],
            [2, '#f1a8a5'],
            [3, '#ee8f9a'],
            [4, '#ec739b'],
            [5, '#dd5ca8'],
            [6, '#c44cc0'],
            [7, '#9f43d7'],
            [8, '#6e40e6']
        ]

        for(var i = 1; i<9; i++) {
            tmp +=jumpLegendValue
            tmpStops[i][0]  = tmp         
        }

        return tmpStops
    }

    // Searching for the highestNumber POPULATION
    var highestNumber = 0
    //log("1: " + highestNumber)

    data.features.forEach(element => {
        var value = element.properties["POPULATION"]           
        if(highestNumber<value) highestNumber = value
    })
    //log("2: " + highestNumber)

    // Need to round the number, so it will look nice on the legend
    highestNumber = roundingToTen(highestNumber)
    //log("3: " + highestNumber)

    // Searching for the LowestNumber POPULATION
    var LowestNumber = highestNumber
    //log("4: " + LowestNumber)
    data.features.forEach(element => {
        var value = element.properties["POPULATION"]
        if(LowestNumber>value) LowestNumber = value
    })
    //log("5: " + LowestNumber)
    
    // Need to round the number, so it will look nice on the legend
    LowestNumber = roundingToTen(LowestNumber)
    //log("6: " + LowestNumber)

    // 7 because 1 element is 0 and the last is the highestNumber, so it gives 7 empty elements to fill
    var jumpLegendValue = roundingToFive((highestNumber - LowestNumber)/7)
    //log("7: " + jumpLegendValue)

    var tmpStops  = stopsArrFill(jumpLegendValue)

    const options = {
        name: 'Legenda',
        description: 'Liczba wystąpień',
        property: 'POPULATION',
        stops: tmpStops
    }

    return options
}