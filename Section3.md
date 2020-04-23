# Section 3 - NodeJS specific questions - (5 mins) #

5. What is an error first callback, and what is the reason for this pattern existing?

* In nodejs all the functions are higher order functions which executes by taking function in 
arguments  and that function is called callback, In callback which is a function will take error as an argument in the first parameter then the result of that execution will be returned.
* Error first callback is what node follows. All node internal API’s return err as first argument. It makes our handling easy if err is raised we need to return. No use to run whole code.

6. Explain the difference between fs.readSync and fs.read (File System module in Nodejs)

* This answer lies in question itself. As name signifies fs.readSync is Synchromous means stop until completed and fs.read works Asynchronous means returns response in callback.

7. What tasks do you feel should be done asynchronously?

* All I/O operation or blocking operation that includes database, file handling should be async. Node’s event loop will take care of it.
