const Person = ({ name, age, hobbies }) => {
   
    const voteMsg = age >= 18 ? <h3>Please go vote!</h3> : <h3>You must be 18!</h3>;

    const displayName = name.length > 8 ? name.slice(0, 6) : name;

    return (
        <div>
            <h2>{ displayName }</h2>
            <p>Learn some information about this person</p>
            { voteMsg }
            <h3>Hobbies:</h3>
            <ul>
                { hobbies.map(h => <li key={h}>{ h }</li>) }
            </ul>
        </div>
    );
};