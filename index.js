const { log } = console

const State = require('crocks/State')
const { get, modify } = State

const constant = require('crocks/combinators/constant')

const { add, inc, multiply } = require('./helpers');

// addState :: Number -> State Number
const addState = n => get(add(n))

// incState :: Number -> State Number
const incState = n => modify(inc).map(constant(n))

// incState :: Number -> State Number
const multiplyState = n => get(multiply(n))

// compute :: Number -> State Number
const compute = n => State.of(n)
  .chain(addState)
  .chain(incState)
  .chain(multiplyState)

log(
  compute(10)
    .runWith(2)
)
