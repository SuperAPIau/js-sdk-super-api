# SuperApiJs.PerformanceApi

All URIs are relative to *https://api.superapi.com.au/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getV1NameAnnual**](PerformanceApi.md#getV1NameAnnual) | **GET** /v1/{name}/annual | Annual Performance
[**getV1NameCumulative**](PerformanceApi.md#getV1NameCumulative) | **GET** /v1/{name}/cumulative | Cumulative Performance
[**getV1NameDaily**](PerformanceApi.md#getV1NameDaily) | **GET** /v1/{name}/daily | Daily Performance
[**getV1NameDailyLatest**](PerformanceApi.md#getV1NameDailyLatest) | **GET** /v1/{name}/daily/latest | Latest Performance
[**getV1NameDailyToday**](PerformanceApi.md#getV1NameDailyToday) | **GET** /v1/{name}/daily/today | Today&#39;s Performance
[**getV1NameDailyYesterday**](PerformanceApi.md#getV1NameDailyYesterday) | **GET** /v1/{name}/daily/yesterday | Yesterday&#39;s Performance



## getV1NameAnnual

> APIEntitiesAnnualPerformance getV1NameAnnual(name, year)

Annual Performance

The annual performance for a FundOption for a given year.

### Example

```javascript
import SuperApiJs from 'super-api-js';

let apiInstance = new SuperApiJs.PerformanceApi();
let name = "name_example"; // String | 
let year = 56; // Number | Year of the performance data
apiInstance.getV1NameAnnual(name, year).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**|  | 
 **year** | **Number**| Year of the performance data | 

### Return type

[**APIEntitiesAnnualPerformance**](APIEntitiesAnnualPerformance.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV1NameCumulative

> APIEntitiesCumulativePerformance getV1NameCumulative(name, startDate, endDate)

Cumulative Performance

The cumulative performance from the inception of the FundOption.  This represents the growth over time from the inception date of the FundOption to the requested date.

### Example

```javascript
import SuperApiJs from 'super-api-js';

let apiInstance = new SuperApiJs.PerformanceApi();
let name = "name_example"; // String | 
let startDate = new Date("2013-10-20"); // Date | Start date of the desired cumulative period
let endDate = new Date("2013-10-20"); // Date | End date of the desired cumulative period
apiInstance.getV1NameCumulative(name, startDate, endDate).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**|  | 
 **startDate** | **Date**| Start date of the desired cumulative period | 
 **endDate** | **Date**| End date of the desired cumulative period | 

### Return type

[**APIEntitiesCumulativePerformance**](APIEntitiesCumulativePerformance.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV1NameDaily

> APIEntitiesPerformance getV1NameDaily(name, _date)

Daily Performance

The performance for a superannuation FundOption on a specific day.  Not all FundOptions will have a performance on every day, as some FundOptions are not relevant on every day (ie: public holidays, weekends, market closures, etc).  A result of 0 represents no performance.

### Example

```javascript
import SuperApiJs from 'super-api-js';

let apiInstance = new SuperApiJs.PerformanceApi();
let name = "name_example"; // String | 
let _date = new Date("2013-10-20"); // Date | Date of the performance data
apiInstance.getV1NameDaily(name, _date).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**|  | 
 **_date** | **Date**| Date of the performance data | 

### Return type

[**APIEntitiesPerformance**](APIEntitiesPerformance.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV1NameDailyLatest

> APIEntitiesPerformance getV1NameDailyLatest(name)

Latest Performance

Retrieves the performance for the most recent date, for which performance data exists.

### Example

```javascript
import SuperApiJs from 'super-api-js';

let apiInstance = new SuperApiJs.PerformanceApi();
let name = "name_example"; // String | 
apiInstance.getV1NameDailyLatest(name).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**|  | 

### Return type

[**APIEntitiesPerformance**](APIEntitiesPerformance.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV1NameDailyToday

> APIEntitiesPerformance getV1NameDailyToday(name)

Today&#39;s Performance

Retrieves the performance for today.  This retrieves the same results as the Daily endpoint, but provides a shortcut to retrieve todays performance for a given FundOption.

### Example

```javascript
import SuperApiJs from 'super-api-js';

let apiInstance = new SuperApiJs.PerformanceApi();
let name = "name_example"; // String | 
apiInstance.getV1NameDailyToday(name).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**|  | 

### Return type

[**APIEntitiesPerformance**](APIEntitiesPerformance.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV1NameDailyYesterday

> APIEntitiesPerformance getV1NameDailyYesterday(name)

Yesterday&#39;s Performance

Retrieves the performance for yesterday.  This retrieves the same results as the Daily endpoint, but provides a shortcut to retrieve yesterday performance for a given FundOption.

### Example

```javascript
import SuperApiJs from 'super-api-js';

let apiInstance = new SuperApiJs.PerformanceApi();
let name = "name_example"; // String | 
apiInstance.getV1NameDailyYesterday(name).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**|  | 

### Return type

[**APIEntitiesPerformance**](APIEntitiesPerformance.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

