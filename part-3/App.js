const App = () => {
    return (
        <div>
            <Person name="Tom" age={16} hobbies={['writing', 'reading', 'painting']} />
            <Person name="Dick" age={22} hobbies={['swimming', 'running', 'biking']} />
            <Person name="Harry" age={30} hobbies={['painting', 'drawing', 'Baseball']} />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));