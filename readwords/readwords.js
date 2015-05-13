var censor = require("censorify");
censor.addCensoredWord("KARAN");
console.warn("Array printed as "+censor.getCensoredWords());
console.log("NODE APP");