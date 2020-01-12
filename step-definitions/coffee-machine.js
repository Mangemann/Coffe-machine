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
        let checkAmount = arg1/1 + myMachine.amountOfMoneyPaid/1
        assert.deepEqual(myMachine.payByCash(arg1), true, 'User inserted more money')
        assert.deepEqual(myMachine.amountOfMoneyPaid, checkAmount)
    });

    this.When(/^I press the startbutton$/, function () {
        myMachine.startButtonPressed = true
        assert.deepEqual(myMachine.startButtonPressed, true,);
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
        assert.deepEqual(myMachine.payByCash(def1), true, 'User inserted money')
        assert.deepEqual(myMachine.amountOfMoneyPaid, def1)
    });

    this.When(/^a (\d+) coin$/, function (arg1) {
        let checkAmount = arg1/1 + myMachine.amountOfMoneyPaid/1
        assert.deepEqual(myMachine.payByCash(arg1), true, 'User inserted more money')
        assert.deepEqual(myMachine.amountOfMoneyPaid, checkAmount)
    });

    this.When(/^I press the startbutton$/, function () {
        myMachine.startButtonPressed = true
        assert.deepEqual(myMachine.startButtonPressed, true,);
    });

    this.Then(/^i should recieve (\d+)kr in coins back$/, function (arg1) {
        arg1 = Number(arg1)
        assert.deepEqual(myMachine.returnChange(), arg1);
    });

    myMachine = new coffeeMachine()

    this.When(/^I insert something that is not a valid coin into the coinsocket$/, function () {
        
    });

    


}