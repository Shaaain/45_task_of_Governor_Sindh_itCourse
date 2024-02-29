const PersonName = 'ShAhEEn BuRirO'
console.log(`Name in upper case ; ${PersonName.toUpperCase()}.`)
console.log(`Name in Lower case ; ${PersonName.toLowerCase()}.`)

// to lower case

let step1 = PersonName.split(' ')
let step2 = step1.map(word => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase())
let step3 = step2.join(' ')
console.log (`Name in title case ; ${step3}.`)