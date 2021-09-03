@withdraw
Feature: Withdraw

  Scenario: Sufficient founds
    Given I have $3000 in my account
    When I try to withdraw $2500
    Then I should have $500

  Scenario: Insufficient founds
    Given I have $3000 in my account
    When I try to withdraw $5000
    Then the transaction will be denied
