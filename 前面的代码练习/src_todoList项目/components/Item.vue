<template>
  <li
    @mouseenter="mouseHandle(true)"
    @mouseleave="mouseHandle(false)"
    :style="{ color: fontColor, backgroundColor: bgColor }"
  >
    <label>
      <input type="checkbox" v-model="isCheck" />
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="delTodo">
      删除
    </button>
  </li>
</template>

<script>
export default {
  name: 'Item',
  // props: {
  //   todo: Object,
  //   deleteTodo: Function,
  //   index: Number,
  //   toggleTodo: Function,
  // },
  props: {
    todo: Object,
    deleteTodo: Function,
    index: Number,
  },
  data() {
    return {
      fontColor: 'black',
      bgColor: 'white',
      isShow: false,
    }
  },
  methods: {
    //鼠标进入离开事件
    mouseHandle(color) {
      if (color) {
        //进入的事件
        ;(this.fontColor = 'green'),
          (this.bgColor = 'pink'),
          (this.isShow = true)
      } else {
        //离开的事件
        ;(this.fontColor = 'black'),
          (this.bgColor = 'white'),
          (this.isShow = false)
      }
    },
    delTodo(index) {
      //友好的删除提示信息
      if (confirm('您确定删除吗？')) {
        this.deleteTodo(index)
      }
    },
  },
  //计算属性
  computed: {
    isCheck: {
      get() {
        return this.todo.iscompleted
      },
      set() {
        //this.toggleTodo(this.todo)
        this.$bus.$emit('toggleTodo', this.todo)
      },
    },
  },
}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  /* display: none; */
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>
