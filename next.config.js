/** @type {import('next').NextConfig} */
const nextConfig = {
	allowedDevOrigins: ["192.168.56.1"],
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cdn.dummyjson.com",
			},
		],
	},
};

module.exports = nextConfig;