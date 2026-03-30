import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const ANTHROPIC_KEY = "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"; // 👈 اپنی key یہاں لگاؤ

export default defineConfig({
  plugins: [
    react(),
    // Custom plugin to handle Anthropic API proxy with correct headers
    {
      name: "anthropic-proxy",
      configureServer(server) {
        server.middlewares.use("/v1/messages", async (req, res) => {
          if (req.method === "OPTIONS") {
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.setHeader("Access-Control-Allow-Headers", "*");
            res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
            res.writeHead(200);
            res.end();
            return;
          }

          // Read request body
          const chunks = [];
          for await (const chunk of req) chunks.push(chunk);
          const body = Buffer.concat(chunks).toString();

          // Parse to check if streaming
          let isStream = false;
          try { isStream = JSON.parse(body).stream === true; } catch {}

          try {
            const response = await fetch("https://api.anthropic.com/v1/messages", {
              method: "POST",
              headers: {
                "Content-Type":      "application/json",
                "x-api-key":         ANTHROPIC_KEY,
                "anthropic-version": "2023-06-01",
              },
              body,
            });

            res.setHeader("Access-Control-Allow-Origin", "*");

            if (isStream) {
              res.setHeader("Content-Type",  "text/event-stream");
              res.setHeader("Cache-Control", "no-cache");
              res.setHeader("Connection",    "keep-alive");
              res.writeHead(response.status);
              // Stream chunks directly to browser
              const reader = response.body.getReader();
              while (true) {
                const { done, value } = await reader.read();
                if (done) break;
                res.write(value);
              }
              res.end();
            } else {
              const data = await response.text();
              res.setHeader("Content-Type", "application/json");
              res.writeHead(response.status);
              res.end(data);
            }
          } catch (err) {
            res.writeHead(500);
            res.end(JSON.stringify({ error: err.message }));
          }
        });
      },
    },
  ],
});