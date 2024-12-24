import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const nextConfig = {
  webpack: (config) => {
    config.cache = {
      type: "filesystem",
      buildDependencies: {
        config: [__filename], // Use the ES module-compatible __filename
      },
      compression: "gzip", // Compress cache for better performance
      cacheDirectory: path.resolve(".next/cache/webpack"), // Use an absolute path
    };
    return config;
  },
};

export default nextConfig;
