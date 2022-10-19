# Get started

## Installation

Svorm can be installed by using the node package manager *npm*.



## Using in HTML

1. Add svorm via *npm*

```cmd
npm i svorm
```

2. Add HTML into to your HTML header.

```html
<script defer src="/node_modules/svorm/dist/svorm.js"></script>
<link rel="stylesheet" href="/node_modules/svorm/dist/svorm.css" />
```

3. Add a form json to you project. For example in a file named form.json.

```json
{
    "id": "test-form",
    "start": "test-fieldset",
    "fieldsets": [
        {
            "id": "test-fieldset",
            "label": "Test fieldset",
            "fields": [
                {
                    "id": "a-textfield",
                    "label": "A Textfield",
                    "type": "text"
                }
            ]
        }
    ]
}
```

4. Include JSON config file to your HTML body.

```html
<div data-component="form" data-form="form.json"></div>
```

## Using in Svelte

1. Add svorm via *npm* in your svelte project.

```cmd
npm i svorm 
```