/*
 * @Author: ztl
 * @Date: 2020-12-22 11:12:30
 * @LastEditTime: 2021-02-23 10:55:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hiyan_uniapp_behavioranalysis_user\config\api.js
 */

const mode = 'dev';   // 测试开发模式: 'dev',  真实线上生产模式: 'pro'
const devBaseUrl = 'http://127.0.0.1:8080';    // 测试开发环境地址 
const proBaseUrl = '';   // 真实线上生产环境地址
const baseUrl = mode === 'dev' ? devBaseUrl : proBaseUrl;

export {
	baseUrl,
}
