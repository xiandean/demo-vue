import jsonp from './jsonp'
import user from './user'

export default {
    async getConfig() {
        let res = await jsonp({
            url: 'http://o.gd.sina.com.cn/market/c/gd/weixinjsapi/index.php',
            data: {
                url: window.location.href.split('#')[0]
            }
        })
        // console.log(res)
        wx.config({
            debug: false,
            appId: res.data.appId,
            timestamp: res.data.timestamp,
            nonceStr: res.data.nonceStr,
            signature: res.data.signature,
            jsApiList: [
                'onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ'
            ]
        })

        return new Promise((resolve, reject) => {
            wx.ready(() => {
                resolve()
            })
        })
    },

    setShare({ title, desc, link, imgUrl, callback } = {}) {
        const config = {
            title: title,
            link: link || location.href,
            desc: desc,
            imgUrl: imgUrl,
            success(res) {
                if (callback) {
                    callback()
                }
            },
            cancel(res) {
                console.log(res)
            }
        }
        // 分享朋友圈
        wx.onMenuShareTimeline(config)

        // 分享盆友
        wx.onMenuShareAppMessage(config)

        wx.onMenuShareQQ(config)
    },
    setCookie (cname, cvalue, exdays) {
        let d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = 'expires=' + d.toGMTString();
        document.cookie = cname + '=' + cvalue + '; ' + expires;
    },
    getCookie(cname) {
        let name = cname + '=';
        let ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i].trim();
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return '';
    },

    async getOpenid() {
        let cookie = this.getCookie('ssoWxOpenid')
        if (cookie) {
            user.openid = cookie
            // this.setCookie('sso_openid', '', -1)
            localStorage.setItem('user_openid_2020', user.openid)
        } else if (localStorage.getItem('user_openid_2020')) {
            user.openid = localStorage.getItem('user_openid_2020')
        } else {
            let url = window.location.href;
            let link = url.split('?')[0];
            url = url.replace(link, '');
            window.location.href = `http://interface.gd.sina.com.cn/wbwx/gdwx2019v1/wxcode${url}`;
            return Promise.reject('error: no openid')
        }
        return user.openid
    },

    async getUserInfo(uid = user.openid) {
        let openid = uid;
        if (!openid) {
            openid = await this.getOpenid()
        }
        let res = await jsonp({
            url: 'http://interface.gd.sina.com.cn/wbwx/gdwx2019v1/c_member/',
            data: {
                openid
            }
        })
        if (res.error === 10000) {
            user.nickname = res.data.nickname
            user.avatar = res.data.headimgurl
        }
        return user
    }
}