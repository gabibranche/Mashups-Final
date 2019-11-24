# Progress Report 3

## What we planned to do by today:

* Hatim: Finish Rhythm Mechanic
* Gabi: 

## What we did:

### Hatim

#### Adding Tempo

Using the envelope I already made, I made it play using a set tempo of 80 bpm. To do this, I used a recursive function that set a time-out for every beat. I then changed the amplitude of the 4th beat to make it louder than the other beats. I also added a slider to the page to be able to change the tempo, with the base value being 80 bpm. I used the code from w3schools.com, but I plan to change the appearance of the slider later on.

#### Generating Sound of the Characters

I wanted to add some sort of specific recurring sound that would change depending on the characters and the moment they are typed. I took inspiration from the game Animal Crossing, where the characters of the game speak out every letter of the text they say to you in a high pitch. After some research, I found that someone had already created a javascript library to recreate the "language", which is called [animalese](https://github.com/Acedio/animalese.js). Using this library, I made every letter sound out once they're typed in.

#### Making a Rhythm Section

Now I wanted to make the characters actually stick to the rhythm section. I created a character class with a key attribute (what's the character?), a counter attribute (at which beat are they typed in?) and a time attribute (after how much time after the beat is the character typed?). Everytime a new beat is called, the program goes through the existing characters and checks if they were typed at the same beat, and if yes, a time-out is set so that it would be played again after the appropriate time. I also added a map function so that the time would change if the tempo is changed.

#### Modifying the word

I also added code so that space would add a space without affecting the rhythm and back space would erase the last character from the rhythm section and from the word typed.

## Challenges

### Hatim

#### Time Coordination

One thing I had difficulty with was the setTimeout function, which actually set a time out if I had two parentheses () after the name of the function I'm calling inside. This was a problem since the metronome just repeated itself instantly and the character sounds would as well. This took me a while to detect. 

#### Character Sound

After consulting with Gabi, we weren't really satisfied with the way the characters sounded, so I'll try to work on a way to make it sound better. Right now, though, my priority is more getting the whole website to work than improving the sound quality.

## Next Steps

* Wednesday 27th

  - Hatim:
     - Make website skeleton
     - Add harmony elements
 
   
