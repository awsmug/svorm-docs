# Get started

## HTML integration

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
    "id": "contact",
    "fieldsets": [
        {
            "legend": "Contact",
            "fields": [
                {
                    "id": "name",
                    "label": "Your name",
                    "type": "text"
                },
                {
                    "id": "email",
                    "label": "Email",
                    "type": "text",
                    "validations": [
                        {
                            "type": "email",
                            "error": "Email is not valid."
                        }
                    ]
                },
                {
                    "id": "message",
                    "label": "Message",
                    "type": "textarea"
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

## Svelte integration

1. Add svorm via *npm* in your svelte project.

```cmd
npm i svorm 
```