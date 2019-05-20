[![Codeship Status for myYearOfCode/bruby](https://app.codeship.com/projects/f3629530-4797-0137-d17b-5eef5ae52f91/status?branch=master)](https://app.codeship.com/projects/337557)
# bruby
A companion app for your IOT brewing appliance with a Ruby on Rails back end, a postgres database and a React front end. This app enables a user to add functionality to their brewing appliance.
It was conceived and created as a 'breakable toy' 2-week project at the end of Launch Academy's 18-week intensive program. I feel it shows off the skills I have learned during my time at Launch Academy.
[live demo](https://bruby-app.herokuapp.com/)
![Bruby home page](https://s3.amazonaws.com/bruby/github_images/Screen+Shot+2019-05-19+at+9.33.01+PM.png)
## Proxy Setup
A local dns redirect and a python proxy server are used to route the machine's api
calls to the heroku instance. I used dnsmasq for the redirect but there are many
other ways. The python proxy server code is available [in this repo](https://github.com/myYearOfCode/bruby-proxy). It finishes the task of routing one url to another url.
![python proxy server](https://s3.amazonaws.com/bruby/github_images/Screen+Shot+2019-05-19+at+10.03.13+PM.png)

## Features:


* Create / read / update / delete recipes.
![Bruby recipes page](https://s3.amazonaws.com/bruby/github_images/Screen+Shot+2019-05-19+at+9.33.17+PM.png)
* Rate and review brews.
* Upload a recipe to the machine.
* View live stats during a brew visualized with d3 and Google Charts.
![Bruby Now brewing page](https://s3.amazonaws.com/bruby/github_images/Screen+Shot+2019-05-19+at+9.33.29+PM.png)
* Receive reminder emails via a rails mailer to tell you when it is time to bottle or drink.
* Find microbreweries in your area. (using 3 apis: geolocation, brewery lookup, and Google Maps)
![Bruby find beer page](https://s3.amazonaws.com/bruby/github_images/Screen+Shot+2019-05-19+at+9.33.42+PM.png)

## Testing
Rails is extensively tested, with >90% code coverage. React is currently not well tested. That is towards the top of the to-do list though.
`bundle exec rspec` will run Rails tests (capybara) and `yarn run test` will run the React (enzyme) tests.
