var keyboardEvent = document.createEvent("KeyboardEvent");
var initMethod = typeof keyboardEvent.initKeyboardEvent !== 'undefined' ? "initKeyboardEvent" : "initKeyEvent";


keyboardEvent[initMethod](
                   "keyup", // event type : keydown, keyup, keypress
                    true, // bubbles
                    true, // cancelable
                    window, // viewArg: should be window
                    false, // ctrlKeyArg
                    false, // altKeyArg
                    true, // shiftKeyArg
                    false, // metaKeyArg
                    84, // keyCodeArg : unsigned long the virtual key code, else 0
                    0 // charCodeArgs : unsigned long the Unicode character associated with the depressed key, else 0
);
document.dispatchEvent(keyboardEvent);