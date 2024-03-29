# Fields

Fields are the building blocks of a form. They are the elements that the user will interact with. Fields are grouped in fieldsets.

## Implementation

Fields must always be specified in the fields array of the a fieldset, otherwise they will be ignored.

## Semantic

This is an example of two text fields within a fieldset.

```json
"fieldsets": [
        {
            "id": "fieldset1",
            "label": "Title of fieldset",
            "fields": [
                {
                    "id": "firstname",
                    "label": "First name",
                    "type": "text"
                },
                {
                    "id": "lastname",
                    "label": "Last name",
                    "type": "text"
                }
            ]
        }        
    ]
```

## Conditions

Conditions are used to show or hide a field based on the value of another field. If the user enters the value that is specified in the "value" property, the field will be shown or hidden based on the value of the field that is specified in the "fieldId" property. You also can specify multiple conditions for a single field.

```json
    {
        "id": "show",
        "label": "Show field",
        "type": "select",
        "options": [
            {
                "value": "yes",
                "label": "Yes"
            },
            {
                "value": "no",
                "label": "No"
            }
        ]
    },
    {
        "id": "firstname",
        "label": "First name",
        "type": "text",
        "conditions": [
            {
                "fieldId": "show",
                "operator": "==",
                "value": "yes"        
            }
        ]
    }
```

## Validations

Validations are used to validate the value of a field. If the user enters the value that is specified in the "value" property, the field will be validated based on the validation that is specified in the "validation" property. You also can specify multiple validations for a single field.

```json
    {
        "id": "firstname",
        "label": "First name",
        "type": "text",
        "validations": [
            {
                "validation": "empty",
                "error": "This field is required.""        
            }
        ]
    }
```

There are predefined validations in Svorm. This is a list of all validations that Svorm provides:

### Simple validations

- **string** - A string wich can nearly contain everything.
- **letters** - A string wich can only contain letters.
- **int** - Integer value.
- **number** - A number value.
- **email** - A valid email address.
- **empty** - The value must not be empty.
- **url** - A valid URL.

### Validations with parameters

An example of a validation with parameters is the **minLength** validation. The validation checks if the length of the string is greater than the value that is specified in the "value" property.

```json
    {
        "id": "firstname",
        "label": "First name",
        "type": "text",
        "validations": [
            {
                "validation": "minLength",
                "value": 5,
                "error": "The first name have to be at least 5 characters long."        
            }
        ]
    }
```

This is a list of all validations with parameters that Svorm provides:

- **min** - The value must be greater than the value that is specified in the "value" property.
- **max** - The value must be less than the value that is specified in the "value" property.
- **minLength** - The length of the string must be greater than the value that is specified in the "value" property.
- **maxLength** - The length of the string must be less than the value that is specified in the "value" property.

### Validations for specific fields

- **isChecked** - The checkbox must be checked (only for checkboxes).

## Replacements

Replacements are used to replace the value of a field with another value. If the user enters the value that is specified in the "from" property, the value will be replaced with the value that is specified in the "to" property. You also can specify multiple replacements for a single field.

```json
    {
        "id": "firstname",
        "label": "First name",
        "type": "text",
        "replacements": [
            {
                "from": "Peter",
                "to": "John"
            }
        ]
    }
```

## ValueCallback

The ValueCallback is a JavasScript Callback function which is executed depending on the [trigger](/triggers/).

```json
    {
        "id": "name",
        "label": "Yout Name",
        "type": "text",
        "valueCallback": [
            {
                "method": "myCallbackFunction",
                "trigger": "change"
                "args": [
                    "John",
                    "Doe"
                ]                
            }
        ]
    }
```

To create a callback function you have to add a method with the globalThis object.

```javascript
globalThis.myCallbackFunction = function (arg1, arg2) {    
    return arg1 + " " + arg2;
}
```

The returned value will be set as the value of the field.


You can also use other field values as arguments for the callback function.

```json
    {
        "id": "firstname",
        "label": "First name",
        "type": "text"
    },
    {
        "id": "lastname",
        "label": "Last name",
        "type": "text"
    },
    {
        "id": "name",
        "label": "Yout Name",
        "type": "text",
        "valueCallback": [
            {
                "method": "myCallbackFunction",
                "trigger": "change"
                "args": [
                    "field:firstname",
                    "field:lastname"
                ]                
            }
        ]
    }
```





