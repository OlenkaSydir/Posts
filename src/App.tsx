import React from 'react';
import {BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import {Users} from "./user/users";
import {Posts} from "./post/posts";
import PostItem from "./post/post-item";
import {AddPostForm} from "./post/add-post-form";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Users}/>
            <Route exact path='/posts' component={Posts}/>
            <Route path='/posts/:postId' render={(props) => {return ( <PostItem {...props } /> )}}/>
            {/*<Route path='/new-post' component={AddPostForm}/>*/}
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
