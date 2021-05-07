import logo from './logo.svg';
import './App.css';
import react,{Component} from'react';
import './components/ShowDeadline'
import ShowDeadline from './components/ShowDeadline';
import Timer from './components/Timer'
import InputDeadline from './components/InputDeadline';
import StartButton from "./components/StartButton";
// import Fireworksn from "./components/Fireworksn" for add fireworks
import Particles from 'react-particles-js';
import tachyons from 'tachyons'
class App extends Component {
  constructor(){
    super();
    this.state = {
      inputtext: '',
      replace: '',
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      countdate : new Date().getTime()
    }
  }
  onInput = (event) => {
    this.setState({replace: event.target.value});
    //  console.log(replace); 
  }
 
  startTime = () =>{
    const {replace} =this.state;
    this.setState({inputtext : replace});
    this.setState({countdate:new Date(replace).getTime()})
      let x = setInterval(() =>{
        let now = new Date().getTime();
        let difference = this.state.countdate - now;
        console.log(difference);
        this.setState({seconds:Math.floor((difference % (1000 * 60)) / 1000)})
        this.setState({minutes:Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))})
        this.setState({hours:Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))})
        this.setState({days :Math.floor(difference / (1000 * 60 * 60 * 24))})
        if(difference < 0){
          clearInterval(x);
          this.setState({days : 0});
          this.setState({hours : 0});
          this.setState({minutes : 0});
          this.setState({seconds : 0});
          // countdown = true;
        }
      },1000)
  }
  
  render(){
    const { days, hours, minutes,seconds,inputtext}=this.state;
    const particleEffect = {
      particles: {
        line_linked: {
          shadow: {
            enable: true,
            color: "#3CA9D1",
            blur: 5
          }
        }
      }
    }
  

    
    return (
      
      <div className="App ">
        <Particles params={particleEffect} className = 'particles'/>
        
        <div className = 'timer '>
          <div className ='timer2 tc dib br3 pa3 grow ma2 shadow-2'>
            <ShowDeadline v={inputtext} />
            <Timer days ={days} hours ={hours} minutes ={minutes} seconds ={seconds}/>
            <InputDeadline input = {this.onInput} />
            <StartButton start = {this.startTime} clear={this.onClear}/>
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
