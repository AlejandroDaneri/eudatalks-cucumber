Feature: Withdraw with outlines

  Scenario Outline: Many examples of withdraws
    Given I have $<start> in my account
    When I try to withdraw $<withdraw>
    Then I should have $<left>

    Examples:
      | start | withdraw |  left  |
      |  5000 |   2500   |  2500  |
      |  4000 |   2000   |  2000  |
      |  3000 |   2000   |  1000  |



