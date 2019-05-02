[![Codeship Status for myYearOfCode/bruby](https://app.codeship.com/projects/f3629530-4797-0137-d17b-5eef5ae52f91/status?branch=master)](https://app.codeship.com/projects/337557)
# bruby
A brewing appliance controller with Ruby on Rails back end and a react front end.

This app is a ruby on rails based backend with a postgres db. The frontend runs on react and uses the d3 data visualization library.

Features:

create / read / update / destroy a recipe

select the next recipe to brew.

log the last time you rinsed.

keep track of brew while brewing, using temperature, an estimated time until complete, and a session mode graph.

recipe index
  show recipes in a list w / buttons for 'brew next', 'edit' and 'delete' (with confirm)

recipe show
  show recipe

recipe edit
  edit recipe form

how to pair machine with user.
when a machine with an unknown hardware id hits the server, respond with a 0 degree recipe named after the last ? digits of the machine id. have the user enter that and have a backend action associate the machine with the user.

how to pair machine with the fermentation monitor
idk. no display.
