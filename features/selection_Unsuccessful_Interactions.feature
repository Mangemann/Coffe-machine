Feature:
As a user that selects a beverage that misses ingredients
then the machine should not brew that beverage
because something does not come from nothing

Background:
Given that the machine is plugged in


Scenario Outline: user buys a beverage with missing ingredients
Given that the user has selected <beverage>
And there is not enough <ingredient>
When the user presses the startbutton
Then the machine does not brew
And displays: <errormessage>

Examples:
    |         beverage | ingredient |                                  errormessage |
    | kaffesockermjolk |      kaffe |                   'Not enough coffee, refill' |
    |      kaffesocker |     socker |                    'Not enough sugar, refill' |
    |       kaffemjolk |      mjolk |                     'Not enough milk, refill' |
    |            kaffe |     vatten | 'No water supply connected, call maintenance' |
    |               te |       cups |                        'No more cups, refill' |
    |          choklad |    choklad |                'Not enough chocolate, refill' |
    |            latte |      mjolk |                     'Not enough milk, refill' |
    |            kanna |      kaffe |                   'Not enough coffee, refill' |


Scenario: the user tries to buy a beverage when the catch-spillage compartment is full
Given that the catch-spill compartment is full
And the user has selected a beverage
When the user presses the startbutton
Then no beverage gets brewed
And an error message is displayed: 'Empty the spillage compartment'