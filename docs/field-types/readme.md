# Field Types

The field types defined by Svorm are basically analogous to HTML Form fields. The naming of corresponding parameters can be derived from the existing parameters for HTML experts. Nevertheless, there are a few deviations that arise due to the simplification in the JSON format. Here you can find a list with all fields and corresponding parameters.

## Text

Creates a text field.

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
- **conditions** (array) An array with [conditions](/conditions).
- **validations** (array) An array with [validations](/SvelteForms/json-structure/validation).
- **replacements** (array) An array with [replacements](/SvelteForms/json-structure/replacements).
- **help** (string) A helping text, appearing in a tooltip.
- **prefix** (string) A text shown before the input.
- **suffix** (string) A text shown after the input.
- **valueDefault** (any) Default value.

## Textarea

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
- **conditions** (array) An array with [conditions](/conditions).
- **validations** (array) An array with [validations](/SvelteForms/json-structure/validation).
- **replacements** (array) An array with [replacements](/SvelteForms/json-structure/replacements).
- **help** (string) A helping text, appearing in a tooltip.
- **prefix** (string) A text shown before the input.
- **suffix** (string) A text shown after the input.
- **valueDefault** (any) Default value.

## Select

Creates a select field.

```json
{
    "id": "message",
    "label": "Your Message",
    "type": "select",
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
}         
```

Parameters:

- **id** (string) Id of the field.
- **label** (string) Label which will be shown in frontend.
- **required** (true|false) Whether the field is required or not.
- **classes** (array) CSS classes for input wrapper.
- **labelClasses** (array) CSS classes for label tag.
- **inputClasses** (array) CSS classes for input tag.
- **conditions** (array) An array with [conditions](/conditions).
- **validations** (array) An array with [validations](/SvelteForms/json-structure/validation).
- **replacements** (array) An array with [replacements](/SvelteForms/json-structure/replacements).
- **help** (string) A helping text, appearing in a tooltip.
- **valueDefault** (any) Default value.

## Radio

Creates a radio intut element.

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

- **id** (string) Name of the field.
- **label** (string) Label which will be shown in frontend.
- **required** (true|false) Whether the field is required or not.
- **classes** (string) Additional CSS classes.
- **choices** (array) An array of [choices](#choices).
- **validations** (array) An array with [validations](/SvelteForms/json-structure/validation) which have to be passed.

## Create a Field

You are confident with NPM, JavaScript and Svelte? Then just create your own field. In our documentation we explain step by step how you can create and integrate your own field with Svelte. Of course we are open for new fields in the basic version of Svorm.
