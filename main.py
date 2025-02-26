import os
import logging
import subprocess
from ai_model.generate_tests import generate_bdd_test_cases
from test_case_converter.convert_to_gherkin import convert_to_gherkin

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

def main():
    user_story_with_criteria = {
        "user_story": "As a user, I want to log in with valid credentials so that I can access my dashboard.",
        "acceptance_criteria": [
            "User navigates to login page",
            "User enters valid username and password",
            "User clicks login button",
            "User should be redirected to dashboard"
        ]
    }

    try:
        # Step 1: Generate BDD test cases
        logging.info("Generating BDD test cases...")
        bdd_test_cases = generate_bdd_test_cases(user_story_with_criteria)
        logging.info("Generated BDD Test Cases:\n%s", bdd_test_cases)

        # Step 2: Convert to Gherkin syntax
        logging.info("Converting to Gherkin syntax...")
        gherkin_tests = convert_to_gherkin(bdd_test_cases)
        with open("playwright_tests/tests/login.feature", "w") as f:
            f.write(gherkin_tests)
        logging.info("Generated Gherkin Test Cases:\n%s", gherkin_tests)

        # Step 3: Generate Playwright tests
        logging.info("Running Playwright tests...")

        try:
            subprocess.run("npx playwright test --reporter=line --timeout=120000", shell=True, check=True)
            logging.info("Playwright tests completed successfully.")
        except subprocess.CalledProcessError as e:
            logging.error("Playwright tests failed: %s", e)

    except Exception as e:
        logging.error("An error occurred: %s", e, exc_info=True)

if __name__ == "__main__":
    main()