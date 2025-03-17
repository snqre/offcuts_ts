FROM oven/bun:latest
WORKDIR /app
COPY . .
EXPOSE 8080
CMD bun install && bun run start