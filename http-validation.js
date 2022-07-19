const fetch = require('node-fetch');

function handleErrors(err) {
  throw new Error(err.message);
}

async function checksStates(arraysUrlsLinks) {
  try {
    const stateLinks = await Promise
      .all(arraysUrlsLinks
        .map(async url => {
          const res = await fetch(url)
          return res.status;
        }))
    return stateLinks;
  } catch (err) {
    handleErrors(err)
  }
}

function createUrls(arrayslinks) {
  return arrayslinks
    .map(ObjectLink => Object
      .values(ObjectLink).join());
}

async function handleValidationsUrls(arrayslinks) {
  const links = createUrls(arrayslinks);
  const statesLinks = await checksStates(links);

  const results = arrayslinks.map((object, index) => ({
    ...object, states: statesLinks[index]
  }))
  return results
}

module.exports = handleValidationsUrls;