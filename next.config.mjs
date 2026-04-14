import withPWAInit from "@ducanh2912/next-pwa";

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // FORCE LE BUILD MÊME SI ESLINT OU TYPESCRIPT RÂLENT
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
}   

const pwaconfig = withPWAInit({
    dest : "public",
    cacheOnFrontEndNav: true,
    aggressiveFrontEndNavCaching: true,
    reloadOnOnline: true,
    swMinify: true,
    register: true,
    extendDefaultRuntimeCaching: true,
    workboxOptions : {
        runtimeCaching : [
          {
            urlPattern: /images\/.*\.(png|jpg|jpeg|gif|webp|avif)$/,  
            handler: 'CacheFirst',  
            options: {
              cacheName: 'image-cache',
              expiration: {
                maxEntries: 50, 
                maxAgeSeconds: 30 * 24 * 60 * 60, 
              },
            },
          },
        ]
    }
})

export default pwaconfig(nextConfig);