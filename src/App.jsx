import './App.css';
import { connect } from 'react-redux';
import { addTask } from './actions/index';
import { deleteTask } from './actions/index';

const App=(props) => {
	console.log(props);
	let input;
	return (
		<div className="App">
			<input
				ref={(node) => {
					input = node;
				}}
			/>
			<button
				onClick={() => {
          props.addToTask(input.value);
          input.value = '';
				}}
			>
				投稿
			</button>
			<ul>
				{props.tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button onClick={()=> {
              props.deleteToTask(task.id)
            }}>削除</button>
          </li>
				))}
			</ul>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		tasks: state.tasks,
	};
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToTask: (text) => {
      dispatch(addTask(text))
    },
    deleteToTask: (id) => {
      dispatch(deleteTask(id))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
