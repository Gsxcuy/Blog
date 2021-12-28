import DefaultTheme from "vitepress/theme";
import "./custom.styl";

// figlet -f big "Gsxcoy"
console.log(
  `%c
   _____
  / ____|
 | |  __ _____  _____ ___  _   _
 | | |_ / __\\ \\/ / __/ _ \\| | | |
 | |__| \\__ \\>  < (_| (_) | |_| |
  \\_____|___/_/\\_\\___\\___/ \\__, |
                            __/ |
                           |___/
`,
  "color: #42b983"
);
console.log(`%c微信/微博, 可添加：%cGsxcoy`, "color: red", "color: #42b983");
export default DefaultTheme;
