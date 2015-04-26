var words = {"lad","mad","sad"};

function censorify(){
    for(var x=0;x<words.length;x++){
        var temp = words[x];
        temp = temp.replace("a","##");        
    }
}

exports.censorify = censorify;
