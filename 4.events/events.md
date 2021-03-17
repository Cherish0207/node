## 核心模块 2:事件模块 events

发布订阅 事件驱动 事件通知 发布订阅模式
node 中自己实现了一个发布订阅

发布订阅中应该有的方法
on emit off once newlistener
(好处:可以实现解耦合)

## 观察者模式&发布订阅模式

### 观察者模式:

- 有两个类,一个是观察者，一个是被观察者
- 观察者会被存到被观察者中
- 观察者模式是包含发布订阅的:
  - 如果被观察者状态变化,会主动通知观察者,调用观察者的更新方法

### 发布订阅模式:

- 发布和订阅之间，一个负责发布，一个负责订阅，二者没有关联，只是靠一个对象来维持二者的关联

观察者模式和发布订阅的场景区分

## newlistener

> [newlistener](https://nodejs.org/dist/latest-v14.x/docs/api/events.html#events_event_newlistener)
