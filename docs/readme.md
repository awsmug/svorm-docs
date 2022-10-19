# Svorm Documentation

## Svorm - A JSON form builder

Create your form using JSON.

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

A form framework based on [SVELTE](https://svelte.dev/) and [TypeScript](https://www.typescriptlang.org/).