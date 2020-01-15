import {app,BrowserWindow} from 'electron';

let browserWindow:BrowserWindow;

function confirmEnd()
{
    console.log("electron stopped");

}

function createWindow()
{
    browserWindow=new BrowserWindow({width:300});
    browserWindow.loadFile("./index.html");
}


app.on("ready", createWindow)

app.on("before-quit", confirmEnd);