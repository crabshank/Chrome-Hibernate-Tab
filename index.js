let hibTab=document.getElementById('hibTab');

async function tabs_discard(d){
	return new Promise(function(resolve) {
				chrome.tabs.discard(d, function(tab){
						resolve();
				});
	});
}

hibTab.onclick=(e)=>{
	t=e.target;
    let params = {
        active: true,
        currentWindow: true
    }
        
    chrome.tabs.query(params, gotTabs);

    function gotTabs(tabs) {
        try{
            (async ()=>{ await tabs_discard(tabs[0].id); })();
        }catch(e){
            ;
        }finally{
            window.close();
        };
    }
};
