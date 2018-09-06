import moment from 'moment';
import { message } from 'antd';
import { QINIU_DOMAIN } from '../config';

export function fixedZero(val) {
    return val * 1 < 10 ? `0${val}` : val;
}

export function getTimeDistance(type) {
    const now = new Date();
    const oneDay = 1000 * 60 * 60 * 24;

    if (type === 'today') {
        now.setHours(0);
        now.setMinutes(0);
        now.setSeconds(0);
        return [moment(now), moment(now.getTime() + (oneDay - 1000))];
    }

    if (type === 'week') {
        let day = now.getDay();
        now.setHours(0);
        now.setMinutes(0);
        now.setSeconds(0);

        if (day === 0) {
            day = 6;
        } else {
            day -= 1;
        }

        const beginTime = now.getTime() - (day * oneDay);

        return [moment(beginTime), moment(beginTime + ((7 * oneDay) - 1000))];
    }

    if (type === 'month') {
        const year = now.getFullYear();
        const month = now.getMonth();
        const nextDate = moment(now).add(1, 'months');
        const nextYear = nextDate.year();
        const nextMonth = nextDate.month();

        return [moment(`${year}-${fixedZero(month + 1)}-01 00:00:00`), moment(moment(`${nextYear}-${fixedZero(nextMonth + 1)}-01 00:00:00`).valueOf() - 1000)];
    }

    if (type === 'year') {
        const year = now.getFullYear();

        return [moment(`${year}-01-01 00:00:00`), moment(`${year}-12-31 23:59:59`)];
    }
}

export function getPlainNode(nodeList, parentPath = '') {
    const arr = [];
    nodeList.forEach((node) => {
        const item = node;
        item.path = `${parentPath}/${item.path || ''}`.replace(/\/+/g, '/');
        item.exact = true;
        if (item.children && !item.component) {
            arr.push(...getPlainNode(item.children, item.path));
        } else {
            if (item.children && item.component) {
                item.exact = false;
            }
            arr.push(item);
        }
    });
    return arr;
}

export function digitUppercase(n) {
    const fraction = ['角', '分'];
    const digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
    const unit = [
        ['元', '万', '亿'],
        ['', '拾', '佰', '仟'],
    ];
    let num = Math.abs(n);
    let s = '';
    fraction.forEach((item, index) => {
        s += (digit[Math.floor(num * 10 * (10 ** index)) % 10] + item).replace(/零./, '');
    });
    s = s || '整';
    num = Math.floor(num);
    for (let i = 0; i < unit[0].length && num > 0; i += 1) {
        let p = '';
        for (let j = 0; j < unit[1].length && num > 0; j += 1) {
            p = digit[num % 10] + unit[1][j] + p;
            num = Math.floor(num / 10);
        }
        s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
    }

    return s.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零').replace(/^整$/, '零元整');
}

function getRelation(str1, str2) {
    if (str1 === str2) {
    console.warn('Two path are equal!');  // eslint-disable-line
    }
    const arr1 = str1.split('/');
    const arr2 = str2.split('/');
    if (arr2.every((item, index) => item === arr1[index])) {
        return 1;
    } else if (arr1.every((item, index) => item === arr2[index])) {
        return 2;
    }
    return 3;
}

export function getRoutes(path, routerData) {
    let routes = Object.keys(routerData).filter(routePath =>
        routePath.indexOf(path) === 0 && routePath !== path);
    routes = routes.map(item => item.replace(path, ''));
    let renderArr = [];
    renderArr.push(routes[0]);
    for (let i = 1; i < routes.length; i += 1) {
        let isAdd = false;
        isAdd = renderArr.every(item => getRelation(item, routes[i]) === 3);
        renderArr = renderArr.filter(item => getRelation(item, routes[i]) !== 1);
        if (isAdd) {
            renderArr.push(routes[i]);
        }
    }
    const renderRoutes = renderArr.map((item) => {
        const exact = !routes.some(route => route !== item && getRelation(route, item) === 1);
        return {
            key: `${path}${item}`,
            path: `${path}${item}`,
            component: routerData[`${path}${item}`].component,
            exact,
        };
    });
    return renderRoutes;
}

export function dateFormat(date = new Date(), fmt = 'yyyy-MM-dd hh:mm:ss') {
    const o = {
        'M+': date.getMonth() + 1, // 月份
        'd+': date.getDate(), // 日
        'h+': date.getHours(), // 小时
        'm+': date.getMinutes(), // 分
        's+': date.getSeconds(), // 秒
        'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
        S: date.getMilliseconds(), // 毫秒
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (`${date.getFullYear()}`).substr(4 - RegExp.$1.length));
    }
    for (const k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : ((`00${o[k]}`).substr((`${o[k]}`).length)));
        }
    }
    return fmt;
}

export function strToBase64(str) {
    const buffer = Buffer.from(str);
    return buffer.toString('base64');
}

export function base64ToStr(base64) {
    return Buffer.from(base64).toString();
}

export function getItemFromArr(arr, key, val) {
    if (arr) {
        for (let index = 0; index < arr.length; index += 1) {
            if (arr[index][key] === val) {
                return arr[index];
            }
        }
    }
    return null;
}

export function getGoodsTypeColorImg(goodsTypeId, fileName) {
    if (fileName) {
        if (fileName.startsWith('http')) return fileName;
        return `${QINIU_DOMAIN}/goodsType/${goodsTypeId}/${fileName}`;
    }
    return null;
    // return `http://192.168.31.200/imgs/goods/${goodsTypeId}/${colorId}/${colorId}.jpg`;
}

// 获取商品主图的url
// export function getGoodsTypeImg(goodsTypeId) {
//     return `${QINIU_DOMAIN}/goodsType/${goodsTypeId}/${goodsTypeId}_0.jpg`;
//     // return `http://192.168.31.200/imgs/goods/${goodsTypeId}/${goodsTypeId}.jpg`;
// }

// 获取商品副图的url
export function getGoodsTypeImgByIndex(goodsTypeId, index) {
    return `${QINIU_DOMAIN}/goodsType/${goodsTypeId}/${goodsTypeId}_${index}.jpg`;
}

export function getGoodsImg(goodsId) {
    return `${QINIU_DOMAIN}/goods/${goodsId}/${goodsId}.jpg`;
}

export function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

export function beforeUpload(file) {
    const isJPG = file.type === 'image/jpeg';
    if (!isJPG) {
        message.error('只能上传jpg!!!');
    }
    const isLt2M = file.size / 1024 / 1024 < 1;
    if (!isLt2M) {
        message.error('图片体积太大了，优化一下先！！！');
    }
    return isJPG && isLt2M;
}

// export function checkImgExists(imgurl) {
//     const ImgObj = new Image();
//     ImgObj.src = imgurl;
//     // console.log(imgurl);
//     // console.log(ImgObj.fileSize);
//     // console.log(ImgObj.width);
//     // console.log(ImgObj.height);
//     // console.log('=========');
//     return ImgObj.fileSize > 0 || (ImgObj.width > 0 && ImgObj.height > 0);
// }
