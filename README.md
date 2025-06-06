# OpenTelemetry next js issue

Opentelemetry is not collecting http_server_request_duration_bucket metrics for Nextjs endpoints

1. Clone the following project https://github.com/vercel/opentelemetry-collector-dev-setup/tree/main
2. Run the docker compose to start up Prometheus and the otel-collector
3. Run the nextjs app with `next dev`
4. Go to http://localhost:3000 several times 
5. Wait for a while for the metrics to be collected
6. Go to Prometheus in http://0.0.0.0:9090/query
7. Explore the metrics, you wil see `http_client_request_duration_bucket` but not `http_server_request_duration_bucket`