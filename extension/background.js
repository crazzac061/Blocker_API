async function updateBlocklist()
{
    try{
        const response =await fetch ("hhtp://127.0.0.1:5000/get_blocklist");
        const data = await response.json();
        return data.blocked_sites.map(site => `${site}/*`);

    }
    catch(error)
    {
        console.error ("Error fetching blocklist:",error);
        return [];
    }
}
async function fetchBlocklist(){
    return [
        "*://*.instagram.com/*",
        "*://*.messenger.com/*"
    ]
}


async function blockRequests(){
    try{
    const blocklist=await fetchBlocklist();

    browser.webRequest.onBeforeRequest.addListener(
       function(details){
        console.log("Blocked:",details.url);

            return {cancel:true};
        
       },
    {urls:blocklist},
    ["blocking"]
);
    }
    catch(error){
        console.error("error fetching blocklist:",error);
    }
}

blockRequests();