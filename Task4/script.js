// write a class to calculate the Uber price.
class uberPrice
{
    constructor(
        basePrice, 
        costPerKiloMeters,
        costPerMinute
        ) 
        {
        this.basePrice = basePrice;
        this.costPerKiloMeters = costPerKiloMeters;
        this.costPerMinute = costPerMinute;
        }

        calculateAmount(distance, time)
        {
            let amount = this.basePrice + (distance * this.costPerKiloMeters) + (time * this.costPerMinute);
            return amount
        }
}
/*
basePrice = 20 Rs
costPerKiloMeters = 15 Rs
costPerMinute = 2 Rs
*/
const calculate = new uberPrice(20, 15, 2)
let distance = 20 // 10 Kilometers
let time = 40 // 30 minutes

let totalAmount = calculate.calculateAmount(distance, time)
console.log("Total Amount is :",totalAmount,"Rs");