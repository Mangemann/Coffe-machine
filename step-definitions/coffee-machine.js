let coffeeMachine = require('../index.js') //man skriver "../" för att 'hoppa upp' från mappen man är i
let myMachine;

module.exports = function () {

    myMachine = new coffeeMachine()

    this.Given(/^that the machine is plugged in$/, function () {

        myMachine.pluggedInPower = true
        assert.deepEqual(myMachine.pluggedInPower, true, 'machine is plugged in');

    })

    this.When(/^I have inserted a (\d+) coin$/, function (def1) {
        def1 = Number(def1)
        assert.deepEqual(myMachine.payByCash(def1), true, 'User inserted money')
        assert.deepEqual(myMachine.amountOfMoneyPaid, def1)
    });

    this.When(/^a (\d+) coin$/, function (arg1) {
        let checkAmount = arg1 / 1 + myMachine.amountOfMoneyPaid / 1
        assert.deepEqual(myMachine.payByCash(arg1), true, 'User inserted more money')
        assert.deepEqual(myMachine.amountOfMoneyPaid, checkAmount)
    });

    this.When(/^I press the startbutton$/, function () {
        myMachine.startButtonPressed = true
        assert.deepEqual(myMachine.startButtonPressed, true);
    });

    this.Then(/^i should recieve (\d+)kr in coins back$/, function (arg1) {
        arg1 = Number(arg1)
        assert.deepEqual(myMachine.returnChange(), arg1);

    });




}

