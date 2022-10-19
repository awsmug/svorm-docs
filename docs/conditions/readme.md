# Conditions


Conditionall logic allows you to **show** or **hide** elements depending on content of input fields. 

Here is an example of a text element which is shown depending on the value of the choice of the input with the name *show*.

```json
{
    "id": "test-form",
    "fieldsets": [
        {
            "id": "conditional-logic",
            "label": "Conditional Logic",            
            "fields": [
                {
                    "id": "show",
                    "label": "Show Textfield",
                    "type": "choice-radio",
                    "options": [                        
                        {
                            "label": "Yes",
                            "value": "yes"
                        },
                        {
                            "label": "No",
                            "value": "no"
                        }
                    ]
                },
                {
                    "id": "my-text",
                    "value": "You can see me!",
                    "type": "headline",
                    "conditions": [
                        {
                            "field": "show",
                            "value": "yes",
                            "operator": "=="
                        }
                    ]
                }
            ]
        }
    ]
}
```