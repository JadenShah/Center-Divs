chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'centerDivs') {
        centerDivs();
    }
});



function centerDivs() {
    var divs = document.getElementsByTagName('*');

    // Add a class to initiate the transition
    for (var i = 0; i < divs.length; i++) {
        if (divs[i].localName == 'script' || divs[i].localName == 'noscript' || divs[i].localName == 'style') continue;
        divs[i].classList.add('animate-center');
    }
}

// Call the function when the DOM is ready
document.addEventListener('DOMContentLoaded', centerDivs);

// Embed CSS using template literals
const styles = `
    @keyframes animateCenter {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .animate-center {
        transition: all 5s ease-in-out;
        display: flex;
        flex-direction: column !important;
        align-items: center !important;
        justify-content: center;
        align-self: auto;
        position: relative !important;
        animation: animateCenter 5s ease-in-out;
    }
`;

// Create a style element and append it to the head of the document
const styleElement = document.createElement('style');
styleElement.type = 'text/css';
styleElement.appendChild(document.createTextNode(styles));
document.head.appendChild(styleElement);
