Thanks for viewing my project.
I did my best to use what was on your existing website, using the green `**i**` everywhere I could, and I used your color pallette for the greens, the greys and whites as much as I could.

I have sent you the zip file for ease.
Simply open the file on your favourite code editor, run `npm i` to install dependencies.
Then run `npm start` in your console and open [http://localhost:3000](http://localhost:3000) to view my project.

# Interactions

You are given two drop down menus and a slider to work with. Simply pick your make, the year and what type of car to search for your car *shair*.

You will receive an error letting the user know to select from all parameters before being able to filter to your desired output.

Once you successfully make a search, you are given the models of the *shair*-able vehicles along with a clickable button for more info and a booking button.

Of course the footer contains five social icons that will send you to your actual social media accounts and always in a new tab so you do not lose progress on finding your dream ride *shair*.

## Deployed For Ease
Check out [this link](https://car-shair.netlify.app/) to see the deployed version of my app on Netlify.

##
![app overview](https://github.com/Billex87/car-shairs/blob/54b6e24731af904dddedcbd449b1478ee79a6fb4/public/home%20page.png)
* I tried to emulate the elegeance you feel when you first come to the existing website. 

![filter area](https://github.com/Billex87/car-shairs/blob/main/public/display%20makers.png)
* This shows the filters. The user can filter using the car make, type and year. With more time I would have added an autocomplete function instead of listing available manufacturers.

![results](https://github.com/Billex87/car-shairs/blob/main/public/dodge%20trucks.png)
* This is what you would see when you search for Dodge trucks. You are greeted with all available models, more info on each truck as well as the booking button for added ease.

![errors](https://github.com/Billex87/car-shairs/blob/main/public/error.png)
* In case the user forgets to add input to a field, I have included a small error so they are immediately notified to update their selections.

![mobile rendering](https://github.com/Billex87/car-shairs/blob/main/public/render.png)
* Just to show, the app renders beautifully on all devices, in this picture we are using an iPhone X screen.


## Challenges, More Ideas, Etc.

I honestly would love to implement the menu popping down when you scroll that is currently on the Shair Web App. Due to the time constraints, I decided to forego that functionality. I have also started implementing the slider for the year. It is working but I ran into the challenge of distinguishing if the slider is in the default value or if it is actually a part of the query.

If I had more time, I would also create automated tests using Cypress and Jest.

