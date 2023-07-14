
'use strict';

function main() {
  // [START analyticsdata_v1beta_generated_BetaAnalyticsData_RunRealtimeReport_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  A Google Analytics GA4 property identifier whose events are tracked.
   *  Specified in the URL path and not the body. To learn more, see where to
   *  find your Property
   *  ID (https://developers.google.com/analytics/devguides/reporting/data/v1/property-id).
   *  Example: properties/1234
   */
   const property = '396721607'
  /**
   *  The dimensions requested and displayed.
   */
  // const dimensions = 1234
  /**
   *  The metrics requested and displayed.
   */
  // const metrics = 1234
  /**
   *  The filter clause of dimensions. Metrics cannot be used in this filter.
   */
  // const dimensionFilter = {}
  /**
   *  The filter clause of metrics. Applied at post aggregation phase, similar to
   *  SQL having-clause. Dimensions cannot be used in this filter.
   */
  // const metricFilter = {}
  /**
   *  The number of rows to return. If unspecified, 10,000 rows are returned. The
   *  API returns a maximum of 100,000 rows per request, no matter how many you
   *  ask for. `limit` must be positive.
   *  The API can also return fewer rows than the requested `limit`, if there
   *  aren't as many dimension values as the `limit`. For instance, there are
   *  fewer than 300 possible values for the dimension `country`, so when
   *  reporting on only `country`, you can't get more than 300 rows, even if you
   *  set `limit` to a higher value.
   */
  // const limit = 1234
  /**
   *  Aggregation of metrics. Aggregated metric values will be shown in rows
   *  where the dimension_values are set to "RESERVED_(MetricAggregation)".
   */
  // const metricAggregations = 1234
  /**
   *  Specifies how rows are ordered in the response.
   */
  // const orderBys = 1234
  /**
   *  Toggles whether to return the current state of this Analytics Property's
   *  Realtime quota. Quota is returned in PropertyQuota (#PropertyQuota).
   */
  // const returnPropertyQuota = true
  /**
   *  The minute ranges of event data to read. If unspecified, one minute range
   *  for the last 30 minutes will be used. If multiple minute ranges are
   *  requested, each response row will contain a zero based minute range index.
   *  If two minute ranges overlap, the event data for the overlapping minutes is
   *  included in the response rows for both minute ranges.
   */
  // const minuteRanges = 1234

  // Imports the Data library
  const {BetaAnalyticsDataClient} = require('@google-analytics/data').v1beta;

  // Instantiates a client
  const dataClient = new BetaAnalyticsDataClient();

  async function callRunRealtimeReport() {
    // Construct request
    const request = {
    };

    // Run request
    const response = await dataClient.runRealtimeReport(request);
    console.log(response);
  }

  callRunRealtimeReport();
  // [END analyticsdata_v1beta_generated_BetaAnalyticsData_RunRealtimeReport_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));