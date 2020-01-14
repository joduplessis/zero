
# Zero

> Zero is a zero fuss dependancy injector container

## Installation
```
npm i @joduplessis/zero
```

## Some example usage:
```
Keg.keg('kegger').tap('demo', async (val, pour) => {
  // 'val' is the current value for the demo queue
  // We can process it here
  // And then move onto the next item in the queue
  // Equivalent to next()
  pour()
}, () => {
  // Tap is empty
})

// Add middleware to each message
Keg.keg('kegger').spike('demo', in => {
  return window.btoa(in)
})

Keg.keg('kegger').refill('demo', 'Some text')
Keg.keg('kegger').refill('demo', { order: 'Object message types' })
Keg.keg('kegger').refill('demo', 42)
```
