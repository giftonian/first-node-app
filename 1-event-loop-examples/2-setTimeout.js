
//setTimeout example

console.log("Task 1")
setTimeout(() => { // The setTimeout function schedules a function to run "once" after a specified delay. 
    console.log("Task 2")

}, 0) // Tasks after this callbacks will be executed first, regardless the time parameter = 0. 
// Because setTimeout callback is offloaded by the browser immediately
console.log("Task 3")
