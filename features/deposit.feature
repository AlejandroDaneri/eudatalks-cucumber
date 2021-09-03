@deposit
Feature: Deposit

  Scenario: Deposit only one time
    Given I have $3000 in my account
    When I deposit $2000
    Then I should have $5000

  Scenario: Deposit many times
    Given I have $3000 in my account
    When I deposit $2000
    And I deposit $2000
    And I deposit $2000
    * I deposit $2000
    * I deposit $2000
    Then I should have $13000
