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
        ['/', 'Home'],
        ['/overview/', 'Overview'],
        ['/get-started/', 'Get Started'],        
        ['/fields/', 'Fields'],
        ['/field-types/', 'Field Types'],
        ['/events/', 'Events'],
        ['/triggers/', 'Triggers'],
        ['/conditions/', 'Conditions'],
        ['/actions/', 'Actions']        
    ]
  }
}