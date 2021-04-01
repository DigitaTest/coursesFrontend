The contexts folder is a bare minimum folder
only containing the state which has to be shared across these components.

Each page can have several nested contexts,
with each context only passing the data forward in a downward direction.
But to avoid complexity, it is best to only have a single context file.
This structure will look like this:
