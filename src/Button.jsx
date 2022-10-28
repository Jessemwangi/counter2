const Button = (props) =>{
    return(
    <button onClick={props.click} type = {props.type || 'button'}>
    {props.children}</button>
    );
    
}
export default Button;