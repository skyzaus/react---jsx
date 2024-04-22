const App = () => {
    return (
        <div>
            <Tweet username="catperson" name="Cat Person" date="4/19/2024" message="I love cats!" />
            <Tweet username="secondcatperson" name="other cat Person" date="4/20/2024" message="I love cats two!" />
            <Tweet username="thirdcatperson" name="third cat Person" date="4/21/2024" message="I love cats three!" />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));