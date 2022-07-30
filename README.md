# ContextMenu.js

<div align="center">
    <i> What something cool like custom context menu in your website or npm app.
    ContextMenu.js is fully customizable, you can use any css framework to customize it. You can make fast context menus using this. ContextMenu.js is best choice for your node app and your website. I am continuously working to improve this.<br>
    Thanks!<br> <br> </i>
    <img src="http://ForTheBadge.com/images/badges/built-with-love.svg" alt="ForTheBadge built-with-love">
    <img src="http://ForTheBadge.com/images/badges/built-with-swag.svg" alt="ForTheBadge built-with-swag"> <br> <br>
    <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/AnonymousXC/ContextMenu.js?color=%23F&style=for-the-badge">
    <img alt="Lines of code" src="https://img.shields.io/tokei/lines/github/AnonymousXC/ContextMenu.js?color=%23f&style=for-the-badge">
    <img alt="GitHub Sponsors" src="https://img.shields.io/github/sponsors/AnonymousXC?color=%23F&style=for-the-badge">
    <img alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/AnonymousXC/ContextMenu.js?color=%23F&style=for-the-badge"> <br>
    <img alt="GitHub" src="https://img.shields.io/github/license/AnonymousXC/ContextMenu.js?color=%23F&style=for-the-badge">
    <img alt="GitHub contributors" src="https://img.shields.io/github/contributors/AnonymousXC/ContextMenu.js?color=%23F&style=for-the-badge">
</div>

<br>
<br>

## Pros

- Single File

- Lightweight

- No Dependencies

- Blazing Fast

- Works on any device including android and ios.

## Cons

- Known none till now.

## Screenshots

![Pic1](./.github/pic1.png) \
![Pic2](./.github/pic2.png)

# Documentation

```Javascript
let menu = new ContextMenu({
    removeDefaultMenu: false,
    addAtLast: true,
    menu: [
        {
            seperator: true,
        },
        {
            name: "first",
            cmd: "ContextMenuFunction.reloadPage()"
        },
        {
            name: "second",
            cmd: "ContextMenuFunction.reloadPage()"
        },
    ]
});
```

- Include the ContextMenu.js or ContextMenu.min.js.

- removeDefaultMenu :- (takes boolean) removes the default menu.

- addAtLast :- (takes boolean) adds your custom menu at last if `removeDefaultMenu = false`

- menu :- (array of objects) custom menu structure.
    - name :- (String) name of context menu button.
    - cmd :- (String) name of function when button pressed.