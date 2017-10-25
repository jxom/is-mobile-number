'use strict';

const googleLibPhoneNumber = require('google-libphonenumber');

const phoneUtil = googleLibPhoneNumber.PhoneNumberUtil.getInstance();
const phoneType = googleLibPhoneNumber.PhoneNumberType;

module.exports = (phoneNumber, countryCode) => {
  if (!phoneNumber) {
    throw new Error('`phoneNumber` not given.');
  }
  if (!countryCode) {
    throw new Error('`countryCode` not given.');
  }
  try {
    const parsedPhoneNumber = phoneUtil.parse(phoneNumber, countryCode);
    return phoneUtil.getNumberType(parsedPhoneNumber) === phoneType.MOBILE;
  } catch (err) {
    console.error(err);
    return false;
  }
};
