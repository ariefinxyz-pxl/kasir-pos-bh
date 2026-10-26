const {app,BrowserWindow,Menu}=require('electron');
app.whenReady().then(()=>{
  Menu.setApplicationMenu(null);
  new BrowserWindow({width:1280,height:800}).loadFile('index.html');
});
app.on('window-all-closed',()=>app.quit());
