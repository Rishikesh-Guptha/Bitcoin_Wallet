function clicked(){
    var p_key= bsv.PrivateKey.fromRandom();
    var pr_key=p_key.toString();
    document.getElementById("private-key").innerHTML=pr_key;
}

 
