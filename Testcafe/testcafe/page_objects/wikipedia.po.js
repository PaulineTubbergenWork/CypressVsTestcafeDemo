import { Selector } from 'testcafe';

export const urls = {
    basicUrl: 'https://www.wikipedia.org',
    englishUrl: 'https://en.wikipedia.org/wiki/Main_Page'
}

export const zoeken = {
    zoekveld: '#searchInput[aria-label="Search Wikipedia"]',
    zoekknop: Selector('button').withText('Search')
}

export const welkomsttekst = Selector('span.mw-headline')
export const welkomsttekstTikfout = Selector('span.mh-headline')
export const titeltekst = Selector('h1.firstHeading > span')
