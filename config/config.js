let env ="local"
let ServerIP = ""
const API_PATH_LIVE = 'http://172.17.201.193:3000/'
const API_PATH_UAT = 'http://172.17.201.193:3000/'
const API_PATH_LOCAL = 'http://172.17.201.193:3000/'
  switch (env){
    case "local":
      ServerIP = API_PATH_LOCAL
    break

    case "uat":
      ServerIP = API_PATH_LOCAL
    break

    case "live":
      ServerIP = API_PATH_LIVE
    break

    default :
    ServerIP = API_PATH_LOCAL

  }
const LINK_API1 = "mongo/demo01";
const LINK_API2 = "mongo/demo02";
const LINK_API3 = "mongo/demo03";




module.exports = {
  ServerIP,
  LINK_API1,
  LINK_API2,
  LINK_API3,
}