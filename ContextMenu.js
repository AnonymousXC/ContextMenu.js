
const ContextMenu = function(options) {

    this.options = options;
    let isMenuAdded = false;

    const functions = {

        addHtml : async () => {
            let html = `
            <div id="ContextMenu-Body">
                <button class="ContextMenu-Buttons" onclick="history.back()">Back</button>
                <button class="ContextMenu-Buttons" onclick="history.forward()">Forward</button>
                <button class="ContextMenu-Buttons" onclick="location.reload()">Reload</button>
                <hr class="ContextMenu-hr">
                <button class="ContextMenu-Buttons">Cut</button>
                <button class="ContextMenu-Buttons">Copy</button>
                <button class="ContextMenu-Buttons">Paste</button>
                <hr class="ContextMenu-hr">
                <button class="ContextMenu-Buttons">Bookmark Page</button>
                <button class="ContextMenu-Buttons" >Save Page As...</button>
                <button class="ContextMenu-Buttons" onclick="selAll()">Select All</button>
                <hr class="ContextMenu-hr">
                <button class="ContextMenu-Buttons">Take Screenshot</button>
                <hr class="ContextMenu-hr">
                <button class="ContextMenu-Buttons">View Page Source</button>
                <button class="ContextMenu-Buttons">Inspect</button>
            </div>
            `;
            document.body.insertAdjacentHTML("beforeend", html);
            isMenuAdded = true;
        },

        addStyles : () => {
            const style = `
                <style> 
                    #ContextMenu-Body {
                        position: absolute;
                        display: none;
                        width: 200px;
                        max-width: max-content;
                        background-color: rgba(28,28,30, 0.85);
                        padding: 8px;
                        border-radius: 10px;
                        border: 1.5px solid rgba(255,255,255,0.5);
                        user-select: none !important;
                    }
                    .ContextMenu-Buttons {
                        position: relative;
                        min-width: min-content;
                        width: 100%;
                        background-color: transparent;
                        border: none;
                        text-align: left;
                        color: white;
                        font-weight: 500;
                        font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto;
                        font-size: 0.9rem;
                        border-radius: 12px;
                        padding-left: 12px;
                        outline: none !important;
                    }
                    .ContextMenu-hr {
                        width: 90%;
                        border: 0.1px solid rgba(255,255,255,0.4);
                        border-radius: 5px;
                        margin-left: 10px;
                    }
                    .ContextMenu-Buttons:hover {
                        background-color: rgb(10, 132, 255);
                    }
                </style>
            `;
            document.head.insertAdjacentHTML("beforeend", style)
        },

        startup : () => {
            if(isMenuAdded === false) return;
            let htmlElm = document.querySelector("html");
            let menu = document.getElementById("ContextMenu-Body");
            htmlElm.addEventListener("contextmenu", (e) => {
                e.preventDefault();
                menu.style.display = "block";
                menu.style.left = e.clientX + "px";
                menu.style.top = e.clientY + "px";
            });
            htmlElm.addEventListener("click", (e) => {
                if(menu === e.target) return;
                menu.style.display = "none";
            })
        }
    }


    functions.addHtml();
    functions.addStyles();
    functions.startup();
}

// function goBack() {
//     history.back();
// }

// function goForward() {
//     history.forward();
// }

// function reloadPage() {
//     location.reload()
// }

function selAll() {
    document.execCommand("selectAll")
}
