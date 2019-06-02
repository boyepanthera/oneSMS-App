class App extends React.Component {
    render() {
        return (
            <div className = 'container'>
                <Welcome/>
                <Form />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));