export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    await import('./instrumentation.node')
  }
}

// import { registerOTel } from '@vercel/otel'
// import {SimpleSpanProcessor} from "@opentelemetry/sdk-trace-base";
// import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-http";
// import {PeriodicExportingMetricReader} from "@opentelemetry/sdk-metrics";
// import { OTLPMetricExporter } from '@opentelemetry/exporter-metrics-otlp-proto';
//
// export function register() {
//   registerOTel({
//     serviceName: "next-app",
//     spanProcessors: [new SimpleSpanProcessor(new OTLPTraceExporter())],
//     metricReader: new PeriodicExportingMetricReader({
//       exporter: new OTLPMetricExporter(),
//     }),
//   });
// }