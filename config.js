module.exports = {
    subscriberCountTarget: 100000,
    channelId: 'https://www.youtube.com/channel/UCtz0UTZIgoS7W3tzcpTlDmA',
    hostname: 'http://localhost:3000',
    port: 3000,
    interval: {
        min: 300, // 300ms
        max: 1000 * 60 * 60 // 1h
    },

    // https://console.cloud.google.com/apis/credentials
    keys: {
        client_secret: 'yes',
        client_id: 'subscriber',
        redirect_uris: ['http://localhost:3000/oauth2callback']
    }
}
