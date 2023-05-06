// Code your solution here
function findMatching(drivers, name) {
    let found = drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
    return found;
}

function fuzzyMatch(drivers, str) {
    let found = drivers.filter(driver => driver.charAt(0) === str.charAt(0));
    return found;
}

function matchName(driversObj, str) {
    let found = driversObj.filter(driver => driver.name === str);
    return found;
}

