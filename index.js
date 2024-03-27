const selector = "h1[data-testid='title-content']";
const header = document.querySelector(selector);

if (header) {
    header.innerHTML = addLinks(header.innerText)
}

function addLinks(title) {
    return title.replace(
        /MCRM-\d{1,}/g,
        '<a href="https://task.dev.gazprom-neft.ru/browse/$&" target="_blank">$&</a>'
    );
}



