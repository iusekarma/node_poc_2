content = document.getElementById('title')

document.getElementById('button').addEventListener('click',() => {

    chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
        curTab = tabs[0];
        content.innerText = curTab.title;
    })
})