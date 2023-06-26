function clicked(){
    //To get Private Key
    var p_key= bsv.PrivateKey.fromRandom();
    var pr_key=p_key.toString();
    document.getElementById("private-key").innerHTML=pr_key;

    // We get the public key from the private key
    var pub_key =bsv.PublicKey.fromPrivateKey(p_key);
    var public_key= pub_key.toString();
    document.getElementById("public-key").innerHTML=public_key;

    var wallet_address = bsv.Address.fromPublicKey(pub_key);
    var wall_address= wallet_address.toString();
    document.getElementById("address").innerHTML=wall_address;
}

 
