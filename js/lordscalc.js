export class DarkLightMode {

    static darkMode = false;
    static toggleButtonElm;
    static notification = [];

    static setNotificationOnModeChange(obj) {
        DarkLightMode.notification.push(obj);
    }

    static setModeWithUrlParams() {
        let url = new URL(document.location);
        let params = new URLSearchParams(url.search);
        const paramsArray = String(params).split('&');

        for (let index in paramsArray) {
            const singleParam = paramsArray[index].split('=');
            if (singleParam[0] == 'm') {
                if (singleParam[1] == "moonlight") {
                    DarkLightMode.darkMode = true;
                } else if (singleParam[1] == "sunlight") {
                    DarkLightMode.darkMode = false;
                }
                DarkLightMode.updateUrlParams();
                break;
            } else {
                DarkLightMode.darkMode = false;
            }
        }  
        DarkLightMode.updateColorMode();

            //DarkLightMode.setUrlModeInMenu();
    }

    static setupButton() {
        DarkLightMode.toggleButtonElm = document.getElementById("dark-light");
        DarkLightMode.toggleButtonElm.addEventListener('click', DarkLightMode.toggletMode);
        DarkLightMode.imageElm = document.getElementById("dark-light-mode-image");
        DarkLightMode.labelElm = document.getElementById("dark-light-mode-label");
    }

    static toggletMode() {
        DarkLightMode.darkMode = !DarkLightMode.darkMode;
        DarkLightMode.updateColorMode(); 
        DarkLightMode.updateUrlParams();
        BackgroundImages.setImages();
        for (let objIndex in DarkLightMode.notification){
            DarkLightMode.notification[objIndex].darkLightModeHasChanged();
        }
    }
    
    static updateColorMode(){
        if (!DarkLightMode.toggleButtonElm) {
            DarkLightMode.setupButton();
        }

        const bodyElm = document.body;

        if (!DarkLightMode.darkMode) {
            bodyElm.classList.remove("dark-mode");
            DarkLightMode.imageElm.src = "/mode-images/moon.svg";
            DarkLightMode.labelElm.innerHTML = "moonlight"
        } else {
            bodyElm.classList.add("dark-mode");
            DarkLightMode.imageElm.src = "/mode-images/sun.svg";
            DarkLightMode.labelElm.innerHTML = "sunlight";
        }
    }

    static updateUrlParams() {
        const url = new URL(window.location);
        
        if(DarkLightMode.darkMode) {
            url.searchParams.set('m', 'moonlight');
        } else {
            url.searchParams.delete('m');
        }

        window.history.pushState({}, '', url);

        DarkLightMode.setUrlModeInMenu();

    }

    static setUrlModeInMenu() {
        if (!DarkLightMode.menuLinks) {
            const tmp = document.getElementsByClassName("nav-link");
            DarkLightMode.menuLinks = Array.from(tmp);
            const sendMessageLink = document.getElementById("message-link");
            if (sendMessageLink) {
                DarkLightMode.menuLinks.push(sendMessageLink);
            }
        }

        let params = DarkLightMode.darkMode ? "?m=moonlight" : "";

        for (let link in DarkLightMode.menuLinks) {
            const url = DarkLightMode.menuLinks[link].getAttribute("data-url");

            DarkLightMode.menuLinks[link].href = url + params;
        }
    }
}

export class BackgroundImages {

    static activeImage = null;
    static topElement = null;
    static bottomElement = null;

    static directory = "/backgrounds/";
    static images = [
        ["bg_01_90.webp", "bg_01_60.webp"],
        ["bg_02_90.webp", "bg_02_60.webp"],
        ["bg_03_90.webp", "bg_03_60.webp"],
        ["bg_04_90.webp", "bg_04_60.webp"],
        ["bg_05_90.webp", "bg_05_60.webp"],
        ["bg_06_90.webp", "bg_06_60.webp"],
        ["bg_07_90.webp", "bg_07_60.webp"],
        ["bg_08_90.webp", "bg_08_60.webp"]
    ]

    static setImages() {
        if (!BackgroundImages.topElement) {
            BackgroundImages.topElement = document.getElementById("top-banner");
        } 
        if (!BackgroundImages.bottomElement) {
            BackgroundImages.bottomElement = document.getElementById("bottom-image");
        }
        if (BackgroundImages.activeImage == null) {
            BackgroundImages.activeImage = BackgroundImages.images[
                Math.floor(Math.min(Math.random()*BackgroundImages.images.length-0.01, BackgroundImages.images.length - 1))];
        }

        BackgroundImages.topElement.style.backgroundImage =  "url(" + BackgroundImages.directory + BackgroundImages.activeImage[DarkLightMode.darkMode ? 1 : 0] + ")";
        //BackgroundImages.bottomElement.src = BackgroundImages.directory + BackgroundImages.activeImage[DarkLightMode.darkMode ? 1 : 0];

    }

}
