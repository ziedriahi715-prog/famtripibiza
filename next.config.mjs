import withPWAInit from "@ducanh2912/next-pwa";

const nextConfig = {
    reactStrictMode: true,
}   

const pwaconfig = withPWAInit({
    dest : "public",
    register: true,
    extendDefaultRuntimeCaching: true,
    workboxOptions : {
        runtimeCaching : [
          {
            urlPattern: /images\/.*\.(png|jpg|jpeg|gif|webp|avif)$/,  // matches image file extensions
            handler: 'CacheFirst',  // Use Cache First strategy
            options: {
              cacheName: 'image-cache',
              expiration: {
                maxEntries: 50, // Max number of items in the cache
                maxAgeSeconds: 30 * 24 * 60 * 60, // Cache images for 30 days
              },
            },
          },
        ]
    }
})

export default pwaconfig(nextConfig)