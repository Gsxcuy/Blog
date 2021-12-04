import DefaultTheme from "vitepress/theme";
import "./custom.styl";

// figlet -f big "Gsxcuy"
console.log(
  `%c
  _____
 / ____|
| |  __ _____  _____ _   _ _   _
| | |_ / __\\ \\/ / __| | | | | | |
| |__| \\__ \\>  < (__| |_| | |_| |
 \\_____|___/_/\\_\\___|\\__,_|\\__, |
                            __/ |
                           |___/
`,
  "color: #42b983"
);
console.log(`%c微信/微博, 可添加：%cGsxcuy`, "color: red", "color: #42b983");
export default DefaultTheme;
