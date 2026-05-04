import * as Sentry from "@sentry/node"


Sentry.init({
  dsn: "https://624a4ab9a36d28e3d8829f08445bd107@o4511331583459328.ingest.de.sentry.io/4511331592110160",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});