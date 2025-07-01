// Immediately Invoked Function Expression (IIFE)

(function chai(){ // Named IIFE because it function has name: chai()
    console.log("DB Connected");
})(); // (definition)(execution)

((name) => { // Simple IIFE because it don't have name.
    console.log(`DB Connected: ${name}`)
})('MarkLogic');