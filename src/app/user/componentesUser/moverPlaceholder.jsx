export function showHideBtnsInputUser(inputs,estado,index) {   
    estado((prevBtns) => 
        inputs[index] !== ""
        ? prevBtns.map((btn, ind) => ind === index)
        : prevBtns.map(() => false)
    );
}