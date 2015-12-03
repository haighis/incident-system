'use strict';

describe('Service: i18n', function() {
  var i18n;
  var RESOURCES = {
    str1: {
      en: 'en string one',
      fr: 'fr string one'
    }
  };

  beforeEach(module('incidentSystemApp'));

  beforeEach(function() {
    module(function($provide) {
      $provide.constant('RESOURCES', RESOURCES);
    });

    inject(function(_i18n_) {
      i18n = _i18n_;
    });
  });

  describe('findResourceByKey()', function() {
    it('should locate the given resource string', function() {
      var resource = i18n.findResourceByKey('str1');
      expect(resource).toEqual({
        en: 'en string one',
        fr: 'fr string one'
      });
    });

    it('should locate the given resource string with hyphens in the key', function() {
      var resource = i18n.findResourceByKey('str-1');
      expect(resource).toEqual({
        en: 'en string one',
        fr: 'fr string one'
      });

      resource = i18n.findResourceByKey('str-1---');
      expect(resource).toEqual({
        en: 'en string one',
        fr: 'fr string one'
      });
    });

    it('should locate the given resource string with underscores in the key', function() {
      var resource = i18n.findResourceByKey('str_1');
      expect(resource).toEqual({
        en: 'en string one',
        fr: 'fr string one'
      });

      resource = i18n.findResourceByKey('str__1__');
      expect(resource).toEqual({
        en: 'en string one',
        fr: 'fr string one'
      });
    });

    it('should locate the given resource string with spaces in the key', function() {
      var resource = i18n.findResourceByKey('str 1');
      expect(resource).toEqual({
        en: 'en string one',
        fr: 'fr string one'
      });

      resource = i18n.findResourceByKey('  str   1');
      expect(resource).toEqual({
        en: 'en string one',
        fr: 'fr string one'
      });
    });

    it('should locate the given resource string regardless of case', function() {
      var resource = i18n.findResourceByKey('STR1');
      expect(resource).toEqual({
        en: 'en string one',
        fr: 'fr string one'
      });
    });

    it('should return the given resource string if it does not exist', function() {
      var resource = i18n.findResourceByKey('strxxxx');
      expect(resource).toEqual({
        en: 'strxxxx',
        fr: 'strxxxx'
      });
    });
  });

  describe('localize()', function() {
    it('should return the given resource translation based on current language', function() {
      var translated;
      i18n.setLanguage('fr');
      translated = i18n.localize('str1');
      expect(translated).toBe('fr string one');
    });

    it('should return the given string if it does not exist in resources', function() {
      var translated = i18n.localize('strxxx');
      expect(translated).toBe('strxxx');
    });

    it('should return the given string with "upper" casing', function() {
      var str = i18n.localize('hello world', 'upper');
      expect(str).toEqual('HELLO WORLD');
    });

    it('should return the given string with "lower" casing', function() {
      var str = i18n.localize('Hello World', 'lower');
      expect(str).toEqual('hello world');
    });

    it('should return the given string with "capitalize" casing', function() {
      var str = i18n.localize('hello world', 'capitalize');
      expect(str).toEqual('Hello world');
    });

    it('should return the given string with "title" casing', function() {
      var str = i18n.localize('hello world', 'title');
      expect(str).toEqual('Hello World');
    });

    it('should return the given string with "capitalize" casing for "title" casing in French', function() {
      var str;
      i18n.setLanguage('fr');
      str = i18n.localize('hello world', 'title');
      expect(str).toEqual('Hello world');
    });
  });

  describe('setLanguage()', function() {
    it('should call configureAccounting()', function() {
      spyOn(i18n, 'configureAccounting');
      i18n.setLanguage('fr');
      expect(i18n.configureAccounting).toHaveBeenCalled();
    });
  });
});
