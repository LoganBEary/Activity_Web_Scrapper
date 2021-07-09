from uszipcode import SearchEngine
from bs4 import BeautifulSoup
import requests

def scrape_zip_code(zipcode):
    search = SearchEngine(simple_zipcode=True)
    # possibly use zip code data to narrow down searches for future use
    zipReceived = search.by_zipcode(zipcode)
    zipList = zipReceived.to_dict()
    currentSearchCity = zipList['major_city']
    search = 'Activities-in {}'.format(currentSearchCity)
    url = 'https://www.google.com/search?q='+ search
    #https://www.tripadvisor.com/Attractions-g51862-Activities-Eugene_Oregon.html
    #print(search)
    #print(url)
    rqst = requests.get(url)
    #print(rqst)
    test_soup = BeautifulSoup(rqst.content, "html5lib")
    header_objs = test_soup.find_all('h3')
    for headers in header_objs:
        print(headers.getText())
        print('----------')
    #print(test.prettify())
# http://example.com/elsie
# http://example.com/lacie
# http://example.com/tillie
    #print(test.prettify())
    #print(test)s
    # need to add error handling for if zip is invalid or out of country
    return 0