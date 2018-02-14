import React, { Component } from 'react';
import Footer from './Footer'
import UserList from './UserList'
import UserDetails from './UserDetails'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      userData: [],
      count: 0
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({username: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.getUser(this.state.username)
  }

  getUser(username) {
    fetch(`https://api.github.com/search/users?q=${username}`)
    .then(response => response.json())
    .then(response => {
      this.setState({userData: response.items, count: response.total_count});
      //console.log(response)
      //console.log(this.state.userData)
      if (response.message === 'Not Found') {
        let error = 'There was an error'
        console.log(error)
      }
      return response
    })
    .catch((error) => {
    })
  }

  renderUsers() {
    if (this.state.userData.length === 0) {
      return ''
    }
    else {
      return(
        <div className='user-page'>
          <h3 className=''>Found {this.state.count} results for {this.state.username}</h3>
          <div className='user-list'>
            {this.state.userData.map((user, key)=>{
              return(
                <UserList
                  user={user}
                  key={key}
                  />
              )
            })}
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="App">

        <div className="App-header">
          <h1 className="App-title">Github User Search</h1>
          <p>Powererd by the <a>GitHub API</a></p>
          <div>
            <form onSubmit={this.handleSubmit}>
              <input type='text' name='username' value={this.state.username} placeholder='enter a username' onChange={this.handleChange} />
              <input type='submit' value='Submit' />
            </form>
          </div>
        </div>

        <div className='App-body'>
          {this.renderUsers()}
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
/*
const API = 'https://api.github.com/users';

class App extends React.Component {
constructor(props) {
super(props)
this.state = {
username: 'hesmaili',
name:'',
avatar:'',
location:'',
repos:'',
followers: '',
following:'',
homeUrl:'',
notFound:''
}
}
fetchProfile(username) {
let url = `${API}/${username}`;
fetch(url)
.then((res) => res.json() )
.then((data) => {
this.setState({
username: data.login,
name: data.name,
avatar: data.avatar_url,
location: data.location,
repos: data.public_repos,
followers: data.followers,
following: data.following,
homeUrl: data.html_url,
notFound: data.message
})
})
.catch((error) => console.log('Oops! . There Is A Problem') )
}
componentDidMount() {
this.fetchProfile(this.state.username);
}
render() {
return (
<div>
<section id="card">
<SearchProfile fetchProfile={this.fetchProfile.bind(this)}/>
<Profile data={this.state} />
</section>
<span className="hesmaili">GitHub Card With ReactJs - Created By <a href="https://twitter.com/hesmaili95" target="_blank" title="Hamed Esmaili">Hamed Esmaili</a></span>
</div>
)
}
}
class SearchProfile extends React.Component {
render() {
return (
<div className="search--box">
<form onSubmit={this.handleForm.bind(this)}>
<label><input type="search" ref="username" placeholder="Type Username + Enter"/></label>
</form>
</div>
)
}

handleForm(e) {
e.preventDefault();
let username = this.refs.username.getDOMNode().value
this.props.fetchProfile(username);
this.refs.username.getDOMNode().value = '';
}
}

class Profile extends React.Component {
render() {
let data = this.props.data;
let followers = `${data.homeUrl}/followers`;
let repositories = `${data.homeUrl}?tab=repositories`;
let following = `${data.homeUrl}/following`;
if (data.notFound === 'Not Found')
return (
<div className="notfound">
<h2>Oops !!!</h2>
<p>The Component Couldn't Find The You Were Looking For . Try Again </p>
</div>
);
else
return (
<section className="github--profile">
<div className="github--profile__info">
<a href={data.homeUrl} target="_blank" title={data.name || data.username}><img src={data.avatar} alt={data.username}/></a>
<h2><a href={data.homeUrl} title={data.username} target="_blank">{data.name || data.username}</a></h2>
<h3>{data.location || 'I Live In My Mind'}</h3>
</div>
<div className="github--profile__state">
<ul>
<li>
<a href={followers} target="_blank" title="Number Of Followers"><i>{data.followers}</i><span>Followers</span></a>
</li>
<li>
<a href={repositories} target="_blank" title="Number Of Repositoriy"><i>{data.repos}</i><span>Repositoriy</span></a>
</li>
<li>
<a href={following} target="_blank" title="Number Of Following"><i>{data.following}</i><span>Following</span></a>
</li>
</ul>
</div>
</section>
);
}
}

React.render(<App />, document.body); */
