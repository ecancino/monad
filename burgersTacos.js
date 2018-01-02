const { log } = console

const { get } = require('crocks/State')
const compose = require('crocks/helpers/compose')
const objOf = require('crocks/helpers/objOf')
const option = require('crocks/pointfree/option')
const prop = require('crocks/Maybe/prop')

const { burgers, tacos } = require('./data')


// defaultProp :: (String, a) -> Object -> b
const propOr = (key, def) => compose(option(def), prop(key))

// getBurgers :: State Object a
const getBurgers = get(propOr('burgers', 0))

// burgersToTacos :: State Object
const burgersToTacos = getBurgers.map(objOf('tacos'))


log(
  burgersToTacos
    .evalWith(burgers)
)
