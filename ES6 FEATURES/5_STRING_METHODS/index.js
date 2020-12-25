// startsWith(searchString, position) -> check a string starts with another string
// all these methods are case sensitive

const message = "Today is friday"

console.log(message.startsWith('Today'))
console.log(message.startsWith('Today', 0))
console.log(message.startsWith('Today', 5))
console.log(message.startsWith('today'))

// endsWith(searchString, length) -> check a string ends with another string
console.log(message.endsWith('today'))
console.log(message.endsWith('friday'))

// includes(searchString, position) -> check if a string contains another string
console.log(message.includes('Today'))
console.log(message.includes('is'))
console.log(message.includes('that'))