//message listener for background
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log('received ' + request.command);

    if (request.command === 'onClickButtonDownloadVideo') {
        var videoUrl = document.getElementById('mediaPlayer')
            .getElementsByTagName('source')[0]
            .src
            .replace(/\?[^.]+$/, '');

        var videoTitle = document.getElementsByTagName('h1')[0].innerText;

        var videoMessage = videoTitle + ": " + videoUrl;
        console.log(videoMessage);

        // alert(videoMessage);

        chrome.runtime.sendMessage({
            command: 'onDownloadVideo',
            videoUrl: videoUrl
        }, function (response) {
            console.log(response);
        });
    }

    sendResponse({
        result: "success"
    });
});