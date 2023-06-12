/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:[
            "images.pexels.com",
            "rapidapi.com",
            "openai80.p.rapidapi.com/chat/completions",
            "rapidapi.com",
        ]
    },

    typescript:{
        ignoreBuildErrors:true
    }
    


      
}

module.exports = nextConfig

module.exports = {
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  };
  