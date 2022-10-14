module.exports = {
  stories: [
    '../components/**/*.stories.mdx',
    '../components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-links',
  ],
  staticDirs: [
    '../dist',
    { from: '../images', to: '/images' },
    { from: '../fonts', to: '/fonts' },
  ],
}
