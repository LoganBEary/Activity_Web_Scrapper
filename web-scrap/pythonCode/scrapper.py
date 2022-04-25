from uszipcode import SearchEngine
from serpapi import GoogleSearch
from bs4 import BeautifulSoup
import requests
import json
import re


def addToJsonFile(dictionary) -> None:
    """
    opens JSON file and appends current dict to file, has to read file to append to end of it then re-writes 
    over the file with addition
    TODO Need to optimize function to do it all at once instead of multiple calls
    @rtype: object
    """
    with open('../web-scrapper/src/data/data.json', 'r') as openfile:
        data = json.load(openfile)
    data.append(dictionary)
    with open('../web-scrapper/src/data/data.json', 'w') as openfile:
        json.dump(data, openfile, indent=2)


def createDynDict(header, link, description, thumbnail) -> None:
    """

    param header:
    param link:
    param description:
    param thumbnail:
    return None
    """
    currentDict = {
        "title" : header, 
        "img_link": thumbnail,
        "body" : description,
        "url_link" : link}

    addToJsonFile(currentDict)


def scrape_zip_code(zipcode):
    """

    :param zipcode:
    :return:
    """
    file = open('../web-scrapper/src/data/data.json', 'w')
    file.truncate()
    file.write("[]")
    file.close()

    search = SearchEngine(simple_zipcode=True)
    # # possibly use zip code data to narrow down searches for future use

    zipReceived = search.by_zipcode(zipcode)
    zipList = zipReceived.to_dict()

    currentSearchCity = zipList['major_city']
    search_q = 'Activities-in {}'.format(currentSearchCity)
    params = {
        "engine": "google",
        "q": search_q,
        "api_key": "2f877f4b4f3c87b017a3b5948b206db820e6c713f6e3260030a78ffa67ce19c8"
    }
    curr_search = GoogleSearch(params)
    results = curr_search.get_dict()

    topResults = results['top_sights']['sights']
    organic_results = results['organic_results']
    # print(topResults,'\n\n')
    # print("Sights", topResults
    for items in topResults:
        createDynDict(items['title'], items['link'], items['description'], items['thumbnail'])
# TODO Add key for card containing a picture or not, card will then be defaulted based on key val - with/without img -will grab diff content
# TODO Then create limit on page to how many activities to view
# TODO allow for page back to return to results of the page
    # for items in organic_results:
    #    createDynDict(items['title'], items['link'], items[''], items['']) 

    # # need to add error handling for if zip is invalid or out of country
    openfile = open('../web-scrapper/src/data/data.json', 'r')
    data = json.load(openfile)

    return data
