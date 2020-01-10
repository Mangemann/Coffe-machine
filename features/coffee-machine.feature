Feature:
As a coffee buyer
I want to be able to select a beverage from the machine when i have inserted enough money
Because I am thirsty for a hot beverage

Background:
Given that the machine is plugged in
And it is connected to a water source
And there are enough cups

Scenario Outline: the user inserts a lot of different coins and wants the correct change
Given that I have inserted a <coin1> coin
And a <coin2> coin
And a <coin3> coin
And a <coin4> coin
And a <coin5> coin
And a <coin6> coin
And a <coin7> coin
When I press the cancelbutton
Then i should recieve <change> coins back

Examples:
    | coin1 | coin2 | coin3 | coin4 | coin5 | coin6 | coin7 | change |
    |    10 |     0 |     0 |     0 |     0 |     0 |     0 |      0 |
    |     1 |     1 |     1 |     2 |     2 |     2 |     2 |      1 |
    |     5 |     2 |     2 |     2 |     0 |     0 |     0 |      1 |
    |    10 |     5 |     5 |     2 |     1 |     0 |     0 |     13 |
    |     5 |     2 |     0 |     0 |     0 |     0 |     0 |      0 |


