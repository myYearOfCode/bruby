import json
import time
import urllib2
import requests

data='https://api.openbrewerydb.org/breweries?page=1&per_page=30https://api.openbrewerydb.org/breweries?page=1&per_page=30https://api.openbrewerydb.org/breweries?page=1&per_page=30'
i = 151
while i < 200:
    url = 'https://api.openbrewerydb.org/breweries?page=%s&per_page=50' % i
    response = requests.get(url)
    i += 1
    if response.status_code != 200:
        print('Failed to get data:', response.status_code)
        data = "fail"
    else:
        data=response.json()
        print(data)
        with open('/Users/rossdaly/google_drive/projects/bruby/python_data.txt', 'a') as outfile:
            json.dump(data, outfile)
        print (i)
        time.sleep(5)
