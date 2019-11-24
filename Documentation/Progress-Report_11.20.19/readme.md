# Progress Report 3

## What we planned to do by today:

* Hatim: Rhythm Music Type
* Gabi: Using Yandex API

## What we did:

### Gabi 

#### Using Yandex

The first thing I did was figuring out how to use the yandex code. The API is fairly straight forward but the documentation was a bit misleading in terms of how to access the API. However after talking to Jack, we figured out the correct syntax for calling the API. See [Test1 Code](https://github.com/gabibranche/Mashups-Final/blob/master/Code/test-code/yandex/test1_learningAPI.html).

#### Collecting words to translate

Once I was able to enter words directly with the URL and translate them based on an array of languages, the next step was to input a word from the user that could be fed to the API and then translated. I did this by using input tag and storing the word in a variable that I added to the url rather than putting the word directly into the URL. See [Test2 Code](https://github.com/gabibranche/Mashups-Final/blob/master/Code/test-code/yandex/test2_inputingText.html).

#### Storing the translations

In order to time the display the translations properly, I needed to store them in it's own array. I still haven't figured out the time delay yet but right now I can push the translations into it's own array.

### Hatim

#### Using p5.sound

Using p5.sound, I created a sound envelope that was called everytime a key was pressed on the screen. 

#### Typing a word

I also made a div that changed the word displaying depending on what the user inputted. I made it so that only letter characters would produce sounds and be added to the word (so barring special keys like F5 or Alt). This would be the answer to the question "What is Music?" 

## Challenges

### Gabi

There are two current challenges being faced:

#### Sleep Function
Right now the translations aren't looping in a timed sequence which means that one cannot read the translations before they are replaced with another translation. 
<br>
I will be talking to Jack about fixing this problem.

#### Storing translations?
Right now I am storing the translations per word. However I think this will be impractical once I begin to collect new words without refreshing as this method would generate too many arrays for each word. 
<br>
I think once we figure out how to update without refreshing this will be easier to tackle.

### Hatim

#### Getting sound out

My first challenge was getting sound out of the navigator. The way chrome handled sound changed since the references for p5 were written, such that now the website is only allowed to produce sound once the user had interacted at least once with it. In order to deal with this, I added a touchStarted function to my code which only so that sound only starts playing after the user has clicked on the page. In the future, I'll add a message that says "Please click somewhere to load the website" at first.

## Next Steps

* Friday 22nd

  - Hatim:
     - Make Website Skeleton
     - Add tempo
     - Add the letters typed to the rhythm
     
  - Gabi
    - Fix the timing problem
    - Make APIs with words inputted
    - Input the arrays of all languages
   
