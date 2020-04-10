import ajax from './ajax'

const BASE_URL = '/api';

// 用户模块
export const loginPwd = (username, password) => ajax(BASE_URL + '/user/login',{ username, password }, 'POST'); //登录
export const register = (username, password) => ajax(BASE_URL + '/user/register', {username, password}, 'POST'); // 注册
export const forgotPwd = (username, password) => ajax(BASE_URL + '/user/forgot', {username, password}, 'POST'); // 忘记密码
export const changeUserInfo = (nickname, email, phone, introduction, avatarsrc) => ajax(BASE_URL + '/user/change', {username, password}, 'POST'); // 忘记密码
export const getUserInfo = (username) => ajax(BASE_URL + '/user/getuser', {username}, 'GET');
export const getUserInfoByUid = (uid) => ajax(BASE_URL + '/user/userinfo', {uid}, 'GET');
// 游记模块
export const getHotTravels = () => ajax(BASE_URL + '/travels/concentration', {}, 'GET');
export const getNotice = () => ajax(BASE_URL + '/announcement/list', {}, 'GET');

export const getTypeTravels = (tpid, start, end) => ajax(BASE_URL + '/travels/travelstype', {tpid,  start, end}, 'POST');

export const getTravelsDetail = (tid) => ajax(BASE_URL + '/travels/detail', {tid}, 'GET');
export const getComment = (tid, start, end) => ajax(BASE_URL + '/travels/getcomment', {tid, start, end}, 'POST');
export const getUserTravels = (uid, start, end) => ajax(BASE_URL + '/travels/usertravels', {uid, start, end}, 'POST');
export const getUserCollection = (uid, start, end) => ajax(BASE_URL + '/travels/usercollection', {uid, start, end}, 'POST');
export const addComment = (content, nickname, tid,uid) => ajax(BASE_URL + '/travels/addcomment', {content, nickname, tid,uid}, 'POST');
export const addCollection = (tid, uid) => ajax(BASE_URL + '/travels/addcollection', {tid, uid}, 'POST');

export const addTravels = (param) => ajax(BASE_URL + '/travels/add', param, 'GET');
export const searchTravels = (title) => ajax(BASE_URL + '/travels/search', {title}, 'GET');

// 景区门票模块
export const getDayPlay = (did) => ajax(BASE_URL + '/scenicspot/dayplay', {did}, 'GET');
export const getAttractions = (sid) => ajax(BASE_URL + '/scenicspot/attractions', {sid}, 'GET');
export const getScenicspotDetail = (sid) => ajax(BASE_URL + '/scenicspot/detail', {sid}, 'GET');
export const getScenicspotTicket = (sid) => ajax(BASE_URL + '/scenicspot/sceticket', {sid}, 'GET');
export const searchScenicspot = (title) => ajax(BASE_URL + '/scenicspot/search', {title}, 'GET');
export const getHotScenicspot = (start, end) => ajax(BASE_URL + '/scenicspot/hot', {start, end}, 'POST');


export const addOrder = (oprice, coname, cphone, uid, sname, orderDetList) => ajax(BASE_URL + '/order/add', {oprice, coname, cphone, uid, sname, orderDetList}, 'POST');
export const getOrderList = (uid, start, end) => ajax(BASE_URL + '/order/list', {uid, start, end}, 'POST');
export const getOrderDetList = (ordernumber) => ajax(BASE_URL + '/order/detlist', {ordernumber}, 'GET');

export const getContact = (uid) => ajax(BASE_URL + '/contact/list', {uid}, 'GET');
export const changeContact = (coid, coname, cphone) => ajax(BASE_URL + '/contact/change', {coid, coname, cphone}, 'POST');
export const addContact = (uid, coname, cphone) => ajax(BASE_URL + '/contact/add', {uid, coname, cphone}, 'POST');
export const delContact = (coid) => ajax(BASE_URL + '/contact/delete', {coid}, 'GET');


