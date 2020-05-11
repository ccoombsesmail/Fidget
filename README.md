Fidget
======


Fidget is a Twitch clone that allow users to create their own channels, upload vods, and watch them together with integrated live chat for each channel. Users can customize their profile and generate a following by garnering follows from other users.

Live site: https://fidget-tv.herokuapp.com/#/



Fidget is built with a Ruby on Rails backend, and a Javascript/React frontend. Postgres was used as the primary database, along with amazon s3 services.


### Live Chat
One of the main features of Twitch (and Fidget) is that each channel has its own unique real-time chat room. To accomplish this, Fidget makes use of websockets. Websockets connections are made unique using channel ids, which allows for the creation of many seperate websocket connections. When a user enters a channel, they are automitically subscribed to that channels unique websocket connections, allows for seperate chat rooms.

Action cable was used to implement websockets with the Rails backend. The main difficulty was is setting up users subscriptions to the websocket: 

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
VOD upload is another major feature of Fidget. To accomodate user upload of VOD, Fidget makes use of Amazon S3 storage. User can upload and store vods, which are then are accessible through their channels. Users can watch VODs uploaded by a channel and chat at the same time.


![alt text](https://i.ibb.co/3Y5PGm7/readme-Img.png "Example Channel")



## Coming soon -- Live Streaming


