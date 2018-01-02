// add :: Number -> Number -> Number
const add = x => y => x + y

// inc :: Number -> Number
const inc = add(1)

// multiply :: Number -> Number -> Number
const multiply = x => y => x * y

// pluralize :: (String, String) -> Number -> String
const pluralize = (single, plural) => num =>
  `${num} ${Math.abs(num) === 1 ? single : plural}`

module.exports = {
  add,
  inc,
  multiply,
  pluralize
}
