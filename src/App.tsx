// import Todo from "./components/Todo";
import React from "react";
import Header from "./components/Header";
import LoginForm from "./LoginForm";
function App() {
    return (
        <div>
            <Header title='Hello World' color='red'></Header>
            {/* <h1> My Todos</h1>
      <Todo title='learn React day 1'/>
      <Todo title='learn React day 2'/>
      <Todo title='learn React day 3'/>
      <Todo title='learn React day 4'/> */}
            <LoginForm
                shouldRemember={true}
                onPasswordChange={() => {}}
                onSubmit={() => {}}
                onUsernameChange={() => {}}
                onRememberChange={() => {}}></LoginForm>
        </div>
    );
}

export default App;
