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
    instance = new SuperApiDocumentation.FundOptionsApi();
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

  describe('FundOptionsApi', function() {
    describe('getV1FundOptions', function() {
      it('should call getV1FundOptions successfully', function(done) {
        //uncomment below and update the code to test getV1FundOptions
        //instance.getV1FundOptions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getV1FundOptionsName', function() {
      it('should call getV1FundOptionsName successfully', function(done) {
        //uncomment below and update the code to test getV1FundOptionsName
        //instance.getV1FundOptionsName(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
