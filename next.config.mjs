/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: 
      ['api-ninjas.com'], 
    domains:
      ['raw.githubusercontent.com']// Add the hostname here
  }
};



export default nextConfig;

