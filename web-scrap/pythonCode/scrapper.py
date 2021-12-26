from uszipcode import SearchEngine
from bs4 import BeautifulSoup
import requests
import json
### Set list of content to be placed in React Cards
dict_list = ["title", "img_link", "subtxt", "body", "html_link"]

def addToJsonFile(dictionary):
    """
    opens JSON file and appends current dict to file, has to read file to append to end of it then re-writes 
    over the file with addition
    TODO Need to optimize function to do it all at once instead of multiple calls
    """
    with open('../web-scrapper/src/data/data.json', 'r') as openfile:
        data = json.load(openfile)
    data.append(dictionary)
    with open('../web-scrapper/src/data/data.json', 'w') as openfile:
        json.dump(data, openfile)

def createDynDict(header, subtext, body_txt, img_link, link):
    """
    """
    currentDict = {"title" : header, "img_link": img_link,
    "subtxt" : subtext,
    "body" : body_txt,
    "html_link" : link}

    addToJsonFile(currentDict)


def scrape_zip_code(zipcode):
    """
    """
    file = open('../web-scrapper/src/data/data.json', 'w')
    file.truncate()
    file.write("[]")
    file.close()
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
        #print(headers.getText())
        #print('----------')
        createDynDict(headers.getText(), "test", "test", "", "")
        #print(test.prettify())
# http://example.com/elsie
# http://example.com/lacie
# http://example.com/tillie
    #print(test.prettify())
    #print(test)s
    # need to add error handling for if zip is invalid or out of country
    openfile = open('../web-scrapper/src/data/data.json', 'r')
    data = json.load(openfile)

    return data