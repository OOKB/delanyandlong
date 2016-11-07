import test from 'tape'
import {
  isLetterString, isValidCountry, validNumZip, validateZip, validZipCountry,
} from '../../src/redux/select/trade'

test('isLetterString', (t) => {
  t.true(isLetterString('abcde'))
  t.false(isLetterString('abc1'))
  t.end()
})
test('validNumZip', (t) => {
  t.equal(validNumZip('55409'), undefined)
  t.equal(validNumZip('55409a'), 'Must contain only numbers.')
  t.end()
})
test('isValidCountry', (t) => {
  t.ok(isValidCountry('china'), 'china')
  t.ok(isValidCountry('mexico'), 'mexico')
  t.false(isValidCountry('kai'), 'kai')
  t.false(isValidCountry('curry'), 'curry')
  t.end()
})
test('validZipCountry', (t) => {
  t.equal(validZipCountry('canada'), undefined)
  t.equal(validZipCountry('abcde'), 'Invalid Country.')
  t.equal(validZipCountry('NETHERLanD123s'), undefined)
  t.end()
})
test('validateZip()', (t) => {
  t.equal(validateZip('55409'), undefined, '55409')
  t.equal(validateZip('5540-'), 'Must contain only numbers.', '5540-')
  t.equal(validateZip('abcd'), 'Invalid Country.', 'abc')
  t.equal(validateZip('canada'), undefined)
  t.equal(validateZip('france'), undefined)
  // t.ok(validateZip(12345))
  // console.log(res3)
  t.end()
})
