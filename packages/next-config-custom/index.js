const IMAGE_DOMAIN = {
    DEV: 'd2p0u471yhpbu6.cloudfront.net',
    STG: 'd2228b07h5imc6.cloudfront.net',
    PRD: 'd3506a6w66yd46.cloudfront.net',
};

const SHOPBY_IMAGE_DOMAIN = 'rlyfaazj0.toastcdn.net';

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});


/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack(config) {
        const fileLoaderRule = config.module.rules.find(rule =>
            rule.test?.test?.('.svg'),
        );
        config.module.rules.push(
            {
                ...fileLoaderRule,
                test: /\.svg$/i,
                resourceQuery: /url/,
            },
            {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                resourceQuery: { not: /url/ },
                use: ['@svgr/webpack'],
            },
            {
                test: /\.node/,
                use: 'raw-loader',
            },
        );
        fileLoaderRule.exclude = /\.svg$/i;

        return config;
    },
    experimental: {
        scrollRestoration: true,
    },
    images: {
        domains: [...Object.values(IMAGE_DOMAIN), SHOPBY_IMAGE_DOMAIN],
        minimumCacheTTL: 31536000,
        deviceSizes: [640],
    },
    compiler: {
        removeConsole: {
            exclude:
                process.env.NODE_ENV === 'production'
                    ? ['error', 'info', 'warn']
                    : ['log', 'error', 'info', 'warn', 'table'],
        },
    },
    async headers() {
        return [
            {
                source: '/(.*)', // 모든 경로에 대해 적용
                headers: [
                    {
                        key: 'Timing-Allow-Origin',
                        value: '*', // 모든 도메인에 대해 허용하려면 '*' 사용
                    },
                ],
            },
        ];
    },
};

module.exports = withBundleAnalyzer(nextConfig);
