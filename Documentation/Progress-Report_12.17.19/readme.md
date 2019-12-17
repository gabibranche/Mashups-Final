# Progress Report 3

## What we planned to do by today:

* Hatim: Debug Sound Code
* Gabi: Generate Word Cloud
* Both: Combine and Debug Code

## What we did:

### Gabi 

#### Generate Word CLoud

I cannot take much credit for the word cloud. Rafay generously shared his code in the spirit of Mashups. I then used his code as a reference to making our own word cloud and with the assistance of Russel (a lab monitor) was able to make it work for my purpose. 
<br>
<br>
The most difficult part was to getting the words to change according to size. Rafay used a dictionary count. However since my words were not coming from an external API I had to use a word cloud function which counted the words in my array and worked from there.



### Hatim

#### Debugging Sound Code


### Both

#### Combine and Debug Code

This was surprisingly easier than we assumed. We compiled the code on Hatim's computer since he was responsible for making the skeletion design of the website. I uploaded my parts on github as a zip and he downloaded them and pieced all the code together. 

<br>
Once we got all the parts to work on the same file we polished our design. We chose to go with a deep blue as it would reflect well on the purple and not seem empty when the map was being build. We wanted the emphasis to be on the different elements of the page rather than on the design itself and as such we tried to keep it as minimalistic as possible.

<br>
Once all the code was connected, we were able to connect all the times to sync according to the beat slider so that my map and translation code would also be generated according to how long or short the beat length was.

###### Challeneges

The biggest challenge at this point was making the word cloud resize according to the screen. We manipulated the padding but given the size of the svg and its inability to easily resize, if the padding was made to big, the larger words would push the smaller words out of the canvas. To fix this we found a size in the middle which worked but at the same time was not so small that the words could not be read. 
<br>
We also disabled flow so that the user could not scroll but focus just where we wanted them.



## User Testing

We tested the website with roughly 6 people. There were different challenges with all of them. The first major challenge was that the user would not use the slider and therefore would not realised they could manipulated the tempo. Given that the default beat length was 80 units, the map would not generate fast enough before the user lost interest. 

<br>
We fixed this by making the slider the starting prompt. As such once the user started with the slider then the website would start.

<br>

What we didn't anticipate then was that users would then only use the slider and not enter a word for what is music. Some did but some also didn't. Additionally, many did not press on the word cloud or pressed on it before entering a word themselves. One of the users said that they ignored the word cloud because it was faded. Perhaps in the futre we could time it to become bright after a certain percentage of the world has developed.

<br>

We decided for the purpose of this project it was enough to prompt them to enter something roallyh but if we were to publish this website we would need to find ways to make the user realise that the website is more interactive than they believe.
