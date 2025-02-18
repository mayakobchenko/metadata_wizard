# metadata_wizard

Mayas edition of updates for both prod wizard and dev wizard.

Single Page Application. ES8 module structure of express server for backend and react for frontend. On form submission a json file is sent to the backend endpoint.

To test the backend endpoint for POST requests:

To try if application reacts to webhook, in PowerShell:

```
$headers = @{"Content-Type" = "application/json"}
$body = @{
     event = "post json to backend"
     data = @{test = "hello from frontend"}
 }
$jsonBody = $body | ConvertTo-Json
```

run the express server:
node server/index.js
in another terminal run react:
npm start
