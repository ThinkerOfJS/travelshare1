import Vue from 'vue';
import moment from 'moment';
// YYYY-MM-DD HH:mm:ss 为格式化后的时间格式
Vue.filter('dateFormat', function (dataStr, pattern = "MM-DD HH:mm") {
    return moment(dataStr).format(pattern);
});