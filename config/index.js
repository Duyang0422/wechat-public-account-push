export const config = {
  /**
   * 公众号配置
   */

  // 公众号APP_ID
  // 建议不要填这里，请使用文档中github secret的方法进行保密配置，保护您的隐私安全。
  // 如果你非要填这里也行。脚本也能运行
  APP_ID: "wx42732f10d3a7fd6c",

  // 公众号APP_SECRET
  // 建议不要填这里，请使用文档中github secret的方法进行保密配置，保护您的隐私安全。
  // 如果你非要填这里也行。脚本也能运行
  APP_SECRET: "1d05ec4e5e1e15ecaa896a6a4318cf90",

  /**
   * 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如
   * [
   *  {
   *    // 想要发送的人的名字
   *    name: "老婆0",
   *    // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
   *    id: "ohxOO6VskYv0Kuf-ywIZVRMpuXhk",
   *    // 你想对他发送的模板消息的模板ID
   *    useTemplateId: "zjVglIuCXo4CsraXWEio1iP7sZJ7IQEES9lDsgc4yOU",
   *    // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
   *    openUrl: "https://wangxinleo.cn"
   *   },
   * ]
   */
  USERS: [
    {
      // 想要发送的人的名字
      name: "杨桑0",
      // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "oLxQU6RzMB-RFS2UAPGGfnRs_pJc",
      // 你想对他发送的模板消息的模板ID
      useTemplateId: "TQYJ-nqbAaNy6ZGbLw3IP-neufbN3WUQYxZPPMVenjU",
      // 
      province: "陕西",
      //
      city: "咸阳",
      // 新历生日, 仅用作获取星座运势, 格式必须
      horoscopeDate: '06-20',
      // 获取什么时候的星座运势，可选：['今日', '明日', '本周', '本月', '今年'], 留空则随机
      horoscopeDateType: '今日',
      // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
      openUrl: "https://s.weibo.com/top/summary?cate=realtimehot",
      // 专属节日提醒，如果你在这里填写了节日提醒，就不会执行FESTIVALS的提醒了, 和FESTIVALS的配置方法相同，可以往下查看，我这里就不重复写了
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {"type": "*生日", "杨": "牛马", "year": "2003", "date": "06-20"},
        {"type": "节日", "咱": "认识", "year": "2019", "date": "09-05"},
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {"type": "生日", "杜": "帅比", "year": "2002", "date": "04-22"},
        {"type": "节日", "小牛马": "最近时间", "year": "2022", "date": "09-09"},
      ],
      // 专属纪念日/倒数日，如果你在这里填写了纪念日/倒数日，就不会计算CUSTOMIZED_DATE_LIST的日子了, 和CUSTOMIZED_DATE_LIST的配置方法相同，可以往下查看，我这里就不重复写了
      customizedDateList: [
        // 在一起的日子
        {"keyword": "love_day", date: "2022-09-08"},
        // 结婚纪念日
        {"keyword": "marry_day", date: "2022-09-09"},
        // 退伍日
        {"keyword": "ex_day", date: "2022-09-10"},
      ]
    },
    {
      name: "杜阳",
      id: "oLxQU6Zj09qkeo24sMucA55i46T8",
      useTemplateId: "H2ojKE5g4_KWDpZNJIPtUi0KYJ9-1h4iAgmQecgwbyc",
      province: "陕西",
      city: "宝鸡",
      horoscopeDate: '04-22',
      horoscopeDateType: '今日',
      openUrl: "https://www.cgjoy.com/forum.php?mod=forumdisplay&fid=23&filter=typeid&typeid=956#hot_map",
      festivals: [],
      customizedDateList: []
    },
    {
      name: "小贺",
      id: "oLxQU6Sez8l92MNnN9RsliiB6Egw",
      useTemplateId: "91rwy18dSvQvwL9AErYfued5eM-F2XLPTupiDsMJCTs",
      province: "河南",
      city: "郑州",
      horoscopeDate: '12-24',
      horoscopeDateType: '今日',
      openUrl: "https://s.weibo.com/top/summary?cate=realtimehot",
      festivals: [],
      customizedDateList: []
    },
    {
      name: "石玉米",
      id: "oLxQU6Z5S2gVlwGtIgYlJs-0GuuQ",
      useTemplateId: "rc0ZDpaLmFmx4-0ULNsLY3R99h8867GPGoLyD_5svqM",
      province: "陕西",
      city: "杨凌",
      horoscopeDate: '12-05',
      horoscopeDateType: '今日',
      openUrl: "https://s.weibo.com/top/summary?cate=realtimehot",
      festivals: [],
      customizedDateList: []
       },
    {
      name: "王八雨同学",
      id: "oLxQU6T6bKyc14tFRTo01T1hLTVo",
      useTemplateId: "mZM97_njtU0LFBnUVINS34ml7_QJG_Uzi5n9LsaSsi8",
      province: "山东",
      city: "临沂",
      horoscopeDate: '07-21',
      horoscopeDateType: '今日',
      openUrl: "https://s.weibo.com/top/summary?cate=realtimehot",
      festivals: [],
      customizedDateList: []
       },
    {
      name: "莫小雪",
      id: "oLxQU6fsEDnEM1G0b4N46slVpfOw",
      useTemplateId: "UfyL4hbF-R66GT6Wnmdu2g3y_Oo8rMifrGv3sP6LkNQ",
      province: "陕西",
      city: "西安",
      horoscopeDate: '11-28',
      horoscopeDateType: '今日',
      openUrl: "https://s.weibo.com/top/summary?cate=realtimehot",
      festivals: [],
      customizedDateList: []
       },
  ],

  /**
   * 【推送完成提醒】 相关，主要用来展示发送是否成功/失败的数据
   */

  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: "43Jqe_1Q3yK7EqgrNWeHM2OKWsN1knSY0qvBgeweD64",

  // 接收成功回调消息的微信号，（一般来说只填自己的微信号, name填不填无所谓）
  CALLBACK_USERS: [
    {
      // 一般都填自己
      name: "自己",
      // 自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "oLxQU6Zj09qkeo24sMucA55i46T8",
    },
  ],

  /**
   * 信息配置
   */

  /** 天气相关 */

  // 默认所在省份, USERS 中没填的话, 会默认拿这里的省份
  PROVINCE: "陕西",
  // 默认所在城市, USERS 中没填的话, 会默认拿这里的城市
  CITY: "宝鸡",

  /** 重要节日相关 */

  /**
   * 重要节日，修改名字为对应需要显示的名字, date 仅填月日即可, 请严格按照示例填写
   * type必须填！ 只能 “生日” 和 “节日” 二选一!
   * --- 阴历配置开始 ---
   * 如果日期使用阴历，请在 “生日” 或 "节日“ 前添加 * 符号
   * --- 阴历配置结束 ---
   * 生日时，name填写想要展示的名字，你可以填“美丽可爱亲亲老婆”
   * 节日时，name填写相应展示的节日，你可以填“被搭讪纪念日”
   */
  FESTIVALS: [
    // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
    {"type": "*生日", "name": "老婆", "year": "1996", "date": "09-09"},
    {"type": "节日", "name": "结婚纪念日", "year": "2020", "date": "09-03"},
    // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
    {"type": "生日", "name": "李四", "year": "1996", "date": "09-31"},
    {"type": "节日", "name": "被搭讪纪念日", "year": "2021", "date": "09-01"},
  ],

  /**
   * 限制重要节日的展示条目, 需要填写数字;
   * 如果为3, 则仅展示“将要到达” 的3个重要节日提醒，剩下的将被忽略
   * 如果为0, 则默认展示全部
   */
  FESTIVALS_LIMIT: 4,

  /** 日期相关 */

  /** 你现在可以随心增加你认为的所有的需要纪念的日子啦！
    * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
    * 比如：keyword: "love_date" ，在测试号中就是 {{ love_date.DATA }}
    * */
  CUSTOMIZED_DATE_LIST: [
    // 在一起的日子
    {"keyword": "love_day", date: "2022-09-08"},
    // 结婚纪念日
    {"keyword": "marry_day", date: "2022-09-09"},
    // 退伍日
    {"keyword": "ex_day", date: "2022-09-10"},
    // sakana日
    // {"keyword": "sakana_day", date: "2022-01-06"},
    // ...
  ],

  /** 插槽 */

  /** 你可以在这里写超多的你想显示的内容了！
    * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
    * 比如：keyword: "lover_prattle" ，在测试号中就是 {{ lover_prattle.DATA }}
    * */
  SLOT_LIST: [
    // 这样配置的话，就会每次发送这句话
    {"keyword": "encourage_oneself", contents: "永远热泪盈眶，永远积极向上"},
    // 这样配置的话，就会每次随机选一句话发送
    {"keyword": "lover_prattle", contents: [
      "寒来暑往秋收冬藏，希望我们来日方长",
      "万里星光 一如既往",
      "慢慢来，谁还没有一个努力得过程",
      "可以不万丈光芒，但不要停止自己发光",
      "你坚持的东西总有一天会反过来拥抱你",
      "山前山后都有风景有风无风都很自由",
      "热爱漫无边际生活自有分寸",
      "所有的惊艳都曾被平凡历练",
      "别人家屋檐再大都不如自己有把雨伞",
      "请努力向上，成为别人眼中遥不可及的光",
      "生命中所有的不期而遇都是你努力的惊喜",
      "人生的路程就像爬山一样，看起来走了许多冤枉的路，但最终都会到达山顶",
      "当你的能力还驾驭不了你的目标时那你就应该沉下心来历练",
      "去成为自己心中的那个理想的大人.",
      "变好的过程都不太舒服，试试再努力点",
      "任何的限制都是从自己的内心开始的",
      "待到顶峰相见，你我都能热笑相迎",
      "远在远方的风比远方更远",
      "相信所有的汗水与眼泪，最后会化成一篇山花烂漫",
      "你坚持的东西，总有一天会反过来拥抱你",
      "要平安健康的长大，也望肆意潇洒",
      "别再最好的年纪辜负了最好的自己",
    ]},
  ],

  /** 每日一言 */

  // 好文节选的内容类型
  // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
  LITERARY_PREFERENCE: "https://s.weibo.com/top/summary?cate=realtimehot"


}
