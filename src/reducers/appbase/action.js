import * as appbaseconfig from './action-type';

// 保存基本信息
export const setBaseConfig = (obj) => {
  return {
    type: appbaseconfig.SET_BASE_CONFIG,
    ...obj
  }
}

// 保存桌子列表
export const setGamesList = (obj) => {
  return {
    type: appbaseconfig.SET_GAME_LIST,
    ...obj
  }
}


// setcount
export const setChipList = (arr) => {
  return {
    type: appbaseconfig.SET_CHIP_LIST,
    chiplist: arr
  }
}

