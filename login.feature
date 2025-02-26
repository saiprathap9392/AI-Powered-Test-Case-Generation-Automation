
Feature: {'user_story': 'As a user, I want to log in with valid credentials so that I can access my dashboard.', 'acceptance_criteria': ['User navigates to login page', 'User enters valid username and password', 'User clicks login button', 'User should be redirected to dashboard']}
Scenario: Valid Login
    Given User navigates to login page
    When User enters valid username and password
    And User clicks login button
    Then User should be redirected to dashboard
