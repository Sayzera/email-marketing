
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'wordpress-1290109-4680406.cloudwaysapps.com'
            }
        ]
    }
};

export default nextConfig;
