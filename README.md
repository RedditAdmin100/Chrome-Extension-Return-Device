# Chrome-Extension-Return-Device
This extension will constantly remind students that it is time to return their chromebook

background.js has three main parts

1.The first part determines what page people are brought to when the extension is first installed.
(for me a page that has the return schedule)

2.The second part is a timer that will open a web page every 30 mins. You need to adjust the time
and website accordingly. The website I chose is the same used in the first part. If the page is
already open it will make that tab active. If that page isn’t already open in a tab it will create
a new tab with the specified url. This will repeat every 30 mins

3.The third part makes an alert box pop up every time a page is loaded/refreshed, or a new tab is
created. Change the alert message to the desired message. Once the alert has popped up a few times,
users will be given the option to check a box that will prevent future alert box popups.

Put the two files in a folder and zip them. Go to
https://chrome.google.com/webstore/developer/dashboard?hl=en-US&gl=US 
and upload the zip file. This should be free if you are publishing only to your domain.
Once the extension is published 