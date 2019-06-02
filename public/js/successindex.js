class App extends React.Component {
    render() {
        return (
            <div className='container'> 
                <hr/>
                <Success />
                <hr />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));