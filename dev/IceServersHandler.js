// IceServersHandler.js

var IceServersHandler = (function() {
    function getIceServers(connection) {
        // resiprocate: 3344+4433
        // pions: 7575
        var iceServers = [{
            'urls': [
                'stun:stun.l.google.com:19302',
                'stun:stun1.l.google.com:19302',
                'stun:stun2.l.google.com:19302',
                'stun:stun.l.google.com:19302?transport=udp',
                'stun1.l.google.com:19302',
                'stun2.l.google.com:19302',
                'stun3.l.google.com:19302',
                'stun4.l.google.com:19302',
                'stun.stunprotocol.org:3478',
            ]
        }];

        return iceServers;
    }

    return {
        getIceServers: getIceServers
    };
})();
