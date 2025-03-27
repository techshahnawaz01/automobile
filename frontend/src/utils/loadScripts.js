// src/utils/loadScripts.js
export const loadScripts = () => {
    const scripts = [
        "automobile/frontend/src/assets/js/jquery-3.6.0.min.js",
        "automobile/frontend/src/assets/js/jquery.slick.min.js",
        "automobile/frontend/src/assets/js/odometer.js",
        "automobile/frontend/src/assets/js/ripples.min.js",
        "automobile/frontend/src/assets/js/wow.min.js",
        "automobile/frontend/src/assets/js/main.js",
    ];

    scripts.forEach((src) => {
        if (!document.querySelector(`script[src="${src}"]`)) {
            const script = document.createElement("script");
            script.src = src;
            script.async = true;
            document.body.appendChild(script);
        }
    });
};
