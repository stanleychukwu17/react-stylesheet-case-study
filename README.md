# This project is mainly for testing purposes

## the main problem
I don't like the way that react would load all the styles that are imported in different containers and load them all at once at the head of the
index.html page.. i feel this might slow down the application or in my own case, clashing of class names in different components

## Solution
So what i did was made some other folder in my localhost and ran that one as the server using node.js and then served up the css files depending on the
component that has been loaded and then remove the css files when the component has been removed(i.e unmounted)

## final toughts
Not as fast i would have liked, but going forward this is the solution that i will be using for larger and complex projects, and as i work along the way,
I will see if i can find better ways to cache the files and then speed up the process