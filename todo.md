20190423
I worked with heroku tonight and got my first react element tested with enzyme. I also did some documentation and remembering on how to set up the laptop to be a dns proxy. I got it to work on other computers and on my computer, but the pico wasn't fooled. I'm unsure what to do next on this front. maybe get better logging on what the pico is asking for.

also - look into how I can redirect to a url from a url. I'm currently unsure if that is possible, or at least how. dnsmasq wants to redirect to an ip.

I _may_ be able to get this to work by making a local rails server to get the request, chop it up into a new request for my heroku server, fetch that response and then serve it to the user.
