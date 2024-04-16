/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        //Modo obsoleto de autorização
        // domains: [
        //     'raw.githubusercontent.com'
        // ]
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                port: '',
                pathname: '**',
            },
        ],
    }
};

export default nextConfig;
