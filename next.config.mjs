import nextra from 'nextra';

const withNextra = nextra({});

const nextConfig = {
  images: {
    unoptimized: true,
  },
  output: 'export',
};

export default withNextra(nextConfig);
