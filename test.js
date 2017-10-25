import test from 'ava';
import isMobileNumber from '.';

test('returns true when mobile number is a valid number', t => {
  t.is(isMobileNumber('0400123456', 'AU'), true);
});

test('returns false when mobile number is an invalid number', t => {
  t.is(isMobileNumber('0312444123', 'AU'), false);
});

test('returns false when country code is invalid', t => {
  t.is(isMobileNumber('0312444123', 'ZZ'), false);
});

test('returns false when mobile number is empty', t => {
  t.is(isMobileNumber('', 'AU'), false);
});

test('throws error if country code not given', t => {
  try {
    isMobileNumber('0400123456');
  } catch (err) {
    t.is(err.message, '`countryCode` not given.');
  }
});

