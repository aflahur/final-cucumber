Feature: Product Menu Test
    
    Background: User is Logged in
        Given I open the Kasir Aja website
        When I login with valid credentials
        Then I should be on the dashboard page
  
    Scenario: Successfully add product
        Given I go to product page
        When I add new product
        Then I can see the product in product page