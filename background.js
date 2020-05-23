//load webpage when extension is first installed-----------------------------------
chrome.runtime.onInstalled.addListener(function() {
 chrome.tabs.create({url : "https://google.com/"}); //site to visit on extension install
});
//---------------------------------------------------------------------------------



// create an event that happens every 30 mins--------------------------------------
chrome.alarms.create("30min", {periodInMinutes: 30});
chrome.alarms.onAlarm.addListener(function(alarm) {
  if (alarm.name === "30min") {
        chrome.tabs.query({
             url: "https://google.com/"  //see if tab is open//
         }, function(tabs) {
             if (tabs.length === 0) {
                 chrome.tabs.create({url : "https://google.com/", active: true }); //create tab if not open
             } else {
                 // Focus first match
                 chrome.tabs.update(tabs[0].id, { active: true }); //make tab active if already open
             }
         });
  }
});
//---------------------------------------------------------------------------------



//show alert when ever a page finishes loading, includes new tab creation----------
chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
//chrome.tabs.onCreated.addListener( function (tabId, changeInfo, tab) { //use this for alert on new tab only, not refreshes
  if (changeInfo.status == 'complete') {
   alert("ATTENTION 8TH GRADERS - 8th grader Chromebooks will be disabled at the end of May. Please return your device on the assigned day.") //text on alert msg
  }
})
//---------------------------------------------------------------------------------

