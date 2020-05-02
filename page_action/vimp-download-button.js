var buttonDownloadVideo = document.getElementById('buttonDownloadVideo');

buttonDownloadVideo.onclick = function (element) {
    console.log('onClick #buttonDownloadVideo');

    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            command: 'onClickButtonDownloadVideo'
        }, function (response) {
            console.log(response);
        });
    });
}