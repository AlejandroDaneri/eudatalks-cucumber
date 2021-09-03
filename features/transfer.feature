Feature: Transfer

  Background:
    Given I have $3000 in my account
    And other account have $2000

  Scenario: Sufficient founds
    When I try to transfer $2500
    Then I should have $1000

  Scenario: Insufficient founds
    When I try to withdraw $4000
    Then the transaction will be denied
