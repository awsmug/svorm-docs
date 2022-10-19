# Conditions

A condition represents a dependency on a particular field. Several conditions can always be specified. If these apply within the condition block, the block dependent on it is executed.

Conditions can be used in fields as well as in triggers. If the conditions are fulfilled in a field, it will be displayed. If the conditions are fulfilled in a trigger, this trigger is triggered.

## Semantic

A condition always consists of the ID of the field whose condition is to be true, the oprator and a value that the condition can fulfill in order to be fulfilled.

```json
"conditions": [
    {
        "fieldId": "show",
        "operator": "==",
        "value": "yes"        
    }
]
```

Any number of conditions can be specified, as in this example here. If all conditions are true, the conditions are considered to be fulfilled and the dependent block is executed.
```json
"conditions": [
    {
        "fieldId": "age",
        "operator": ">",
        "value": "17"        
    },
    {
        "fieldId": "color",
        "operator": "==",
        "value": "red"        
    },
    {
        "fieldId": "name",
        "operator": "!=",
        "value": "John Doe"        
    }
]
```

## Operators

Svorm contains operators as known from programming. Here is a list of all current operators.

| Operator | Description |
| --- | ----------- |
| == | Equal |
| != | Not Equal |
| > | Greater than |
| < | Less than |
| >= | Greater than or equal |
| <= | Less than or equal |


