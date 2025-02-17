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

chrome.webRequest.onBeforeRequest.addListener(
    async function(details){
        const blocklist=await updateBlocklist();
        if (blocklist.includes(details.url))
        {
            return {cancel:true};
        }
    },
    {urls:["<all_urls>"]},
    ["blocking"]
);