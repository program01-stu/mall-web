import {request} from "./request";

export function getAllPhones() {
  return request({
    url: '/example1-1.0-SNAPSHOT/show/showAllPhones'
  })
}

export function getAllElectrical() {
  return request({
    url: '/example1-1.0-SNAPSHOT/show/showAllElectrical'
  })
}
export function getAllNotebook() {
  return request({
    url: '/example1-1.0-SNAPSHOT/show/showAllNotebook'
  })
}
export function getAllOutdoor() {
  return request({
    url: '/example1-1.0-SNAPSHOT/show/showAllOutdoor'
  })
}
export function getAllIntelligence() {
  return request({
    url: '/example1-1.0-SNAPSHOT/show/showAllIntelligence'
  })
}
export function getAllPowerSupply() {
  return request({
    url: '/example1-1.0-SNAPSHOT/show/showAllPower_supply'
  })
}
export function getAllHeadset() {
  return request({
    url: '/example1-1.0-SNAPSHOT/show/showAllHeadset'
  })
}
export function getAllLive() {
  return request({
    url: '/example1-1.0-SNAPSHOT/show/showAllLive'
  })
}
export function getAllHealthy() {
  return request({
    url: '/example1-1.0-SNAPSHOT/show/showAllHealthy'
  })
}
// export function getHomeGoods(type, page) {
//   return request({
//     url: '/home/data',
//     params: {
//       type,
//       page
//     }
//   })
// }