module.exports = function () {

    myMachine = new coffeeMachine()

    this.Given(/^that the machine is plugged in$/, function () {

        myMachine.pluggedInPower = true
        assert.deepEqual(myMachine.pluggedInPower, true, 'machine is plugged in');

    })

    this.When(/^I have inserted a (\d+) coin$/, function (def1) {
        def1 = Number(def1)
        assert.deepEqual(myMachine.checkInsertedCoinObject(def1), true, 'User inserted money')
        assert.deepEqual(myMachine.amountOfMoneyPaid, def1)
    });

    this.When(/^a (\d+) coin$/, function (arg1) {
        arg1 = Number(arg1)
        let checkAmount = arg1 + myMachine.amountOfMoneyPaid
        assert.deepEqual(myMachine.checkInsertedCoinObject(arg1), true, 'User inserted more money')
        assert.deepEqual(myMachine.amountOfMoneyPaid, checkAmount)
    });

    this.When(/^I press the startbutton$/, function () {
        myMachine.startButtonPressed = true
        assert.deepEqual(myMachine.startButtonPressed, true);
    });

    this.Then(/^i should recieve (\d+)kr in coins back$/, function (arg1) {
        arg1 = Number(arg1)
        assert.deepEqual(myMachine.returnChange(), arg1);
    });

    myMachine = new coffeeMachine()

    this.When(/^I insert something that is not a valid coin into the coinsocket$/, function () {

        assert.deepEqual(myMachine.checkInsertedCoinObject('knapp'), 'Invalid object, try again')
        assert.deepEqual(myMachine.checkInsertedCoinObject('elefant'), 'Invalid object, try again')

    });

    this.Then(/^I should get an error message$/, function () {
        assert.deepEqual(myMachine.checkInsertedCoinObject('polett'), 'Invalid object, try again')
    });

    myMachine = new coffeeMachine()

    this.When(/^I insert a (\d+)kr coin$/, function (arg1) {
        arg1 = Number(arg1)
        myMachine.checkInsertedCoinObject(arg1)
        assert.deepEqual(arg1, myMachine.amountOfMoneyPaid);
    });

    this.When(/^I pay (\d+)kr with card$/, function (arg1) {
        arg1 = Number(arg1)
        let checkerAmount = myMachine.reservedAmountFromCardPaid + arg1
        myMachine.payByCard(true)
        assert.deepEqual(myMachine.reservedAmountFromCardPaid, checkerAmount);
    });

    this.When(/^i press the startbutton$/, function () {
        myMachine.startButtonPressed = true
        assert.deepEqual(myMachine.startButtonPressed, true);
    });

    this.Then(/^i should recieve (\d+)kr in change$/, function (arg1) {
        arg1 = Number(arg1)

        assert.deepEqual(myMachine.returnChange(), arg1);
    });

    myMachine = new coffeeMachine()

    this.When(/^i pay by card$/, function () {
        assert.isTrue(true);
    });

    this.When(/^i do not have enough money$/, function () {
        assert.notDeepEqual(myMachine.payByCard(false), true)
    });

    this.Then(/^i should get a message that i do not have enough funds$/, function () {
        assert.deepEqual(myMachine.payByCard(false), 'Transaction failed, not enough funds');
    });

    myMachine = new coffeeMachine()

    this.Given(/^that i have not inserted enough money$/, function () {
        myMachine.pluggedInWater = true
        myMachine.amountOfCups = 5
        assert.isBelow(myMachine.amountOfMoneyPaid, myMachine.pricePerCup)
    });

    this.Then(/^I should get a message that i have not inserted enough money$/, function () {

        assert.deepEqual(myMachine.start(), 'Not enough money paid');

    });

    mymachine = new coffeeMachine()

    this.Given(/^that i have payed (\d+) kr$/, function (arg1) {
        arg1 = Number(arg1)
        myMachine.payByCash(arg1)
        assert.deepEqual(myMachine.amountOfMoneyPaid, arg1);

    });

    this.Given(/^have not pressed the startbutton$/, function () {
        myMachine.startButtonPressed = false
        assert.deepEqual(myMachine.startButtonPressed, false);
    });

    this.When(/^i press the cancelbutton$/, function () {
        myMachine.cancelButtonPressed = true
        assert.deepEqual(myMachine.cancelButtonPressed, true,);
    });

    this.Then(/^i should get (\d+)kr back$/, function (arg1) {
        arg1 = Number(arg1)
        myMachine.timesPaidWithCardCounter = 0
        let changeIGetBack = myMachine.returnChange()
        assert.deepEqual(changeIGetBack, arg1);
    });

    mymachine = new coffeeMachine()

    this.Given(/^that the user has payed with card$/, function () {

        myMachine.payByCard(true)
        assert.isAbove(myMachine.reservedAmountFromCardPaid, 0)
        
    });

    this.When(/^the user presses the cancelbutton$/, function () {
        myMachine.cancelButtonPressed = true
        assert.deepEqual(myMachine.cancelButtonPressed, true);
    });

    this.Then(/^the user gets no change back$/, function () {
        assert.deepEqual(myMachine.returnChange(), 0);
    });

    this.Then(/^no money is deducted from the card$/, function () {

        assert.deepEqual(myMachine.reservedAmountFromCardPaid, 0);

    });

    myMachine = new coffeeMachine()

    this.Given(/^that I have opened the lid to the deposit$/, function () {

        myMachine.coffeeLidClosed = false
        myMachine.milkLidClosed = false
        myMachine.cupLidClosed = false
        myMachine.chocolateLidClosed = false
        myMachine.sugarLidClosed = false

        assert.deepEqual(myMachine.coffeeLidClosed, false);
        assert.deepEqual(myMachine.milkLidClosed, false);
        assert.deepEqual(myMachine.cupLidClosed, false);
        assert.deepEqual(myMachine.chocolateLidClosed, false);
        assert.deepEqual(myMachine.sugarLidClosed, false);
        
    });

    this.Given(/^that the sugar deposit contains (\d+)$/, function (amount) {

        amount = Number(amount)
        myMachine.amountofSugar = amount

        assert.deepEqual(myMachine.amountofSugar, amount);
        
    });

    this.Given(/^I put in (\d+) in the sugar deposit$/, function (refillAmount) {
        refillAmount = Number(refillAmount)
        assert.deepEqual(myMachine.refillSugar(refillAmount), true);

        
    });

    this.When(/^I close the lid of the deposit$/, function () {
        myMachine.sugarLidClosed = true
        assert.deepEqual(myMachine.sugarLidClosed, true);
    });

    this.Then(/^I should have (\d+) in the sugar deposit$/, function (totalAmount) {
        totalAmount = Number(totalAmount)
        assert.deepEqual(myMachine.amountofSugar, totalAmount);
    });

    this.Given(/^that the coffee deposit contains (\d+)$/, function (amountOfCoffeeStart) {
        amountOfCoffeeStart = Number(amountOfCoffeeStart)
        myMachine.amountofCoffee = amountOfCoffeeStart

        assert.deepEqual(myMachine.amountofCoffee, amountOfCoffeeStart);
    });

    this.Given(/^I put in (\d+) in the coffee deposit$/, function (amountToRefill) {
        amountToRefill = Number(amountToRefill)

        assert.deepEqual(myMachine.refillCoffee(amountToRefill), true);
    });

    this.Then(/^I should have (\d+) in the coffee deposit$/, function (totalAmount) {
        totalAmount = Number(totalAmount)
        assert.deepEqual(myMachine.amountofCoffee, totalAmount);
    });

    this.Given(/^that the milk deposit contains (\d+)$/, function (amountOfMilkStart) {
        amountOfMilkStart = Number(amountOfMilkStart)
        myMachine.amountofMilk = amountOfMilkStart

        assert.deepEqual(myMachine.amountofMilk, amountOfMilkStart);
    });

    this.Given(/^I put in (\d+) in the milk deposit$/, function (amountToRefill) {
        amountToRefill = Number(amountToRefill)

        assert.deepEqual(myMachine.refillMilk(amountToRefill), true);
    });

    this.Then(/^I should have (\d+) in the milk deposit$/, function (totalAmount) {
        totalAmount = Number(totalAmount)
        assert.deepEqual(myMachine.amountofMilk, totalAmount);
    });

    this.Given(/^that the chocolate deposit contains (\d+)$/, function (amountOfChocolateStart) {
        amountOfChocolateStart = Number(amountOfChocolateStart)
        myMachine.amountofChocolate = amountOfChocolateStart

        assert.deepEqual(myMachine.amountofChocolate, amountOfChocolateStart);
    });

    this.Given(/^I put in (\d+) in the chocolate deposit$/, function (amountToRefill) {
        amountToRefill = Number(amountToRefill)

        assert.deepEqual(myMachine.refillChocolate(amountToRefill), true);
    });

    this.Then(/^I should have (\d+) in the chocolate deposit$/, function (totalAmount) {
        totalAmount = Number(totalAmount)
        assert.deepEqual(myMachine.amountofChocolate, totalAmount);
    });

    this.Given(/^that the cup deposit contains (\d+)$/, function (amountOfCupsStart) {
        amountOfCupsStart = Number(amountOfCupsStart)
        myMachine.amountOfCups = amountOfCupsStart

        assert.deepEqual(myMachine.amountOfCups, amountOfCupsStart);
    });

    this.Given(/^I put in (\d+) in the cup deposit$/, function (amountToRefill) {
        amountToRefill = Number(amountToRefill)

        assert.deepEqual(myMachine.refillCups(amountToRefill), true);
    });

    this.Then(/^I should have (\d+) in the cup deposit$/, function (totalAmount) {
        totalAmount = Number(totalAmount)
        assert.deepEqual(myMachine.amountOfCups, totalAmount);
    });

    mymachine = new coffeeMachine();

    this.Given(/^there is water available$/, function () {

        myMachine.checkIfWaterIsPluggedIn()

        assert.deepEqual(myMachine.pluggedInWater, true);
        
    });

    this.Given(/^the user has paid enough money$/, function () {
        myMachine.payByCash(300)

        assert.isAbove(myMachine.amountOfMoneyPaid, myMachine.pricePerCup)
    });

    this.Given(/^that the user has selected kaffemjolksocker$/, function () {
        myMachine.selectMilk()
        myMachine.selectSugar()

        assert.deepEqual(myMachine.kaffeButtonPressed, true);
        assert.deepEqual(myMachine.sockerButtonPressed, true);
        assert.deepEqual(myMachine.mjolkButtonPressed, true);
    });

    this.Given(/^there is enough components for kaffemjolksocker$/, function () {
        myMachine.refillCoffee(500)
        myMachine.refillMilk(500)
        myMachine.refillSugar(500)
        myMachine.refillCups(240)
        assert.isAbove(myMachine.amountofCoffee, myMachine.coffeePerCup)
        assert.isAbove(myMachine.amountofSugar, myMachine.sugarPerCup)
        assert.isAbove(myMachine.amountofMilk, myMachine.milkPerCup)
        assert.isAbove(myMachine.amountOfCups, 0)
    });

    this.When(/^the user presses the startbutton$/, function () {
        myMachine.startButtonPressed = true
        assert.deepEqual(myMachine.startButtonPressed, true);
    });

    this.Then(/^the user recieves (\d+) cup of beverage$/, function (arg1) {
        arg1 = Number(arg1)

        assert.deepEqual(myMachine.start(), arg1);

    });

    






}