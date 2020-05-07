export const getFollowedChannels = (channels, currentUser) => {
    let followedChannels = []
    let follows = [];
    if (currentUser) {
        follows = currentUser.follows
        for (const key in channels) {
            if (follows.indexOf(Number(key)) !== -1){
                followedChannels.push(channels[key])
            }
        }
    }
    
    return followedChannels
    
}