<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header @addTodo="addTodo" />
      <!-- <List :todos="todos" :deleteTodo="deleteTodo" :toggleTodo="toggleTodo" /> -->
      <List :todos="todos" :deleteTodo="deleteTodo" />
      <Footer :todos="todos" :checkAllTodo="checkAllTodo" />
    </div>
  </div>
</template>

<script>
//引入Header组件
import Header from './components/Header'
//引入List组件
import List from './components/List'
//引入Footer组件
import Footer from './components/Footer'
export default {
  name: 'App',
  data() {
    return {
      // todos: [
      //   { id: 1, title: '奔驰', iscompleted: false },
      //   { id: 2, title: '宝马', iscompleted: true },
      //   { id: 3, title: '大众', iscompleted: false },
      // ],
      todos: JSON.parse(localStorage.getItem('todos_key') || '[]'),
    }
  },
  components: {
    Header,
    List,
    Footer,
  },
  methods: {
    addTodo(todo) {
      this.todos.unshift(todo)
    },
    //删除数据
    deleteTodo(index) {
      this.todos.splice(index, 1)
    },
    //切换操作（选中/不选中）
    toggleTodo(todo) {
      todo.iscompleted = !todo.iscompleted
    },
    checkAllTodo(flag) {
      this.todos.forEach((todo) => {
        todo.iscompleted = flag
      })
    },
  },
  //todos数组数据发生了变化，就要缓存数据，某个数据发生变化，要做一些操作----监视
  watch: {
    todos: {
      deep: true, //深度监视
      handler: function (val) {
        //要执行的相关操作
        //缓存数据
        localStorage.setItem('todos_key', JSON.stringify(this.todos))
      },
    },
  },
  mounted() {
    this.$bus.$on('toggleTodo', (todo) => {
      this.toggleTodo(todo)
    })
  },
  beforeDestroy() {
    //取消消息订阅
    this.$bus.$off('toggleTodo', this.todo)
  },
}
</script>

<style scoped>
/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
