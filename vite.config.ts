import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

function resolveSiteOrigin(mode: string, env: Record<string, string>): string {
  const fromEnv = env.VITE_SITE_ORIGIN?.trim().replace(/\/$/, '');
  if (fromEnv) return fromEnv;

  for (const key of ['URL', 'DEPLOY_PRIME_URL'] as const) {
    const raw = process.env[key];
    if (raw) {
      try {
        return new URL(raw).origin;
      } catch {
        /* ignore invalid URL */
      }
    }
  }

  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) {
    const host = vercel.replace(/\/$/, '');
    if (host.startsWith('http://') || host.startsWith('https://')) {
      try {
        return new URL(host).origin;
      } catch {
        /* fall through */
      }
    }
    return `https://${host}`;
  }

  if (mode === 'development') {
    return 'http://localhost:3000';
  }

  throw new Error(
    '[vite] Production build needs an absolute site origin for Open Graph. Set VITE_SITE_ORIGIN (see .env.example), or build on Netlify (URL) / Vercel (VERCEL_URL).',
  );
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
      {
        name: 'inject-site-origin',
        transformIndexHtml(html) {
          const siteOrigin = resolveSiteOrigin(mode, env);
          return html.replaceAll('__SITE_ORIGIN__', siteOrigin);
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './'),
      },
    },
    server: {
      port: 3000,
      open: true,
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: false,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
      rollupOptions: {
        output: {
          // 使用 IIFE 格式，可以在 file:// 協議下運行
          format: 'iife',
          // IIFE 格式不支持 code splitting，所以不使用 manualChunks
          manualChunks: undefined,
          // 確保文件名簡單
          entryFileNames: 'assets/index.js',
          chunkFileNames: 'assets/[name].js',
          assetFileNames: 'assets/[name].[ext]',
        },
      },
    },
    base: mode === 'production' ? './' : '/',
  };
});
