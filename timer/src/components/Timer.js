function Timer(props) {

    return(
        <div>
            <h1>{props.days}d {props.hours}h {props.minutes}m {props.seconds}s </h1>
        </div>
    );
}

export default Timer;