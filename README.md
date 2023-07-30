# Secured Todo List App

## Overview

It is a Todo List mobile application that helps users to keep track of their tasks efficiently. A standout feature is its local authentication mechanism, ensuring that the app can only be accessed after users have entered their passcode. The application is built with modern technologies, such as React Native and Typescript, utilizing React context and hooks to manage state and logic. Besides that, the application also includes unit tests written using Jest and React Native Testing Library.

## Highlights

- Developed using [Expo](https://docs.expo.dev), [React Native](https://reactnative.dev) and [Typescript](https://www.typescriptlang.org/)
- Integrated with [Expo SecureStore](https://docs.expo.dev/versions/latest/sdk/securestore/) for storing data locally on the device
- Integrated with [Expo LocalAuthentication](https://docs.expo.dev/versions/latest/sdk/local-authentication/) for the application's authentication feature
- Added unit tests using [Jest](https://jestjs.io/) and [React Native Testing Library](https://callstack.github.io/react-native-testing-library/).

## Core Functionality

Below is a breakdown of the application core functionalities:

1. **Adding a New Item**:

   - At the bottom of the screen, there's an input box.
   - Users can type a new label into this input box.
   - Upon pressing the "Add" button next to the input box, the new label will be added as a new item to the list.

2. **Toggling Completion Status**:

   - Each item in the list has a checkbox next to it.
   - Users can toggle this checkbox to mark an item as completed or incomplete.

3. **Updating an Item's Label**:

   - To update the label of an item, users first need to select the desired item from the list.
   - Once selected, the input box at the bottom will display the label of the selected item.
   - The button next to the input box will change its label to "Update".
   - Users can then modify the label in the input box and press the "Update" button to save the changes.

4. **Removing an Item**:
   - Each item in the list has a "Remove" button next to it.
   - Pressing this button will remove the item from the list.

## Instructions

**Prerequisites**:

- Ensure you have [Node.js](https://nodejs.org/en) (version 18 or higher) installed on your computer.
- Install the [Expo Go](https://expo.dev/client) app on your mobile device, this is required on your mobile device to run the app after scanning the QR code.

**Steps**:

1. Clone or download the repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install all the necessary dependencies.
4. Execute `npm run start`. This will start the development server and display a QR code.
5. Run the app on your mobile device:
   - On your Android device, press Scan QR Code on the Home tab of the Expo Go app and scan the QR code you see in the terminal.
   - On your iPhone or iPad, open the default Apple Camera app and scan the QR code you see in the terminal.

## Testing

Run `npm run test` to run the available unit tests.

While not all components and functionalities have unit tests, key parts of the app such as the reducer, context, and the TodoList component have been tested. These tests cover the primary operations of the app, including adding, updating, and removing tasks.
