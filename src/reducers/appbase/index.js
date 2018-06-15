import * as beseconfig from './action-type';

let defaultState = {
  isFirstLoadGames: true,   //是否第一次加载游戏桌子数据
  isVipRoomList: false,     //是否进入VIP房间
  currentBaseSignalr: 'c6ce54cd-69de-4ca9-b108-95df6ccbb8d9',   //华纳桌子
  hubRegGroup: ["c6ce54cd-69de-4ca9-b108-95df6ccbb8d9","ea2ead41-9c9a-49ee-913b-148669b3c486"],
  gameslist: [],
  showCZModule: false,    //是否显示充值弹窗
  showTXModule: false,    //是否显示提现弹窗

  countTotal: 0,


  isPlayVideo: true,     //是否自动开启视频
  isPlaySound: true,     //是否自动开启声音
  chiplist: [],
}

// 基础信息
export const beseConfig = (state = defaultState , action = {}) => {
  let {type, ...obj} = action;
  switch(type){
    case beseconfig.SET_BASE_CONFIG:
      return {...state, ...obj};
    case beseconfig.SET_GAME_LIST:
      return {...state, ...obj};
    case beseconfig.SET_CHIP_LIST:
      return {...state, ...{chiplist: obj.chiplist}};
    default:
      return state;
  }
}