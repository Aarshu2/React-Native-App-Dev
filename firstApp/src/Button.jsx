function Button() {

    // let count = 0;
    // const Clicking = (name) => {
    //     if(count < 3){
    //         count++;
    //         console.log(`${name} you clicked me ${count} times`);
    //     } else {
    //         console.log(`${name} stop clicking me`);
    //     }
    // }

    const handleClick = (e) => e.target.textContent = "Dont Click";
    
    return(<><button onDoubleClick={(e) => handleClick(e)}>Click me</button></>)
}


export default Button