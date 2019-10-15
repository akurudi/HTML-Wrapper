# HTML WRAPPER

This app can be used to wrap any input string with a HTML or XML style tag. It splits the input string based on a delimter you provide and wraps it with the selected tag. This is particularly useful when you have a lot of content that needs to be wrapped in `<UL>` and `<LI>` tags.
```
<TAG>
  Input String
</TAG>
```
It can take any delimter including a special characters or alphanumeric value to split the input string. It then wraps the split string with the selected tag. 

It also accepts an optional *Class Value* that will get added as a class attribute to the selected tag. Example: `<span class="class_name">`

## Installation
You can install project dependacies using either `npm` or `yarn`.

## Usage

## App Configuration
App comes with some default tags and delimiters already in place. You can customize them by editing `src/appConfig.js`. `tags` object holds values for the *Tags* selector and `delimiters` object holds values for the *Dilimiter* selector. 

**DO NOT** remove `"Special Characters"` from the `delimiter` object as it is being refrenced within the app. Choosing this delimiter will make the app look for a value from *Special Character Delimiter* input field.

```
tags = {
  "UL/LI": "ul",
  "P": "p",
  "SPAN": "span",
}
```
```
{
  "Newline": "\\n",
  "Space": "\\s",
  "Special Character": ""
}
```
### Running The App
This app is built using [Create React App](https://github.com/facebook/create-react-app) so, all default scripts apply.

```
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
}
```

## Theming
App is built using [Material UI](https://material-ui.com/) components. Theme configuration for app is done using a `<ThemeProvider>` that accepts a `theme` property. You can customize the theme by editing `src/utils/theme.js`.

