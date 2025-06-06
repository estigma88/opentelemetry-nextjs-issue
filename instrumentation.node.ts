// import { NodeSDK } from '@opentelemetry/sdk-node';
// import { ConsoleSpanExporter } from '@opentelemetry/sdk-trace-node';
import * as opentelemetry from '@opentelemetry/sdk-node';
import {resourceFromAttributes} from '@opentelemetry/resources'
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-proto';
import { OTLPMetricExporter } from '@opentelemetry/exporter-metrics-otlp-proto';
import { PeriodicExportingMetricReader, ConsoleMetricExporter } from '@opentelemetry/sdk-metrics';
import { ATTR_SERVICE_NAME } from '@opentelemetry/semantic-conventions'

const sdk = new opentelemetry.NodeSDK({
  resource: resourceFromAttributes({
    [ATTR_SERVICE_NAME]: 'next-app',
  }),
  traceExporter: new OTLPTraceExporter(),
  metricReader: new PeriodicExportingMetricReader({
    exporter: new OTLPMetricExporter(),
  }),
  instrumentations: [getNodeAutoInstrumentations()],
});

sdk.start();

// const sdk = new NodeSDK({
//   traceExporter: new ConsoleSpanExporter(),
//   metricReader: new PeriodicExportingMetricReader({
//     exporter: new ConsoleMetricExporter(),
//   }),
//   instrumentations: [getNodeAutoInstrumentations()],
// });
//
// sdk.start();
