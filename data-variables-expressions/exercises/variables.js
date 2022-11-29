const firstName = 'g';
logValType(firstName);
const lastName = 'e';
logValType(lastName);
const age = 30;
logValType(age);
const hasPets = true;
logValType(hasPets);
const email = 'ge@hotmail.com';
logValType(email);

function logValType(arg) {
    console.log(arg);
    console.log(typeof arg);
}

const message = `Hello my name is ${firstName} ${lastName} and I'm ${age} years old.`;
const initials = firstName.charAt(0) + lastName.charAt(0);
const fullName = firstName + ' ' + lastName;
let petInfo = '';

if (hasPets) {
    petInfo = 'I have pets';
} else {
    petInfo = 'I don\'t have pets';
}

console.log(message);
console.log(initials);
console.log(fullName);
console.log(petInfo);