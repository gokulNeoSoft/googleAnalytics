/**
 * TODO(developer): Uncomment this variable and replace with your
 *   Google Analytics 4 property ID before running the sample.
 */
propertyId = '396721607';

// Imports the Google Analytics Data API client library.
const {BetaAnalyticsDataClient} = require('@google-analytics/data');

// Using a default constructor instructs the client to use the credentials
// specified in GOOGLE_APPLICATION_CREDENTIALS environment variable.
const analyticsDataClient = new BetaAnalyticsDataClient();

// Runs a simple report.
async function runReport() {
  const request = {

  };
  const [response] = await analyticsDataClient.runRealtimeReport({
    property: `properties/${propertyId}`,
    
    dimensions: [
      {
        name: 'country',
      },
    ],
    metrics: [
      {
        name:'activeUsers',
      },
    ],
   
  });

  console.log('Report result:',response);
  response.rows.forEach(row => {
    console.log(row.dimensionValues[0], row.metricValues[0]);
  });
}

runReport();
