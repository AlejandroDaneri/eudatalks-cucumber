@withdraw
Feature: Withdraw2

  Background:
    Given I have $3000 in my account

  Scenario: Sufficient founds
    When I try to withdraw $2500
    Then I should have $500

  Scenario: Insufficient founds
    When I try to withdraw $5000
    Then the transaction will be denied
