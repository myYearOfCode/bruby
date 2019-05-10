import json
import time
import urllib2
import urlparse
import requests

data='https://api.openbrewerydb.org/breweries?page=1&per_page=30https://api.openbrewerydb.org/breweries?page=1&per_page=30https://api.openbrewerydb.org/breweries?page=1&per_page=30'
i = 151
while i < 200:
    url = 'https://bruby-app.herokuapp.com/API/pico/log?uid=f91dc3e8cfa484a6d37911d951ac0a72&sesId=04147e62fe4a81&wort=56&therm=283&step=Preparing%20to%20Brew&error=0&sesType=0&timeLeft=3538&shutScale=0.24'
    response = requests.get(urlparse.unquote(url))
    i += 1
    if response.status_code != 200:
        print('Failed to get data:', response.status_code)
        data = "fail"
    else:
        data=response.json()
        print(data)
        # with open('/Users/rossdaly/google_drive/projects/bruby/python_data.txt', 'a') as outfile:
        #     json.dump(data, outfile)
        print (i)
        time.sleep(5)
