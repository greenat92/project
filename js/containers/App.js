import React, {Component} from 'react'
import { AppRegistry, View } from 'react-native'
import { connect } from 'react-redux'


import { actionCreators } from './../actions'
import List from './../components/List'
import Input from './../components/Input'
import Title from './../components/Title'

const mapStateToProps = (state) => ({
    todos: state.todos,
})

class App extends Component {

  onAddTodo = (text) => {
    const {dispatch} = this.props

    dispatch(actionCreators.add(text))
  }

  onRemoveTodo = (index) => {
    const {dispatch} = this.props

    dispatch(actionCreators.remove(index))
  }

  render() {
    const {todos} = this.props
    return(
      <View>

          <Title> Todo List</Title>
          <Input
            placeholder={'Type a todo, then hit enter!'}
            onSubmitEditing={this.onAddTodo}
          />
          <List
            list={todos}
            onPressItem={this.onRemoveTodo}
          />
      </View>
    )
  }
}

export default connect(mapStateToProps)(App)
