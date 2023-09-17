/** @type {import('next').NextConfig} */
const nextConfig = {

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
     
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
     
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
     
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      
    ],
    unoptimized:true,
  },
}

module.exports = nextConfig
