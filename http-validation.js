function createUrls(links){
  return links.map(ObjectLink => Object.values(ObjectLink).join());
}

function handleValidationsUrls(links){
  return createUrls(links);
}

module.exports = handleValidationsUrls;