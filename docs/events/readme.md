# Events

Events are executed as soon as a trigger is fired. It also lets you control execution even more specifically by using conditions. When the trigger is fired and the conditions apply, the actions are executed from top to bottom. Events are always specified for the entire form and therefore must be specified in the form properties.

## Implementation

Events must always be specified in the root of the JSON string, otherwise they will be ignored.

## Semantic

This is an example of an events section.

```json
"events": [
    {
        "trigger": "onChange",
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

Events can be specified any number of times. Moreover, each event contains a trigger and  can contain **multiple conditions** as well as **multiple actions**.

```json
"events": [
    {
        "trigger": "onChange",
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
        "trigger": "onChange",
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
        "trigger": "onSubmit",
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

## Triggers

There are predefined triggers in Svorm. This is a list of all triggers that Svorm provides:

- onInit
- onChange
- onSubmit
- onNext
- onPrev

## Conditions

Conditions are used to determine whether a trigger should be executed. Conditions are always specified as an array. You can see [how conditions work](/conditions/) here.

## Actions
Actions are executed if the conditions are met. Actions are always specified as an array. You can see [how actions work](/actions/) here.

