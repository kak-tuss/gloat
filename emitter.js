
// // 1. We're writing here an event emitter  - it's functionality should be similer to the event listener you know from the window.addEventListener method.
// // 2. You can change everything in the dispatcher object (making it a class for example), you can add things       to it, but you can't delete one of the method or change it's signature (what the function receives and returns).
// // 3. please see that we can subscribe a few callbacks to the same event (in the usage bellow we're subscribing two different callback to the "leo" event).
// // 4. please see that the "on" method returns a function that when invoked, it's unsubscribing the callback
// //    so when the event will be triggered again the specific callback won't fire.
// // 5. everything after the "->" symbol is the expected console.log output, to help you see that you got it right.

const eventListeners = [];

const dispatcher = {

    on : (eventName, callback) => {
        listenerObj = {
          'name': eventName,
          'func': callback
        }
      console.log(listenerObj);

      eventListeners.push({
          'name': eventName,
          'func': callback
        })

        return () => {
            // implement
        }

    },

    trigger : (eventName, data) => {
      eventListeners
        .filter(listener => listener.name === eventName)
        .map(listener => listener.func());
       // implement
    }
};


// user usage
const off1 = dispatcher.on('leo', function(data) {

    console.log(1, data)
});

const off2 = dispatcher.on('leo', function(data) {
    console.log(2, data)
});

const off3 = dispatcher.on('messi', function(data) {
    console.log(3, data)
});

console.log(eventListeners);

dispatcher.trigger('leo', { hey: 'you' });
// -> 1, { hey: 'you' }
// -> 2, { hey: 'you' }


dispatcher.trigger('messi', { tiki: 'taka' });
// -> 3, { tiki: 'taka' }


off1();
dispatcher.trigger('leo', { other: 'data' });
// -> 2, { other: 'data' }


























