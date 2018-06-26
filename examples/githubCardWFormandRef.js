const Card = (props) => {
	return (
  	<div style={{margin: '1em'}}>
    	<img width="75" src={props.avatar_url} />
      <div style={{display: 'inline-block', marginLeft: 10}}>
        <div style={{fontSize: '1.25em', fontWeight: 'bold'}}>{props.name}</div>
        <div>{props.company}</div>
      </div>
    </div>
  );
};

const CardList = (props) => {
	return (
  	<div>
    	{props.cards.map(card => <Card {...card} />)}
    </div>
  );
}

class Form extends React.Component {
	handleSubmit = (event) => {
  	event.preventDefault();
    console.log('Event: Form Submit', this.userNameInput.value);
    
  };
	render() {
  	return (
    	<form onSubmit={this.handleSubmit}>
      	<input type="text" 
        	ref={(input) => this.userNameInput = input}
        	placeholder="Github username" required />
        <button type="submit">Add Card</button>
      </form>
    );
  }
}

class App extends React.Component {
	state = {
  	cards: [
      { name: "Paul O’Shannessy",
        avatar_url: "https://avatars1.githubusercontent.com/u/8445?v=3",
        company: "Facebook"},
      { name: "Ben Alpert",
        avatar_url: "https://avatars.githubusercontent.com/u/6820?v=3",
        company: "Facebook"},
      { name: "Timothy Western",
        avatar_url: "https://avatars2.githubusercontent.com/u/2287018?v=4",
        company: "Salesforce"},
    ]
  };
	render() {
  	return (
    	<div>
      	<Form />
        <CardList cards={this.state.cards} />
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);