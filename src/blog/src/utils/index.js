/*
 * @Author: Pi Patle
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2021-09-23 14:56:20
 * @LastEditors: Pi Patle
 * @LastEditTime: 2021-10-21 11:53:52
 */
export function environment_variable(){
  let data = {}
  console.log(process.env.NODE_ENV)
  switch (process.env.NODE_ENV) {
    case 'production':
      // data.url = 'static/'
      data.url = 'https://pi-1258780943.cos.ap-hongkong.myqcloud.com/blog/'
      break;
    case 'development':
      // data.url = 'static/'
      data.url = 'https://pi-1258780943.cos.ap-hongkong.myqcloud.com/blog/'
      break;
    case 'dev':
      data.url = 'https://pi-1258780943.cos.ap-hongkong.myqcloud.com/blog/'
      break;
  }
  return data
}