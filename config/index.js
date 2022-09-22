export const config = {
    // 公众号配置
    // 公众号appId
    appId: "wx49877e2e642ef4cb",
    // 公众号appSecret
    appSecret: "fa008cabb4193140f9b2d3a33d68063d",
    // 模板消息id
    templateId: "EEekncNruhzFCthBhsZ5e96eyOA7NgfN-enx38nNKsI",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    user: ["ouw9d5jFH98rZ4YssIVTrLFBqN1o","ouw9d5lqqG_F1FMQBN2vAL5iZHuI"],
     
    // 信息配置
    ewai: "   ",
    // 所在省份
    province: "山东",
    // 所在城市
    city: "济南",
    // 生日，修改名字为对应需要显示的名字，如果生日为农历， type为 r
    birthdays: [
      {"name": "冰冰", "year": "2002", "date": "05-29", "type": 'new'},
      {"name": "昱昱", "year": "2001", "date": "12-26", "type": 'new'},
    ],
    // 在一起的日子，格式同上
    loveDate: "2022-07-27",
    
//城市：{{city.DATA}}  
//天气：{{weather.DATA}}  
//最低气温: {{min_temperature.DATA}}  
//最高气温: {{max_temperature.DATA}}  
//今天是我们恋爱的第{{love_day.DATA}}天
// 
 //{{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
