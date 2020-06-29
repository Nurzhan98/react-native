import React,  {useState} from 'react';
import { StyleSheet, Text, View , FlatList } from 'react-native';
import { NavBar } from './src/components/NavBar'
import { MainSrcreen } from './src/screens/mainScreen';
import { TodoSrcreen } from './src/screens/TodoScreen';


export default function App() {
	const [todoId, setTodoId] = useState(null)
	const [todos, setTodos] = useState([
		{id: '1', title: 'Купить хлеб'},
		{id: '2', title: 'Написать приложение'},
		{id: '3', title: 'Изучить React Native'},
	])

	const addTodo = title => {
		setTodos(prev => [
			...prev,
			{
				id: Date.now().toString(),
				title
			}
		])
	}

	const removeTodo = (id) => {
		setTodos( prev => prev.filter( todo => todo.id !== id))
	}

	let content = (
		<MainSrcreen 
		todos={todos} 
		addTodo={addTodo} 
		removeTodo={removeTodo} 
		openTodo={setTodoId} />
	)

	if(todoId) {
		const selectedTodo = todos.find( todo => todo.id === todoId)
		content = <TodoSrcreen goBack={() => setTodoId(null) } todo={selectedTodo} />
	}

	return (
		<View >
			<NavBar title='Todo App' />
			<View style={styles.container}>{ content }</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingLeft: 20,
		paddingRight: 20
	},
});
