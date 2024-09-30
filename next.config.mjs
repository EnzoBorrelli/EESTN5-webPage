/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'xywelhsgabxjaiexuyre.supabase.co', // your Supabase project URL
        port: '', // leave it empty if no specific port is required
        pathname: '/storage/v1/object/public/teacher_images/**', // specific path to your images
      },
    ],
  },
};

export default nextConfig;
