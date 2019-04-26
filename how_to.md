how to downgrade react router



yarn run test -> to run the enzyme tests
bundle exec rspec -> to run the other tests

**running locally on port 80**
sudo bundle exec rails s -e production -p 80
that will get you running locally on port 80.
you may need to sudo bundle install beforehand.
that feels sketchy.

macbook dns redirect setup
things I did (on laptop)

killed apache (is this needed?) probably not.
sudo /usr/sbin/apachectl stop

set the dns to 127.0.0.1 (reset to 8.8.8.8 after the brew.) remember to hit apply after changing it on the main network tab. SET 8.8.8.8 TO THE SECOND DNS AND ALL WILL WORK EXCEPT FOR PICOBREW!!!!! !!!!! albeit a bit slowly.

plug in usb wifi.
connect it to the internet in the top bar.
In the sharing setup select '802.11 wlan adapter' in the top box and 'wifi' in the bottom box. click the "internet sharing" radio button and then hit the start button.

copy the ip of the 'Wifi' device and paste it in line 82+83 of dnsmasq.conf.
dnsmasq.conf is located in /usr/local/etc

wait a little bit. pray.

turn on dnsmasq
sudo launchctl start homebrew.mxcl.dnsmasq


curl http://picobrew.com -> this should give you our site, not their site.

This is how to clear the sts https redirect stuff from chrome
https://www.thesslstore.com/blog/clear-hsts-settings-chrome-firefox/


...
