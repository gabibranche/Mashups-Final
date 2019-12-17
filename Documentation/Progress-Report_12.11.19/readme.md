# Progress Report 4

## What we planned to do:

*Gabi:
  - Fix the timing problem
  - Make APIs with words inputted
  - Input the arrays of all languages
  
 ## What we did:
 
 ### Gabi
 
 #### Fixing the timing problem:
 
 The sleep function which I was using to make sure the translations came out at specific times was not working and all the words were displaying very rapidly. After discussing with Jack, I learned that the challenge was because Javascript is *asynchronous*. This implied that even though my code was written chronologicalLY, all the commands begin basically at the same time which made the translations run so quickly. To fix this problem I needed to do to things:
 
 <br>
 <br>
 
 Firstly I nneded to program the translations to only run after all the calls to the API were made. This way none would be undefined due to a delay in calls.
 <br>
 <br>
 
 Secondly, since the setTimeout function does not allow for a variable to be returned I had to make a self calling function which allowed the function to be looped within eachother.
<br>
<br>

By doing these things, my problem was fixed. I also used this method for displaying the different elements of the map so that they could also have a controlled delay.

#### Making APIs with the words inputted

This was a very fun part of the project as I think it really helped put the whole project into perspective. The first thing I had to learn was to use express.js for maling a basic rest API.
<br>
<br>
Up unitl starting the process I really didn't understand how calls worked. However by the end of it, I think I could fairly consistently explain and follow the process. 
<br>
<br>
*The Process*

* Firstly I had to create a local host with node.js and make it refresh automatically.
* Then I had to create routes so that my API could communicate with other pages
* I then had to make my mainscript communicate with my API js such that I could get the words inputted and store them in a local json file
* After this I could use the JSON File like an API and call the data stored locally via my local host 
* After this I manipulated the data to make a word cloud with the words that the user inputted

#### Inputting the array of all the languages

This was mundane and tedious work of just inputting the language codes into my array. I am sure there was probably an more efficient way to do this like calling a language code API but it was my time effective to just input them manually.

## Next Steps

### Gabi

* Make word cloud work

### Hatim
* Debug Sound

### Both 
* Combine all code
* Debug all code


 
 
