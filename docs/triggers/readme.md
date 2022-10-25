# Triggers

Triggers are executed as soon as the conditions they contain are met. If this is the case, the actions contained therein are started. Triggers are always specified for the entire form and therefore must be specified in the form properties.

## Implementation

Triggers must always be specified in the root of the JSON string, otherwise they will be ignored.

```json
{
  "triggers": [
    {
        // Trigger 1
    },
    {
        // Trigger 2
    },
    {
        // Trigger 3 (and so on)
    }
  ]
}
```

## Semantic

This is an example of a triggers section.

```json
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
```

Triggers can be specified any number of times. Moreover, each trigger can contain **multiple conditions** as well as **multiple actions**.

```json
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
```

## Conditions [(see here)](/conditions/)

Conditions are used to determine whether a trigger should be executed. Conditions are always specified as an array. You can see [how conditions work](/conditions/) here.

