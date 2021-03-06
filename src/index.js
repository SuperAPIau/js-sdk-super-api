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


import ApiClient from './ApiClient';
import APIEntitiesAnnualPerformance from './model/APIEntitiesAnnualPerformance';
import APIEntitiesCumulativePerformance from './model/APIEntitiesCumulativePerformance';
import APIEntitiesFundOption from './model/APIEntitiesFundOption';
import APIEntitiesPerformance from './model/APIEntitiesPerformance';
import FundOptionsApi from './api/FundOptionsApi';
import PerformanceApi from './api/PerformanceApi';


/**
* Javascript SDK for accessing superannuation data via SuperAPI.com.au.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var SuperApiJs = require('index'); // See note below*.
* var xxxSvc = new SuperApiJs.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new SuperApiJs.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new SuperApiJs.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new SuperApiJs.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The APIEntitiesAnnualPerformance model constructor.
     * @property {module:model/APIEntitiesAnnualPerformance}
     */
    APIEntitiesAnnualPerformance,

    /**
     * The APIEntitiesCumulativePerformance model constructor.
     * @property {module:model/APIEntitiesCumulativePerformance}
     */
    APIEntitiesCumulativePerformance,

    /**
     * The APIEntitiesFundOption model constructor.
     * @property {module:model/APIEntitiesFundOption}
     */
    APIEntitiesFundOption,

    /**
     * The APIEntitiesPerformance model constructor.
     * @property {module:model/APIEntitiesPerformance}
     */
    APIEntitiesPerformance,

    /**
    * The FundOptionsApi service constructor.
    * @property {module:api/FundOptionsApi}
    */
    FundOptionsApi,

    /**
    * The PerformanceApi service constructor.
    * @property {module:api/PerformanceApi}
    */
    PerformanceApi
};
