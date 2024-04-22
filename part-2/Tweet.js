const Tweet = (props) => {
    const { username, name, date, message } = props;
    return (
        <div className="tweet">
            <p><strong>{name}</strong> <span>@{username}</span> - {date}</p>
            <p>{message}</p>
        </div>
    );
};