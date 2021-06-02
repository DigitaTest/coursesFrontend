Adapters are the connectors of your application with the outside world.

Any form of API call or websocket interaction which needs to happen,
to share data with an external service or client, should happen within the adapter itself.

---------------- xhr folder -------------------------

There are cases where some data is always shared between all the adapters
– for example, sharing of cookies, base URL and headers across your AJAX (XHR) adapters.
These can be initialized in the xhr folder,
and then imported inside of your other adapters to be used further.

---------------------- axios ---------------------------

In the case of axios, you can use axios.create to create a base adapter,
and either export this initialized instance, or create different functions for get, post, patch and delete to abstract

Promise based HTTP client for the browser and node.js

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
component should only use adapters for data-fetching
