// next.config.js

module.exports = {
  distDir: 'build', // Tambahkan ini untuk menentukan direktori distribusi yang diinginkan
  webpack: (config, { isServer }) => {
      // Tambahkan konfigurasi webpack tambahan jika diperlukan

      // Contoh: Resolve modul 'path' untuk client dan server
      config.resolve.fallback = {
          ...config.resolve.fallback,
          path: false,
      };

      return config;
  },
};
