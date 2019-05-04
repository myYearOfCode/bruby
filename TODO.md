add tests for machine_id on user model.


research new endpoints
/API/pico/recipelist
/API/pico/getAssociatedPaks

test out pizzapi to see if it is still working. then consider if it is worth trying to get it working in ruby.

Xstart on ER DIAGRAM
  models / controllers / migrations / etc

react front end.
  spa or not?
  start d3 research
  X how to pass data to react without the page reloading? (FETCH!)
  build a nice form for recipe editing / creation.
  create / update / destroy recipes
  build a "brew next" button on each recipe
  build delete & edit buttons on each recipe

Features
  recipe storage
  recipe display (separate from editing)
  recipe editing
  brew this recipe next
  delete recipe.
  brew logging.
  brews index
  brew show page
  data visualization - captured data.
  data visualization - live data.
  styling.

  associate picoferm uid with a user
  initial handshake with unknown hardware_id -> return a 0 temp / time recipe with the hardware id as it's name. have the brewer start typing the name in and live update when it finds the unique one (with a minimum of 5 chars).
  how to associate ferm monitor?

visualization ideas:
maybe phases of data vis.
ie in 'preparing' step just show the water and steam temps. set vs actual as well, and potentially change the color of the water blobs from d3
show where the water is going - ie recirc, hops #1, bypass, etc.

once the mash in starts make the temp graph bigger and show temp over time
  graph of temp over time
  overlaid brewing phases
  overlaid set temps
  text display of current brew mode
  test display of recipe name
  temp variance from set temp
text estimated time to completion
rough guess as to final abv (and color?)
brew grain breakdown as a pie chart
large hops schedule , poss. with checkboxes

once the cooldown starts, maybe switch to a night mode or cooler blue theme.
