const axios = require("axios");

const URL = 'http://192.168.200.103/zyzx/public/index.php'

class RouterController {

    static async getEnrollDataList(ctx) {
        const input = ctx.request.body
        console.log(input)
        const params = new URLSearchParams();
        params.append("page", input.page)
        params.append("rows", input.rows)
        params.append("sort", input.sort)
        params.append("order", input.order)

        console.log(input.sjnf)
        params.append("sjnf", input.sjnf)
        params.append("pcdm_str", input.pcdm)
        params.append("ssdm_str", input.ssdm)
        params.append("zyzdm_str", input.zyzdm)
        params.append("yxdm_str", input.yxdm)

        console.log(params)
        const response = await axios.post(URL + "/admin/Enrolldata/getEnrollDataList", params);
        ctx.body = {
            code: 200,
            data: response.data,
            msg: "success"
        }
    }

    static async login(ctx) {
        const input = ctx.request.body
        const params = new URLSearchParams();
        params.append("username", input.username)
        params.append("password", input.password)
        const response = await axios.post(URL + "/admin/Login/login", params);
        if (response.data.code !== 1) {
            ctx.body = {
                code: 400,
                data: '',
                msg: response.data.msg
            }
        } else {
            ctx.body = {
                code: 200,
                data: {
                    token: input.username,
                    uuid: '111222333',
                    name: input.username
                },
                msg: response.data.msg
            }
        }
    }

    static async getYxdmSelect(ctx) {
        // await innerLogin()
        const response = await axios.post(URL + '/admin/Enrolldata/getYxdmSelect');
        ctx.body = {
            code: 200,
            data: response.data,
            msg: "success"
        }
    }

    static async getSsdmSelect(ctx) {
        const response = await axios.post(URL + '/admin/Provinces/getSsdmSelect');
        ctx.body = {
            code: 200,
            data: response.data,
            msg: "success"
        }
    }

    static async getSjnfSelect(ctx) {
        const response = await axios.post(URL + '/admin/System/getSjnfSelect');
        ctx.body = {
            code: 200,
            data: response.data,
            msg: "success"
        }
    }

    static async getPrevPcdmSelect(ctx) {
        const response = await axios.post(URL + '/admin/Pcdm/getPrevPcdmSelect');
        ctx.body = {
            code: 200,
            data: response.data,
            msg: "success"
        }
    }

    static async getZyzdmSelect(ctx) {
        const response = await axios.post(URL + '/admin/Zyzdm/getZyzdmSelect');
        ctx.body = {
            code: 200,
            data: response.data,
            msg: "success"
        }
    }

}

async function innerLogin() {
    const params = new URLSearchParams();
    params.append("username", 'admin')
    params.append("password", 'admin123')
    const response = await axios.post(URL + "/admin/Login/login", params, {withCredentials: true});
    console.log(response.data)
}

module.exports = RouterController