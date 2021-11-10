chrome.runtime.onInstalled.addListener(async () => {
  const url = chrome.runtime.getURL("index.html");
  const tab = await chrome.tabs.create({ url });
  console.log(`タブのID：${tab.id}`);
});
