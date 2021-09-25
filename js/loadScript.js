function loadScript(url, callback) {
    const script = document.createElement("script");

    script.src = url;
    script.onload = callback;
    document.head.appendChild(script);
}

console.log('loadScript22222.js');