const { log } = console

const { modify } = require('crocks/State')

const mapProps = require('crocks/helpers/mapProps')

const { add } = require('./helpers')

const state = { bubbles: 42 }

// modifyState :: (s -> s) -> State s ()
// const modifyState = fn => State(s => Pair(Unit(), fn(s)))

// blowBubbles :: Number -> State Object ()
const blowBubbles = n => modify(mapProps({ bubbles: add(n) }))

// burstBubbles :: Number -> State Object ()
const burstBubbles = n => blowBubbles(-(n))

// blowBubble :: () -> State Object ()
const blowBubble = () => blowBubbles(1)

// burstBubble :: () -> State Object ()
const burstBubble = () => burstBubbles(1)

log(
  burstBubbles(1)
    .execWith(state)
)
