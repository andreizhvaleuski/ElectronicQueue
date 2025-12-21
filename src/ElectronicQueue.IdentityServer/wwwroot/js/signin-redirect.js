(function () {
    var meta = document.querySelector("meta[http-equiv=refresh]");
    if (!meta) {
        return;
    }

    var rawUrl = meta.getAttribute("data-url");
    if (!rawUrl) {
        return;
    }

    try {
        // Support relative URLs by resolving against the current origin
        var safeUrl = new URL(rawUrl, window.location.origin);
        // Allow only http and https schemes to prevent javascript:, data:, etc.
        if (safeUrl.protocol === "http:" || safeUrl.protocol === "https:") {
            window.location.href = safeUrl.toString();
        }
    } catch (e) {
        // Invalid URL; do not redirect
    }
}());
