# Triggers

Triggers are executed as soon as the conditions they contain are met. If this is the case, the actions contained therein are started. Triggers are always specified for the entire form and therefore must be specified in the form properties.

## Semantic

This is an example of a form. The fieldsets have been omitted for clarity.

```json
{
    "id": "example-form",
    "fieldsets": [...],
    "triggers": [
        {
            "conditions": [
                {
                    "fieldId": "show",
                    "operator": "==",
                    "value": "yes"        
                }
            ],
            "actions": [
                {
                    "type": "alert",
                    "data": {
                        "message": ""
                    }
                }
            ]            
        }
    ]
]
```

Triggers can be specified any number of times. Moreover, each trigger can contain multiple conditions as well as multiple actions.

```json
{
    "id": "example-form",
    "fieldsets": [...],
    "triggers": [
        {
            "conditions": [
                {
                    "fieldId": "field1",
                    "operator": "==",
                    "value": "yes"        
                }
            ],
            "actions": [
                {
                    "type": "alert",
                    "data": {
                        "message": "Executed because field 1 was set to yes."
                    }
                }
            ]            
        },
        {
            "conditions": [
                {
                    "fieldId": "field2",
                    "operator": "==",
                    "value": "yes"        
                }
            ],
            "actions": [
                {
                    "type": "alert",
                    "data": {
                        "message": "Executed because field 2 was set to yes."
                    }
                }
            ]            
        },
        {
            "conditions": [
                {
                    "fieldId": "field1",
                    "operator": "==",
                    "value": "yes"        
                },
                {
                    "fieldId": "field2",
                    "operator": "==",
                    "value": "yes"        
                }
            ],
            "actions": [
                {
                    "type": "alert",
                    "data": {
                        "message": "Executed because field 1 and field 2 was set to yes."
                    }
                },
                {
                    "type": "alert",
                    "data": {
                        "message": "Just a second alert, because we can."
                    }
                }
            ]            
        }
    ]
]
```

