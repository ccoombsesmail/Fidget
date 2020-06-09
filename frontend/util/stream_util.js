export const JOIN_CALL = 'JOIN_CALL'
export const BROADCAST = 'BROADCAST'
export const OFFER = 'OFFER'
export const ANSWER = 'ANSWER'
export const CANDIDATE = 'CANDIDATE'
export const WATCHER = 'WATCHER'
export const PEER_DISCONNECT = 'PEER_DISCONNECT'
export const EXCHANGE = 'EXCHANGE'
export const LEAVE_CALL = 'LEAVE_CALL'


export const ice = {
  iceServers: [
    {
      urls: 'stun:stun2.l.google.com:19302',
    },
  ],
}

export const broadcastData = (data) => {
  fetch('api/streams', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'content-type': 'application/json' },
  },
  )
}
