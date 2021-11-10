/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./src/background/background.ts ***!
  \**************************************/

chrome.runtime.onInstalled.addListener(async () => {
    const url = chrome.runtime.getURL("index.html");
    const tab = await chrome.tabs.create({ url });
    console.log(`タブのID：${tab.id}`);
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLEtBQUssSUFBSSxFQUFFO0lBQ2hELE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2hELE1BQU0sR0FBRyxHQUFHLE1BQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNqQyxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tcmVhY3QtYm9pbGVyLy4vc3JjL2JhY2tncm91bmQvYmFja2dyb3VuZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjaHJvbWUucnVudGltZS5vbkluc3RhbGxlZC5hZGRMaXN0ZW5lcihhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHVybCA9IGNocm9tZS5ydW50aW1lLmdldFVSTChcImluZGV4Lmh0bWxcIik7XG4gIGNvbnN0IHRhYiA9IGF3YWl0IGNocm9tZS50YWJzLmNyZWF0ZSh7IHVybCB9KTtcbiAgY29uc29sZS5sb2coYOOCv+ODluOBrklE77yaJHt0YWIuaWR9YCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==