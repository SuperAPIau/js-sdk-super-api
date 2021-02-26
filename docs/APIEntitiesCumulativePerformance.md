# SuperApiJs.APIEntitiesCumulativePerformance

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**report** | **String** | Type of performance report | 
**growthRate** | **Number** | Growth rate for the performance period | 
**growthRateType** | **String** | Identifies how the growth rate should be interpreted, ie: as a percentage.  Currently only percentage is used.  Other options may become available in the future. | 
**startDate** | **Date** | Start date of the cumulative performance period.  This may differ from the requested start date if the requested period is longer than the period for which data exists.  The start_date reflects the requested date, or the earliest date for which data is available. | 
**endDate** | **Date** | End date of the cumulative performance period.  This may differ from the requested end date if the requested period is longer than the period for which data exists.  The end_date reflects the requested date, or the most recent date for which data is available. | 
**cumulativeDates** | **Number** | A count of the data points (days) which fall within the cumulative period requested. | 
**performanceDates** | **Number** | A count of the data points (days) for which there was growth / performance recorded.  Not all fund options are active on all days (ie: stock market closures, weekends, etc). | 
**nonPerformanceDates** | **Number** | A count of the data points (days) for which there was no growth / performance recorded.  Not all fund options are active on all days (ie: stock market closures, weekends, etc). | 


