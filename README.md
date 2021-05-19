# Mozilla Rally extension and web notifications demo.
The purpose of this repository is to give examples of possible ways to notify users via browser extensions and websites.

## Extension:
- browser notifications
  - automatically opted-in, set in extension manifest permissions
- badging toolbar button
- show "page action" in URL bar
- add UI to web pages via content scripts
- open a new window/tab

## Web 
- browser notifications
  - each site needs to ask user to explicitly opt-in
- serviceworker
  - background actions, such as syncing data and "push" notifications
  - in practice, this will likely be a browser notification
- pass messages to extensions
  - trusted sites can trigger actions in the extension
- open a new window/tab

## Email
- self-explanatory / no demo needed, but currently users need to opt-in
- authentication would mean that we have a valid email address for all users
  - we need to continue to be careful to separate email required for basic functioning vs. marketing
- could link to website from email, which could then pass messages to extensions.

# Outstanding questions
- how often is too often to annoy users?
  - for example, we bother users after install and on every browser restart when the study is installed but core is missing
- how much should we worry new tabs/windows opening out-of-the-blue?
  - is it better form to send a notification and have clicking that trigger?

# Install dependencies
From the cloned repository directory, install all the NPM dependencies:

```bash
npm install .
```

## Supported NPM commands
The template comes with a set of pre-defined NPM commands (to run as `npm run <command>`) to help study authors:

* `build`: assembles the final addon. The bundler generated code is saved in the `dist/` directory.
* `dev`: assembles the addon in _developer mode_. In this mode data doesn't get submitted but, instead, is dumped to the [Browser Console](https://developer.mozilla.org/en-US/docs/Tools/Browser_Console). This mode allows for a smoother development process.
* `lint`: run linting on the add-on code.
* `package`: packages the final archive containing the bundled addon, is saved in the `web-ext-artifacts` directory.
* `start`: build the addon and run a Firefox instance and side-load the add-on for manual testing or debugging purposes.
* `test-integration`: perform the provided integration test for the final addon.
* `watch`: assembles the addon in _developer mode_, then runs the browser and watches the source code for changes, automatically reloading the extension when needed.

## Manual testing in the browser
To test, either load as a temporary add-on in Firefox (`about:debugging`) or Chrome ("developer mode" in `chrome://extensions`) or use `npm run start`.
