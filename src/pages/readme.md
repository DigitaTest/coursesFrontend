in general, having a specific folder for route-level components to be placed is a good practise.

Gatsby & NextJS enforce having all routes in a folder named pages.
This is quite a readable way of defining route-level components,
and mimicking this in your CRA-generated application would also result in better code readability.

A centralized location for routes also helps you utilize the
“Go To File” functionality of most IDEs by jumping to a file by using (Cmd or Ctrl) + Click on an import.

This helps you move through the code quickly and with clarity of what belongs where.
It also sets a clear hierarchy of differentiation between pages and components,
where a page can import a component to display it and do nothing else, not even Business Logic.
