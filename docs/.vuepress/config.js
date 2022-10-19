module.exports = {
  title: "Svorm Documentation",
  description: "A JSON based form framework based on svelte and typescript.",
  theme: 'default-prefers-color-scheme',
  themeConfig: {
    overrideTheme: 'dark',
    nav: [
      { text: "Home", link: "/" },
      { text: "GitHub", link: "https://github.com/awsmug/svorm" }
    ],
    sidebar: [
        '/',
        ['/get-started/', 'Get Started'],
        ['/json-schema/', 'JSON Schema'],
        ['/fields/', 'Fields'],
        ['/conditions/', 'Conditions'],
        ['/triggers/', 'Triggers']        
    ]
  }
}