# Fields

## Input elements

### Text

A text field.

```json
{
    "id": "first-name",
    "label": "First Name",
    "type": "text"
}         
```

Parameters:

- **id** (string) Id of the field.
- **label** (string) Label which will be shown in frontend.
- **required** (true|false) Whether the field is required or not.
- **classes** (array) CSS classes for input wrapper.
- **labelClasses** (array) CSS classes for label tag.
- **inputClasses** (array) CSS classes for input tag.
- **conditions** (array) An array with [conditions](/SvelteForms/json-structure/validation).
- **validations** (array) An array with [validations](/SvelteForms/json-structure/validation).
- **replacements** (array) An array with [replacements](/SvelteForms/json-structure/replacements).
- **help** (string) A helping text, appearing in a tooltip.
- **prefix** (string) A text shown before the input.
- **suffix** (string) A text shown after the input.
- **valueDefault** (any) Default value.

### Textarea

A textarea field.

```json
{
    "id": "message",
    "label": "Your Message",
    "type": "textarea"
}         
```

Parameters:

- **id** (string) Id of the field.
- **label** (string) Label which will be shown in frontend.
- **required** (true|false) Whether the field is required or not.
- **classes** (array) CSS classes for input wrapper.
- **labelClasses** (array) CSS classes for label tag.
- **inputClasses** (array) CSS classes for input tag.
- **conditions** (array) An array with [conditions](/SvelteForms/json-structure/validation).
- **validations** (array) An array with [validations](/SvelteForms/json-structure/validation).
- **replacements** (array) An array with [replacements](/SvelteForms/json-structure/replacements).
- **help** (string) A helping text, appearing in a tooltip.
- **prefix** (string) A text shown before the input.
- **suffix** (string) A text shown after the input.
- **valueDefault** (any) Default value.

### Select

A select field.

```json
{
    "id": "message",
    "label": "Your Message",
    "type": "select",
    "choices": [                        
        {
            "label": "Yes",
            "value": "yes"
        },
        {
            "label": "No",
            "value": "no"
        }
    ]
}         
```

Parameters:

- **id** (string) Id of the field.
- **label** (string) Label which will be shown in frontend.
- **required** (true|false) Whether the field is required or not.
- **classes** (array) CSS classes for input wrapper.
- **labelClasses** (array) CSS classes for label tag.
- **inputClasses** (array) CSS classes for input tag.
- **conditions** (array) An array with [conditions](/SvelteForms/json-structure/validation).
- **validations** (array) An array with [validations](/SvelteForms/json-structure/validation).
- **replacements** (array) An array with [replacements](/SvelteForms/json-structure/replacements).
- **help** (string) A helping text, appearing in a tooltip.
- **valueDefault** (any) Default value.

### Choice Radio

A radio choice.

```json
{
    "id": "message",
    "label": "Your Message",
    "type": "choice-radio",
    "choices": [                        
        {
            "label": "Yes",
            "value": "yes"
        },
        {
            "label": "No",
            "value": "no"
        }
    ]
}         
```

Parameters:

- **name** (string) Name of the field.
- **label** (string) Label which will be shown in frontend.
- **required** (true|false) Whether the field is required or not.
- **classes** (string) Additional CSS classes.
- **choices** (array) An array of [choices](#choices).
- **validations** (array) An array with [validations](/SvelteForms/json-structure/validation) which have to be passed.

### Choice Image

An image choice.

```json
{
    "id": "message",
    "label": "Select Image",
    "type": "choice-image",
    "choices": [                        
        {
            "label": "Image 1",
            "value": "1",
            "url": ""
        },
        {
            "label": "Image 1",
            "value": "2",
            "url": ""
        }
    ]
}         
```

Parameters:

- **name** (string) Name of the field.
- **label** (string) Label which will be shown in frontend.
- **required** (true|false) Whether the field is required or not.
- **classes** (string) Additional CSS classes.
- **choices** (array) An array of [choices](#choices).
- **validations** (array) An array with [validations](/SvelteForms/json-structure/validation) which have to be passed.

### Choices

```json
[                        
    {
        "label": "Choice 1",
        "value": "1"
    },
    {
        "label": "Choice 2",
        "value": "2"
    },
    {
        "label": "Choice 3",
        "value": "3"
    }
]
```

### Range

## Content elements

### Headline

### Text