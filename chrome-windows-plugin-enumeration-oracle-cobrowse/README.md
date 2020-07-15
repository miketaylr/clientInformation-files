These files are part of Oracle Co-Browse solution, which is using `clientInformation.plugins` on Windows only to detect the presence of the ClickOnce plugin. The code path is quite narrow, it seems to be reached only in very specific cases: Chrome on Windows, when the app is loaded in ACB mode with .NET.
Probably a minor risk for Chromium-based browsers.
