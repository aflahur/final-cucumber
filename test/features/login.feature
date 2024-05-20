Feature: Kasir Aja Login Tests

  Scenario: Login successfully with valid credentials
    Given I open the Kasir Aja website
    When I login with valid credentials
    Then I should be on the dashboard page
