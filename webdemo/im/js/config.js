(function() {
  // 配置
  var envir = 'online';
  var configMap = {
    dev: {
      appkey: '96e9d4dbb5fe6ac7fcc0a267f2c9843f',
      url: 'https://apptest.netease.im',
      chatroomList: 'https://apptest.netease.im/api/chatroom/homeList',
      chatroomAddr: 'https://apptest.netease.im/api/chatroom/requestAddress'
    },
    test: {
      appkey: '96e9d4dbb5fe6ac7fcc0a267f2c9843f',
      url: 'https://apptest.netease.im',
      chatroomList: 'https://apptest.netease.im/api/chatroom/homeList',
      chatroomAddr: 'https://apptest.netease.im/api/chatroom/requestAddress'
    },
    pre: {
      appkey: '96e9d4dbb5fe6ac7fcc0a267f2c9843f',
      url: 'https://apptest.netease.im',
      chatroomList: 'https://apptest.netease.im/api/chatroom/homeList',
      chatroomAddr: 'https://apptest.netease.im/api/chatroom/requestAddress'
    },
    online: {
      appkey: '96e9d4dbb5fe6ac7fcc0a267f2c9843f',
      url: 'https://app.netease.im',
      chatroomList: 'https://app.netease.im/api/chatroom/homeList',
      chatroomAddr: 'https://app.netease.im/api/chatroom/requestAddress'
    }
  };
  window.CONFIG = configMap[envir];
  // 是否开启订阅服务
  window.CONFIG.openSubscription = true;
  //   window.CONFIG.privateConf = window.privateConf;
})();
