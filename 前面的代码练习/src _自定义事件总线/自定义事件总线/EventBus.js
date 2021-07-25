(function (window) {
  //定义事件总线对象
  const EventBus = {};
  //定义容器对象，用来存储事件名字及对应的事件回调函数---{'add':[f1,f2,f3],'del':[f4,f5,f6]}
  let listenersContainer = {};
  //绑定事件
  EventBus.on = function (eventName, listener) {
    //根据事件名字通过容器对象查找该事件对应的数组数据
    let listeners = listenersContainer[eventName];
    //判断该数组是否存在
    if (!listeners) {
      //如果该数据不存在，第一次调用on方法绑定事件，传入回调
      listeners = [];
      //把事件名字作为键，数组作为值，把这对键值存储到大的容器对象中
      listenersContainer[eventName] = listeners;
    }
    //把回调函数添加到对应的数组中（无论是不是第一次绑定事件，都会这么做）
    listeners.push(listener);
  };
  //分发事件
  EventBus.emit = function (eventName, data) {
    //大容器中:{'add':[f1,f2,f3],'del':[f4,f5,f6]}
    //根据事件名字在大容器对象中找到对应的回调函数数组
    let listeners = listenersContainer[eventName];
    //判断存储回调函数的数组是否存在
    if (listeners && listeners.length > 0) {
      //遍历数组中回调函数，传入参数并调用
      listeners.forEach((listener) => {
        listener(data);
      });
    }
  };
  //解绑事件
  EventBus.off = function (eventName) {
    //解绑事件可以传入事件名字进行解绑，也可以什么都不传入解绑事件

    //什么也不传入，那就是干掉所有的事件
    if (typeof eventName === 'undefined') {
      listenersContainer = {};
    } else {
      //传入事件名字，那就是干掉该事件对应的所有的回调函数
      //大容器中:{'add':[f1,f2,f3],'del':[f4,f5,f6]}
      delete listenersContainer[eventName];
      //或者
      //listenersContainer = {};
    }
  };
  //暴露事件总线对象
  window.EventBus = EventBus;
})(window);
