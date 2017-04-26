function AuthorsList (props) {
    return (
        <ul className="authors-list">
            {props.authors.maps((author, index) =>
                <li key={author.id} className="author-item">
                    <div className="author-id">{index + 1}</div>
                    <ul className="space-list-items">
                        <li>{author.first_name} {author.last_name}</li>
                    </ul>
                </li>
            )}
        </ul>
    )
}

class App extends React.Component {
    constructor(props) {
        super();
        this.state = {
            authors: null
        }
    }

    componentDidMount() {
        $.getJSON('/authors.json', (response) => {
            this.setState({authors: response});
        })
    }

    render() {
        return (
            <div className="container">
                <h1 className="header center" style="">
                    Quick Reads for {this.props.name}
                </h1>
                <Directory />
                {!this.state.authors
                ? <p>LOADING!</p> : <AuthorsList />}
            </div>
        )
    }
}

ReactDOM.render(
    <App name={"Michael"}/>, document.getElementById('root')
)