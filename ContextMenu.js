
const ContextMenu = function(options) {

    this.options = options;
    this.menu = this.options.menu;
    let isMenuAdded = false;

    const functions = {

        addHtml : async () => {
            let customMenu = ``;
            for (let i = 0; i < this.menu.length; i++) {
                const ele = this.menu[i];
                if(ele.seperator === true)
                    customMenu += `<hr class="ContextMenu-hr">`;
                else
                    customMenu += `<button class="ContextMenu-Buttons" onclick="${ele.cmd}">${ele.name}</button>`
            }
            let html = `
            <div id="ContextMenu-Body">
                ${customMenu && this.options.addAtLast === false ? customMenu: ""}
                ${this.options.removeDefaultMenu ? "" : `<button class="ContextMenu-Buttons" onclick="ContextMenuFunction.goBack()">Back</button>
                <button class="ContextMenu-Buttons" onclick="ContextMenuFunction.goForward()">Forward</button>
                <button class="ContextMenu-Buttons" onclick="ContextMenuFunction.reloadPage()">Reload</button>
                <hr class="ContextMenu-hr">
                <button class="ContextMenu-Buttons" onclick="ContextMenuFunction.cut()">Cut</button>
                <button class="ContextMenu-Buttons" onclick="ContextMenuFunction.copy()">Copy</button>
                <button class="ContextMenu-Buttons" onclick="ContextMenuFunction.paste()">Paste</button>
                <hr class="ContextMenu-hr">
                <button class="ContextMenu-Buttons">Bookmark Page</button>
                <button class="ContextMenu-Buttons" >Save Page As...</button>
                <button class="ContextMenu-Buttons" onclick="ContextMenuFunction.selectAll()">Select All</button>
                <hr class="ContextMenu-hr">
                <button class="ContextMenu-Buttons" onclick="ContextMenuFunction.showSource()">View Page Source</button>
                <button class="ContextMenu-Buttons" onclick="ContextMenuFunction.openConsole()">Inspect</button>`}
                ${customMenu && this.options.addAtLast === true ? customMenu: ""}
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
            });
            htmlElm.addEventListener("selectstart", (e) => {
                menu.style.display = "none";
            })
            menu.addEventListener("blur", (e) => {
                menu.style.display = "none";
            });
        }
    }


    functions.addHtml();
    functions.addStyles();
    functions.startup();
}

const ContextMenuFunction = {
    goBack: () => {
        history.back(); 
    },
    goForward: () => {
        history.forward(); 
    },
    reloadPage: () => {
        location.reload();
    },
    selectAll: () => {
        document.execCommand("selectAll");
    },
    cut: () => {
        document.execCommand("cut");
    },
    copy: () => {
        document.execCommand("copy");
    },
    paste: () => {
        document.execCommand("paste");
    },
    showSource: () => {
        javascript:void(window.open("view-source:" + window.location))
    },
    openConsole: () => {
        
    }
}
