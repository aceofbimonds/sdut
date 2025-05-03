const lsKeyStudyGroup = 'study_group';
const lsKeyInteractionLog = 'interaction_log';
const lsKeyCollectedStickers = 'collected_stickers';

function setGroup(group) {
    localStorage.setItem(lsKeyStudyGroup, group)
}

function getGroup() {
    return localStorage.getItem(lsKeyStudyGroup)
}

function writeLog(msg) {
    const timestamp = new Date().toISOString();
    const log = getLog()
    log.push(`${timestamp} - ${msg}`);
    console.log(`${timestamp} - ${msg}`); // Debug: Zeige im Browser-Console-Log
    localStorage.setItem(lsKeyInteractionLog, JSON.stringify(log))
}

function getLog() {
    return JSON.parse(localStorage.getItem(lsKeyInteractionLog) ?? '[]')
}

function clearData() {
    localStorage.removeItem(lsKeyInteractionLog)
    localStorage.removeItem(lsKeyStudyGroup)
    localStorage.removeItem(lsKeyCollectedStickers)
}

function addSticker(scenario) {
    const stickers = JSON.parse(localStorage.getItem(lsKeyCollectedStickers) ?? '[]')
    stickers.push(scenario)
    localStorage.setItem(lsKeyCollectedStickers, JSON.stringify(stickers))
}

function getCollectedStickers() {
    return JSON.parse(localStorage.getItem(lsKeyCollectedStickers) ?? '[]')
}