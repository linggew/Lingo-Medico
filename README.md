# Lingo Medico

Lingo Medico (LM) is a mobile application for both Android and iOS
that translates the user's inputted medical history into a number of supported
languages.

---

## Table of Contents

- [Description](#description)
  - [Current Features](#current-features)
  - [Future Features](#future-features)
  - [Codebase Areas of Improvement](#codebase-areas-of-improvement)
- [Technologies](#technologies)
- [Development Environment Setup](#development-environment-setup)
- [How to Contribute](#how-to-contribute)
  - [How to Build](#how-to-build)
  - [Documentation](#documentation)
  - [Building Language Packs](#building-language-packs)

---

## Description

LM seeks to eliminate language barriers when communicating your medical needs wherever
you are -- either traveling abroad or in your own neighborhood. From filling a subscription
to getting help during a medical emergency, communicating medical information with clinical
precision should not be left to generic translation software.

### Current Features

LM provides a simple and intuitive interface where users fill out their medical history
in a comprehensive form vetted by medical professionals. The fields of this form are presented
in two languages: the user's chosen base language and their chosen translated language, which
can be changed at any time.

> **Note**: Although the field headings and their translations are medically vetted, personal
> information (i.e. field values) are inputted by the user. LM is not intended to replace
> official medical documents -- it is intended to streamline medical communication through
> language barriers.

The user can also create multiple profiles (i.e. medical histories) on one device. This is
particularly useful if the user is a parent or a caretaker. Each profile can be assigned
a photo to identify the profile subject.

Other major functionality includes:

- **Locality** -- the user does not need an internet connection to use LM.
- **Efficiency** -- LM has lightweight storage requirements and fast responsiveness.
- **Security** -- There is no functionality utlizing network connectivity thereby
  reducing security vulneraliblity.
- **Persistence** -- the user can exit the LM app without losing current changes.
- **Accessibility** -- adherence to accessibility standards through color scheme and font size.

### Future Features

The LM team is currently working to implement the following functionality:

- **Quick access menu** -- jump to sections important to the profile subject
- **Search bar** -- find keywords in the current form
- **Medical emergency button** -- jump to the medical emergency section when pressed
- **Portability** -- export a form as a PDF
- **State and history** -- indicate the last time a form was edited and any incomplete sections

### Codebase Areas of Improvement

The current state of the Lingo Medico codebase was produced in 8 months by a team of
student developers at Portland State University. As such, there are notable
opportunities to improve the codebase for both the user and developer, including:

- Incorporating a logging library
- Enhanced exception handling
- Unit testing suite using a testing framework integrated with React Native (e.g. Jest)

## Technologies

LM is implemented using the following technologies:

- [React-Native](https://reactnative.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/en/) & [npm](https://www.npmjs.com/)
- [Expo](https://docs.expo.dev/)
- [Prettier ESLint](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint)
- [markdownlint](https://www.npmjs.com/package/markdownlint)
- [Typedoc](https://typedoc.org/)

## Development Environment Setup

1. Install [Node](https://nodejs.org/en/).
1. Clone the repository.
1. Run `npm i` and `npm i expo-cli` to install all package dependencies.
1. Make sure all other required packages needed to run Expo are installed (such as Watchman if you're on macOS or Linux).
1. Install the ESLint, Prettier, Prettier ESLint, and markdownlint VSCode extensions.
1. It's also recommended that you use an [Android](https://docs.expo.dev/workflow/android-studio-emulator/)
   and [iOS](https://docs.expo.dev/workflow/ios-simulator/) simulator.
1. Run `npm start` to launch the application in Expo.

## How to Contribute

1. Assign yourself an issue from the [project board](https://github.com/orgs/Capstone-Project-Pdx/projects/3).
2. Switch to the develop branch.

   `git switch develop`

3. Create a feature branch off of develop that will be used to complete your assigned issue.

   `git checkout -b yourBranchName`

4. When you are finished working on your issue, switch back to develop and pull in the latest changes.

   `git checkout develop && git pull`

5. Switch back to your feature branch and merge those changes from develop and resolve any conflicts.

   `git checkout yourBranchName && git merge develop`

   _-- Resolve conflicts if any --_

   `git merge --continue`

6. [Build LM for both Android and iOS](#how-to-build) off of your branch and test your implementation
   fully on an Android and iOS emulator as well as a physical Android device if you have one.
7. Submit a pull request into **develop** (not main) once you are finished with your work.
8. Resolve any comments created by the reviewer after they review and test your code.

### How to Build

1. Create an Expo account.
2. Follow Expo's instructions to [install eas and configure the project](https://docs.expo.dev/build/setup/)
   for building (steps 1-3).
3. To build an Android executable (.apk), run `eas build -p android --profile local`.
   To build an iOS executable (.tar.gz), run `eas build -p ios --profile local`.
4. Follow Expo's instructions to install and run the app for either
   [Android](https://docs.expo.dev/build-reference/apk/#installing-your-build) or
   [iOS](https://docs.expo.dev/build-reference/simulators/#installing-your-build-on-the-simulator).

### Documentation

This project uses [Typedoc](https://typedoc.org/) to generate documentation throughout the source
code. To generate documentation, run `npm run docs` in the project root directory, which will create
the `docs` directory. Copy the full path of `docs/index.html` and paste it into a browser to
view the project's documentation. Run `npm run clean` to delete the `docs` directory.

Use the `/** Your comment here. */` syntax to create documentation comments that will be
generated with Typedoc. Refer to [Typedoc's documentation](https://typedoc.org/guides/doccomments/)
for a reference on how these comments should be styled.

### Building Language Packs

The language packs available in LM at the time of writing were scraped from PDF versions of the software
using Adobe and a Python extraction script. Find out how to this process was done by reading the documentation
in the `scipts` directory.
