'use strict';

const googleLibPhoneNumber = require('google-libphonenumber');

const phoneUtil = googleLibPhoneNumber.PhoneNumberUtil.getInstance();
const phoneType = googleLibPhoneNumber.PhoneNumberType;

module.exports = (phoneNumber, countryCode) => {
  if (!countryCode) {
    throw new Error('`countryCode` not given.');
  }
  if (!phoneNumber) {
    return false;
  }
  try {
    const parsedPhoneNumber = phoneUtil.parse(phoneNumber, countryCode);
    return phoneUtil.getNumberType(parsedPhoneNumber) === phoneType.MOBILE;
  } catch (err) {
    return false;
  }
};
