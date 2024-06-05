let ConsoleLog = document.getElementById("console-log");
ConsoleLog.addEventListener('click', () => {
    console.log("Console Log: Hi");
});

let ConsoleError = document.getElementById("console-error");
ConsoleError.addEventListener('click', () => {
    console.error("Console error button pressed");
});

let ConsoleCount = document.getElementById("console-count");
ConsoleCount.addEventListener('click', () => {
    console.count("Number of times Console Count was pressed");
});

let ConsoleWarn = document.getElementById("console-warn");
ConsoleWarn.addEventListener('click', () => {
    console.warn("Console Warn pressed");
});

let ConsoleAssert = document.getElementById("console-assert");
ConsoleAssert.addEventListener('click', () => {
    console.log("Coin flipped!");
    console.assert(Math.floor(Math.random()*2) == 0, "Boo, you got a Tails.")
});

let ConsoleClear = document.getElementById("console-clear");
ConsoleClear.addEventListener('click', () => {
    console.clear();
});

let ConsoleDir = document.getElementById("console-dir");
ConsoleDir.addEventListener('click', () => {
    console.dir(ConsoleDir, 'depth');
});

let ConsoleDirxml = document.getElementById("console-dirxml");
ConsoleDirxml.addEventListener('click', () => {
    console.log("Displaying directory of error buttons section");
    console.dirxml(document.getElementById("error-btns"));
});

let ConsoleGroupStart = document.getElementById("console-group-start");
ConsoleGroupStart.addEventListener('click', () => {
    console.group("Group indented");
});

let ConsoleGroupEnd = document.getElementById("console-group-end");
ConsoleGroupEnd.addEventListener('click', () => {
    console.groupEnd();
    console.log("Group un-indented");
});

let ConsoleTable = document.getElementById("console-table");
ConsoleTable.addEventListener('click', () => {
    console.table(["red", "green", "blue"]);
});

let StartTimer = document.getElementById("start-timer");
StartTimer.addEventListener('click', () => {
    console.time("Console Timer");
});

let EndTimer = document.getElementById("end-timer");
EndTimer.addEventListener('click', () => {
    console.timeEnd("Console Timer");
});

let ConsoleTrace = document.getElementById("console-trace");
ConsoleTrace.addEventListener('click', () => {
    console.trace();
    function lalala(){
        console.trace();
    }

    lalala();
});

let Lalala = document.getElementById("console-Iog");
try {
    Lalala.click();
} catch (error) {
    console.error(error);
} finally {
    console.log("Attempted to click the console-log button.");
}

if(!Lalala){
    throw new Error("Invalid Button Selected");
}