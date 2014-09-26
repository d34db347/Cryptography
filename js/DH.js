function DH() {
    var crypto = require('crypto');
    //Diffie-Hellman key exchange group
    var alice = crypto.getDiffieHellman('modp5');
    var bob = crypto.getDiffieHellman('modp5');

    var a = alice.generateKeys('base64');
    var b = bob.generateKeys('base64');

    document.getElementById("apubkey").value = a;
    document.getElementById("bpubkey").value = b;

    var alice_secret = alice.computeSecret(bob.getPublicKey(), null, 'base64');
    var bob_secret = bob.computeSecret(alice.getPublicKey(), null, 'base64');

    document.getElementById("aseckey").value = alice_secret;
    document.getElementById("bseckey").value = bob_secret;

}