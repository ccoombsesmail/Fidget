import * as VodAPIUtil from '../util/vod_api_util'
export const RECEIVE_VOD = "RECEIVE_VOD"
export const RECEIVE_VODS = "RECEIVE_VODS"
export const CLEAR_VODS = "CLEAR_VODS"
export const RECEIVE_RANDOM_VODS = "RECEIVE_RANDOM_VODS"


const receiveVod = (vod) => {
  return {
    type: RECEIVE_VOD,
    vod,
  }
}


const receiveVods = (payload) => {
  return {
    type: RECEIVE_VODS,
    payload,
  }
}

const receiveRandomVods = (payload) => {
  return {
    type: RECEIVE_RANDOM_VODS,
    payload,
  }
}

export const clearVods = () => {
  return {
    type: CLEAR_VODS,
  }
}


export const requestVod = (vodId) => (dispatch) => {
  return VodAPIUtil.fetchVod(vodId)
    .then((vod) => dispatch(receiveVod(vod)))
}


export const requestVods = (filter) => (dispatch) => {
  return VodAPIUtil.fetchVods(filter)
    .then((vods) => dispatch(receiveVods(vods)))
}

export const requestRandomVods = (filter) => (dispatch) => {
  return VodAPIUtil.fetchVods(filter)
    .then((vods) => dispatch(receiveRandomVods(vods)))
}

export const createVod = (formData) => (dispatch) => {
  return VodAPIUtil.postVod(formData)
    .then((vod) => dispatch(receiveVod(vod)))
    .fail((err) => console.log(err))
}
