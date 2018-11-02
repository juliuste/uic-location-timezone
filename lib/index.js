'use strict'

const { toISO } = require('uic-codes')
const { alpha3ToAlpha2 } = require('i18n-iso-countries')
const { getTimeZonesByCode } = require('country-tz')
const isUicLocationCode = require('is-uic-location-code')

const uicLocationTimezone = code => {
	if (!isUicLocationCode(code)) throw new Error('`code` must be a valid UIC location code')
	const country = toISO[code.slice(0, 2)]
	const alpha2 = alpha3ToAlpha2(country)
	const timezones = getTimeZonesByCode(alpha2)
	if (timezones.length !== 1) return null
	return timezones[0]
}

module.exports = uicLocationTimezone
