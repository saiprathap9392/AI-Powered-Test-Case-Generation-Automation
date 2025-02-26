def generate_bdd_test_cases(user_story: str) -> str:
    return f"""
Feature: {user_story}
Scenario: Valid Login
    Given User navigates to login page
    When User enters valid username and password
    And User clicks login button
    Then User should be redirected to dashboard
"""
