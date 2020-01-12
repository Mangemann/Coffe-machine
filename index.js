class MyMachine{

    constructor() {
        this.pluggedInWater = false
        this.pluggedInPower = false
        this.waterPerCup = 180
        this.waterPerKanna = 1800
        this.waterPerLatte = 60
        this.coffeePerCup = 9
        this.coffePerLatteCup = 3
        this.milkPerCup = 10
        this.milkPerLatteCup = 120
        this.coffeePerKanna = 90
        this.sugarPerCup = 10
        this.chocolatePerCup = 10
        this.amountofCoffee = 0
        this.amountofMilk = 0
        this.amountofSugar = 0
        this.amountofChocolate = 0
        this.latteButtonPressed = false
        this.kaffeButtonPressed = true
        this.teButtonPressed = false
        this.chokladButtonPressed = false
        this.sockerButtonPressed = false
        this.mjolkButtonPressed = false
        this.kannaButtonPressed = false
        this.startButtonPressed = false
        this.cancelButtonPressed = false
        this.amountOfMoneyPaid = 0
        this.reservedAmountFromCardPaid = 0
        this.pricePerCup = 10
        this.amountOfCups = 0
        this.cardPaymentSuccessful = false
        this.amountOfChange = 0
        this.beverageBrewedSuccessfully = false

    }

    checkIfPluggedIn() {
        
    }

    checkIfWaterIsPluggedIn() {

    }

    coffeeSupplyLeft() {

    }

    milkSupplyLeft() {

    }

    sugarSupplyLeft() {

    }

    chocolateSupplyLeft() {

    }

    cupSupplyLeft() {

    }

    start() {

    }

    cancel() {

    }

    brewBeverage() {

    }

    brewCoffeeMilkSugar() {

    }

    brewCoffeeMilk() {

    }

    brewCoffeeSugar() {

    }

    brewCoffee() {

    }

    brewTe() {

    }

    brewLatte() {

    }

    brewKanna() {

    }

    brewChocolate() {

    }

    reservedCardPaymentHandler() {
        
    }

    returnChange() {

        if (this.cancelButtonPressed) {
            this.amountOfChange = this.amountOfMoneyPaid
            this.amountOfMoneyPaid = 0
            this.reservedAmountFromCardPaid = 0
            return this.amountOfChange
        }

        this.amountOfChange = this.amountOfMoneyPaid + this.reservedAmountFromCardPaid - 10
        this.amountOfMoneyPaid = 0
        this.reservedAmountFromCardPaid = 0
        return this.amountOfChange

    }

    payByCard() {

    }

    payByStudentCard() {

    }

    checkInsertedCoinObject() {
        
    }

    payByCash(amount) {
        let paidMoney = amount/1
        this.amountOfMoneyPaid += paidMoney
        return true
    }

    selectSugar() {

    }

    selectMilk() {

    }

    selectKanna() {

    }

    selectCoffee() {

    }

    selectLatte() {

    }

    selectTe() {

    }

    selectChocolate() {

    }

    refillSugar() {

    }

    refillMilk() {

    }

    refillCoffee() {

    }

    refillChocolate() {
        
    }

    



}


module.exports = MyMachine;