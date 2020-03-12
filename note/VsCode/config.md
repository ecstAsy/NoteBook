<h2 align="center"> Vscode 编辑器配置记录</h2>

配置文件 settings.json

```js
{
  "workbench.colorTheme": "Boxy Monokai",
  "workbench.iconTheme": "vscode-icons-mac",
  "editor.fontSize": 16,
  "editor.tabSize": 2,
  "editor.fontFamily": "Courier New",
  "editor.formatOnType": true,
  "editor.formatOnSave": true,
  "javascript.implicitProjectConfig.experimentalDecorators": true,
  "workbench.sideBar.location": "left",
  "cSpell.enabled": false,
  "local-history.treeLocation": "localHistory",
  "local-history.enabled": 2,
  "local-history.absolute": true,
  "files.associations": {
    "*.cjson": "jsonc",
    "*.wxss": "css",
    "*.wxs": "javascript"
  },
  "emmet.includeLanguages": {
    "wxml": "html"
  },
  "emmet.triggerExpansionOnTab": true,
  "explorer.confirmDelete": false,
  "editor.detectIndentation": false,
  "minapp-vscode.disableAutoConfig": true,
  "files.exclude": {
    "**/.git": false
  },
  "umi_pro.quotes": "single",
  "background.useDefault": false,
  "background.style": {
    "content": "''",
    "pointer-events": "none",
    "position": "absolute",
    "z-index": "99999",
    "width": "100%",
    "height": "100%",
    "background-position": "0% 0%",
    "background-size": "cover",
    "background-repeat": "no-repeat",
    "opacity": 0.1
  },
  "background.customImages": [
    "file:///C:/Users/sky_hxq/vs-bg/ai.jpg"
  ]
}
```