Feature: Verify App Launch and Button Click

Scenario: User logs in successfully
    Given the app is launched
    When the user clicks the first button
    Then the second button should be clicked
