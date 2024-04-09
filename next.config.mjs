/** @type {import('next').NextConfig} */
const nextConfig = {
    // 외부에서 이미지 가져올 때 url 허용 부분
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: ""
            }
        ]
    }
}

export default nextConfig;
