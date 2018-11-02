'use strict'

const tape = require('tape')
const tz = require('.')

tape('uic-location-timezone', t => {
	t.equals(tz('1089120'), 'Europe/Helsinki', 'unique timezone')
	t.equals(tz('7300003'), 'Europe/Athens', 'unique timezone')
	t.equals(tz('8700001'), 'Europe/Paris', 'unique timezone')
	t.equals(tz('4204444'), 'Asia/Tokyo', 'unique timezone')
	t.equals(tz('4000001'), 'America/Havana', 'unique timezone')
	t.equals(tz('9000100'), 'Africa/Cairo', 'unique timezone')
	t.equals(tz('2000001'), null, 'non-unique timezone') // Russia
	t.equals(tz('3144444'), null, 'non-unique timezone') // Mongolia
	t.equals(tz('8000001'), null, 'non-unique timezone') // Germany *sigh*
	t.throws(() => tz(8000000), 'invalid uic code')
	t.throws(() => tz('1500001'), 'invalid uic code')
	t.throws(() => tz('80-00001'), 'invalid uic code')
	t.throws(() => tz('8100010245'), 'invalid uic code')
	t.throws(() => tz(null), 'invalid uic code')
	t.throws(() => tz(undefined), 'invalid uic code')
	t.throws(() => tz(''), 'invalid uic code')
	t.throws(() => tz({ code: '8100000' }), 'invalid uic code')
	t.end()
})
