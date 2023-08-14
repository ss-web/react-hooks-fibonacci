# REACT HOOKS FIBONACCI YEST TESTING

The first trial material for a lesson on react ([youtube link](https://www.youtube.com/watch?v=KbDAbYc7sD4)).

# React App Testing Scenarios

[This test](https://github.com/ss-web/react-hooks-fibonacci-yest/blob/main/src/App.test.js) suite aims to ensure the proper functionality of a React application through a series of comprehensive tests. The application consists of a user interface with a title, input fields, and features involving string manipulation and Fibonacci number calculation.

## Test 1: Initial Title Display

Description: This test verifies that the initial rendering of the React app displays the expected title "String counter" as a prominent heading.
Expected Outcome: The app should render with the correct title "String counter."

## Test 2: Input Field Presence

Description: This test ensures that the React app interface contains exactly three input fields for user interaction.
Expected Outcome: The app interface should include three input fields for user input.

## Test 3: String Concatenation and Display

Description: This test validates the functionality of the app's input manipulation by simulating user input and confirming that the inputs are concatenated into a full string, which is then displayed correctly.
Steps:
Simulate user input for three separate input fields: "Hi," "Simon," and "Lazarev!"
Verify that the app correctly concatenates these inputs into the string "Hi Simon Lazarev!" and displays it.
Expected Outcome: The app should successfully combine the user inputs into the string "Hi Simon Lazarev!" and display it as intended.

## Test 4: Fibonacci Number Calculation

Description: This test examines the app's ability to calculate and display the 1597th Fibonacci number accurately.
Steps:
Trigger the app's Fibonacci number calculation functionality.
Confirm that the calculated Fibonacci number, 1597, is correctly displayed.
Expected Outcome: The app should accurately calculate and display the 1597th Fibonacci number.
By conducting these tests, we aim to guarantee the correct behavior of the React application, encompassing its initial rendering, input field presence, string manipulation, and Fibonacci number calculation features. Successful execution of these tests will provide confidence in the application's reliability and functionality.
