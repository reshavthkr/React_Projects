import StartButton from './StartButton'
function InputDeadline({input }){
    return(
        <div className=' Input ' >
            <input placeholder = "mm/dd/yyyy" className = 'pa2 br4' onChange ={input} />
            
        </div>
    );
}
export default InputDeadline;