/**
 * Super API Documentation
 * The Super API makes superannuation fund data easily accessible for developers.  Build the future.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@superapi.com.au
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SuperApiDocumentation);
  }
}(this, function(expect, SuperApiDocumentation) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SuperApiDocumentation.APIEntitiesFundOption();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('APIEntitiesFundOption', function() {
    it('should create an instance of APIEntitiesFundOption', function() {
      // uncomment below and update the code to test APIEntitiesFundOption
      //var instane = new SuperApiDocumentation.APIEntitiesFundOption();
      //expect(instance).to.be.a(SuperApiDocumentation.APIEntitiesFundOption);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new SuperApiDocumentation.APIEntitiesFundOption();
      //expect(instance).to.be();
    });

    it('should have the property displayName (base name: "display_name")', function() {
      // uncomment below and update the code to test the property displayName
      //var instance = new SuperApiDocumentation.APIEntitiesFundOption();
      //expect(instance).to.be();
    });

  });

}));
