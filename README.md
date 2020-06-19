Fidget
======

Fidget is a Twitch clone that allow users to create their own channels, live stream, upload vods, and watch them together with integrated live chat for each channel. Users can customize their profile and generate a following by garnering follows from other users.

Live site: https://fidget-tv.herokuapp.com/#/


### Technologies

- Frontend: React, Redux, Webpack
- Backend: Ruby on Rails, Action Cable/WebSockets, WebRTC
- Database and Storage: Postgres, AWS S3
- Hosting: Heroku


### Live Streaming

WebRTC was used to implement live video and audio streaming. The signaling was implemented via WebSockets to set up one-to-many peer connections. The WebSocket portion of the signaling for the broadcaster and watcher is show below:

```javascript
//Broadcaster
  beginBroadcast() {
    App.cable.subscriptions.create(
      { channel: "StreamChannel" },
      {
        connected: () => {
            broadcastData({ type: BROADCAST, id: this.userId })
        },
        received: data => {
          if (data.to !== this.userId) return
            switch (data.type) {
              case WATCHER:
                  return this.addPeerConnection(data)
              case CANDIDATE:
                  return this.addCandidate(data)
              case ANSWER:
                  return this.handleAnswer(data)
              case PEER_DISCONNECT:
                  return this.handlePeerDisconnect(data)
              default:
                  return
            }
        },
    })
    }
```

```javascript
//Watcher
  App.cable.subscriptions.create(
    { channel: "StreamChannel" },
    {
    connected: () => {
      broadcastData({ type: WATCHER, id: this.userId, to: Number(this.props.match.params.channelId) })
    },
    received: data => {
      if (data.to !== this.userId) return
      switch (data.type) {
        case OFFER:
          return this.handleOffer(data)
        case EXCHANGE:
          if (data.to !== this.userId) return
          return this.exchange(data)
        case CANDIDATE:
          return this.addCandidate(data)
        default:
          return
      }
    },
    })
```
### Live Chat

One of the main features of Twitch (and Fidget) is that each channel has its own unique real-time chat room. To accomplish this, Fidget makes use of WebSockets. WebSocket connections are scoped using channel ids, which allows for the creation of many different chat rooms. When a user enters a channel, they are automitically subscribed to that channel's unique WebSocket Pub/Sub connection.

Action Cable was used to implement WebSockets with the Rails backend. An example of a subscription to a channel's chat room is shown below: 

```javascript
App.cable.subscriptions.create(
    {channel: "ChatRoomsChannel", id: this.props.match.params.channelName},
    {
        received: data => {
            this.setState({
                messages: [...this.state.messages, [data.message, data.username, data.color]],
            })
        },
        speak: function(data) {
            return this.perform("speak", data)
        }
    }
)
```
### VODs

VOD upload is another major feature of Fidget. To accomodate user upload of VOD, Fidget makes use of Amazon S3 storage. User can upload and store VODs, which are then are accessible through their channels. Users can watch VODs uploaded by a channel and chat at the same time.


![alt text](https://i.ibb.co/3Y5PGm7/readme-Img.png "Example Channel")






