const { log } = console

const { get } = require('crocks/State')
const compose = require('crocks/helpers/compose')


const { add, pluralize } = require('./helpers')

// State s a
// (s -> (a, s))
// map ::State s a ~> (a -> b) -> State s b

// updateValue :: Number -> State Number
const updateValue = x => State(s => Pair(s + x, s))

// updateState :: Number -> State Number
const updateState = x => State(s => Pair(s, s + x))

// getState :: () -> State s
const getState = () => State(s => Pair(s, s))

// makeAwesome :: Number -> String
const makeAwesome = pluralize('Awesome', 'Awesomes')

// flow :: Number ->  String
const flow = compose(makeAwesome, add(10))


log(
  get()
    .map(flow)
    .runWith(23)
)
