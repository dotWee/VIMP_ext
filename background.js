chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [
            new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {
                    hostEquals: 'elearning.uni-regensburg.de'
                },
            }),
            new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {
                    hostEquals: 'vimp.oth-regensburg.de'
                },
            })
        ],

        actions: [
            new chrome.declarativeContent.ShowPageAction()
        ]
    }]);
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log('onMessage: ');
    console.log(request);

    if (request.command === 'onDownloadVideo') {
        chrome.downloads.download({
            url: request.videoUrl,
            saveAs: true
        });
    }

    sendResponse({
        result: "success"
    });
});