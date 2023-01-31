import { titeltekst, urls, welkomsttekst, zoeken } from '../page_objects/wikipedia.po';

fixture('Getting Started')
    .page(urls.basicUrl);

test('My first test', async t => {
    console.log('test has been reached');
});

fixture('Wikipedia')
    .page(urls.englishUrl)

test('Checks that I can find the Platypus page on the English Wikipedia', async t => {
    // go to the English Wikipedia page
    // check that the page is in English
    await t.expect(welkomsttekst.innerText).contains('Welcome to')
    // search for the Platypus
    await t
        .typeText(zoeken.zoekveld, 'Platypus')
        .click(zoeken.zoekknop)
    // check that the Platypus page was found
    await t
        .expect(titeltekst.visible).eql(true)
        .expect(titeltekst.innerText).eql('Platypus')
  })