from uszipcode import SearchEngine
from bs4 import BeautifulSoup
import requests

def scrape_zip_code(zipcode):
    search = SearchEngine(simple_zipcode=True)
    # possibly use zip code data to narrow down searches for future use
    zipReceived = search.by_zipcode(zipcode)
    zipList = zipReceived.to_dict()
    print(zipList['major_city'])
    # need to add error handling for if zip is invalid or out of country
    return 0