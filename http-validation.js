const fetch = require('node-fetch');

async function checksStates(arraysUrlsLinks) {
  const stateLinks = await Promise.all(arraysUrlsLinks.map(async url => {
    const res = await fetch(url)
    return res.status;
  }))
  return stateLinks;
}

function createUrls(arrayslinks) {
  return arrayslinks.map(ObjectLink => Object.values(ObjectLink).join());
}

async function handleValidationsUrls(arrayslinks) {
  const links = createUrls(arrayslinks);
  const statesLinks = await checksStates(links);
  return statesLinks;
}

module.exports = handleValidationsUrls;