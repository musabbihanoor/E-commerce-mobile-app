# React-Native-Ecommerce

A template for a ecommerce mobile app using React Native.

## Features

- Splash Screen
- Onboarding Screens
- Login
- Signup
- Cart
- Add To Cart
- Remove Cart
- Category
- Best Selling
- Profile
- Search
- Order History
- Wish List

## Screens Recording

![Video](/assets/gif/video_.gif?raw=true 'Run time Video')

## Requirements

- [Node](https://nodejs.org) `6.x` or newer
- [React Native](http://facebook.github.io/react-native/docs/getting-started.html) for development
- [Android Studio](https://developer.android.com/studio/index.html) for Android development
- [Android SDK](https://developer.android.com/sdk/) `23.0.1` or newer for Android development
- [Android Marshmallow](https://www.android.com/versions/marshmallow-6-0/) or newer on your Android device to test properly

See [Getting Started](https://facebook.github.io/react-native/docs/getting-started.html) to install requirement tools.

## Stack

- [React JS](https://reactjs.org/) is a JavaScript library
- [React Native](https://facebook.github.io/react-native/) `0.63.2` for building native apps using react
- [Babel](http://babeljs.io/) `7.2.3` for ES6+ support
- [Bottom-Tabs](https://github.com/react-navigation/react-navigation) `5.11.11` for Bottom Navigations
- [Navigation for React Native](https://reactnavigation.org/) a router based on new React Native Navigation API

## Libraries

- [@chakrahq/react-native-side-menu](https://github.com/react-native-community/react-native-side-menu) `1.3.4`
- [@fortawesome/fontawesome-svg-core](https://www.npmjs.com/package/@fortawesome/react-native-fontawesome) `6.2.1`
- [@fortawesome/free-regular-svg-icons](https://www.npmjs.com/package/@fortawesome/react-native-fontawesome) `6.2.1`
- [@fortawesome/free-solid-svg-icons](https://www.npmjs.com/package/@fortawesome/react-native-fontawesome) `6.2.1`
- [@fortawesome/react-native-fontawesome](https://www.npmjs.com/package/@fortawesome/react-native-fontawesome) `0.3.0`
- [@react-navigation/bottom-tabs](https://reactnavigation.org/docs/bottom-tab-navigator/) `6.5.1`
- [@react-navigation/native](https://reactnavigation.org/docs/getting-started) `6.1.0`
- [@react-navigation/stack](https://reactnavigation.org/docs/native-stack-navigator) `6.3.8`
- [mobx](https://www.npmjs.com/package/mobx) `6.7.0`
- [mobx-react](https://www.npmjs.com/package/mobx-react) `7.6.0`
- [react-native-gesture-handler](https://www.npmjs.com/package/react-native-gesture-handler) `2.8.0`
- [react-native-onboarding-swiper](https://www.npmjs.com/package/react-native-onboarding-swiper) `1.2.0`
- [react-native-reanimated](https://www.npmjs.com/package/react-native-reanimated) `2.13.0`
- [react-native-safe-area-context](https://www.npmjs.com/package/react-native-safe-area-context) `4.4.1`
- [react-native-screens](https://www.npmjs.com/package/react-native-screens) `3.18.2`
- [react-native-snap-carousel-v4](https://www.npmjs.com/package/react-native-snap-carousel-v4) `1.0.1`
- [react-native-splash-screen](https://www.npmjs.com/package/react-native-splash-screen) `3.3.0`
- [react-native-svg](https://www.npmjs.com/package/react-native-svg) `13.6.0`


## Get Started

#### 1. Installation

On the command prompt run the following commands

```sh
$ git clone https://github.com/musabbihanoor/E-commerce-mobile-app.git

$ cd E-commerce-mobile-app/

$ npm install
```


#### 3. Simulate for Android

- Make sure you have an **Android emulator** installed and running.

- Run the following command in your terminal.

```sh
$ react-native run-android
```

## Rename Project

Rename react-native app with just one command

![react-native-rename](https://cloud.githubusercontent.com/assets/5106887/24444940/cbcb0a58-149a-11e7-9714-2c7bf5254b0d.gif)

> This package assumes that you created your react-native project using `react-native init`.

#### Installation

```
yarn global add react-native-rename
or
npm install react-native-rename -g
```

Switch to new branch first

> better to have back-up

```
git checkout -b rename-app
```

#### Usage

```
react-native-rename <newName>
```

> With custom Bundle Identifier (Android)

```
react-native-rename <newName> -b <bundleIdentifier>
```

#### Example

```
react-native-rename "Shopping App"
```

> With custom Bundle Identifier

```
react-native-rename "Shopping App" -b com.junedomingo.shoppingapp
```
