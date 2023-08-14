# React Hooks Fibonacci Test Suite

![React Hooks Fibonacci Test Suite](https://ss-web.ru/assets/images/fib-min.jpg)

Welcome to the React Hooks Fibonacci Test Suite, designed to thoroughly validate the functionality of your React application. This suite includes a variety of tests that cover different aspects of your app, ensuring its correctness and reliability.

## Table of Contents

- [Overview](#overview)
- [Test Scenarios](#test-scenarios)
  - [Test 1: Initial Title Display](#test-1-initial-title-display)
  - [Test 2: Input Field Presence](#test-2-input-field-presence)
  - [Test 3: String Concatenation and Display](#test-3-string-concatenation-and-display)
  - [Test 4: Fibonacci Number Calculation](#test-4-fibonacci-number-calculation)
- [How to Use](#how-to-use)
- [Contributing](#contributing)
- [License](#license)

## Overview

This test suite is developed for the React Hooks Fibonacci application, as part of a lesson available on [YouTube](https://www.youtube.com/watch?v=KbDAbYc7sD4). The application features a user interface with input fields, string manipulation, and Fibonacci number calculation.

## Test Scenarios

### Test 1: Initial Title Display

**Description:** This test verifies that the initial rendering of the React app displays the expected title "String counter" as a prominent heading.

**Expected Outcome:** The app should render with the correct title "String counter."

### Test 2: Input Field Presence

**Description:** This test ensures that the React app interface contains exactly three input fields for user interaction.

**Expected Outcome:** The app interface should include three input fields for user input.

### Test 3: String Concatenation and Display

**Description:** This test validates the functionality of the app's input manipulation by simulating user input and confirming that the inputs are concatenated into a full string, which is then displayed correctly.

**Steps:**
1. Simulate user input for three separate input fields: "Hi," "Simon," and "Lazarev!"
2. Verify that the app correctly concatenates these inputs into the string "Hi Simon Lazarev!" and displays it.

**Expected Outcome:** The app should successfully combine the user inputs into the string "Hi Simon Lazarev!" and display it as intended.

### Test 4: Fibonacci Number Calculation

**Description:** This test examines the app's ability to calculate and display the 1597th Fibonacci number accurately.

**Steps:**
1. Trigger the app's Fibonacci number calculation functionality.
2. Confirm that the calculated Fibonacci number, 1597, is correctly displayed.

**Expected Outcome:** The app should accurately calculate and display the 1597th Fibonacci number.

## How to Use

To run the tests and validate the functionality of your React Hooks Fibonacci application, follow these steps:

1. Clone this repository: `git clone https://github.com/ss-web/react-hooks-fibonacci-yest.git`
2. Install dependencies: `npm install`
3. Run the tests: `npm test`

## Contributing

We welcome contributions from the community! If you find any issues or would like to enhance the test suite, feel free to open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
