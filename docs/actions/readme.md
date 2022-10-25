# Actions

Actions are functions that can be triggered by triggers. Any number of actions can be executed in an action block. On the one hand, there are predefined functions, but on the other hand, callbacks can also be used.

## Implemtation

The implementation of actions is very simple. 

## Semantic

An action block is always structured as follows. First, the type of the action is specified. Here there are the predefined types **alert**, **modal** as well as a **callback** that can be specified. The **data** object contains the data that is passed to the action. 

```json
{
    "type": "alert",
    "data": {
        "message": "Hello World!"
    }
}
```

## Types

Actions can be of different types. The following types are predefined:

### Alert

The alert action displays a message in the form of an alert.

```json
"actions": [
    {
        "type": "alert",
        "data": {
            "message": "This is an alert!"
        }
    }
]
```

### Modal

The modal action displays a message in the form of a modal.

```json
"actions": [
    {
        "type": "modal",
        "data": {
            "title": "Modal title",
            "message": "This is a modal!"
        }
    }
]
```

### Callback

The callback action executes a callback function. The callback function must be specified in the data object.

```json
"actions": [
    {
        "type": "callback",
        "data": {
            "callback": "myCallback"
        }
    }
]
```

If yout want to use a callback function, you have to define the callback function before in a script tag. The callback function must be defined before in the global scope.

```html
<script>
    function myCallback() {
        console.log("Hello World!");
    }
    globalThis.myCallback = myCallback;
</script>
```

You also can define parameters for the callback function.

```json
"actions": [
    {
        "type": "callback",
        "data": {
            "callback": "myCallback",
            "params": [
                "Hello World!"
            ]
        }
    }
]
```

```html
<script>
    function myCallback(message) {
        console.log(message);
    }
    globalThis.myCallback = myCallback;
</script>
```