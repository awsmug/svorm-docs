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
        ['/overview/', 'Overview'],
        ['/fields/', 'Fields'],
        ['/field-types/', 'Field Types'],
        ['/triggers/', 'Triggers'],
        ['/conditions/', 'Conditions'],
        ['/actions/', 'Actions']        
    ]
  }
}