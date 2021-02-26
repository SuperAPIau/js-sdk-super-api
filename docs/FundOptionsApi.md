# SuperApiJs.FundOptionsApi

All URIs are relative to *https://api.superapi.com.au/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getV1FundOptions**](FundOptionsApi.md#getV1FundOptions) | **GET** /v1/fund_options | List of FundOptions for AustralianSuper
[**getV1FundOptionsName**](FundOptionsApi.md#getV1FundOptionsName) | **GET** /v1/fund_options/{name} | Details of a FundOption



## getV1FundOptions

> [APIEntitiesFundOption] getV1FundOptions()

List of FundOptions for AustralianSuper

This endpoint enables developers to retrieve a list of the FundOptions available from AustralianSuper.  FundOptions enable an AustralianSuper member to determine (at a high level) the makeup of their superannuation portfolio.  The FundOptions can be utilised with other endpoints to retrieve additional details related to the FundOption, such as the performance of the portfolio over time.

### Example

```javascript
import SuperApiJs from 'super-api-js';

let apiInstance = new SuperApiJs.FundOptionsApi();
apiInstance.getV1FundOptions().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[APIEntitiesFundOption]**](APIEntitiesFundOption.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV1FundOptionsName

> APIEntitiesFundOption getV1FundOptionsName(name)

Details of a FundOption

This endpoint enables developers to retrieve the details of a FundOption.

### Example

```javascript
import SuperApiJs from 'super-api-js';

let apiInstance = new SuperApiJs.FundOptionsApi();
let name = "name_example"; // String | Name of the FundOption requested
apiInstance.getV1FundOptionsName(name).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Name of the FundOption requested | 

### Return type

[**APIEntitiesFundOption**](APIEntitiesFundOption.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

