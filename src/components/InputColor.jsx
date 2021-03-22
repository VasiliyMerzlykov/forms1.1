import React from 'react'

const DEFAULT_STATE = {
    text: "",
    name: "",
    bacgroundColor: "",
    err: "Ошибка"
};

function InputColor() {
    const [text, settext] = React.useState("#");
    const [state, setstate] = React.useState("");

    function hex2rgb(c) {
        
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(c);

        return result ? {
            name: `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)} )`,
            colorName: `rgb(${parseInt(result[1], 16) - 75}, ${parseInt(result[2], 16) - 75}, ${parseInt(result[3], 16) - 75} )`,
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : { err: "ошибка" };
    };

    const onChange = (e) => {
        e.target.value.length === 7 ? setstate(hex2rgb(e.target.value)) : setstate(e.target.value);
        e.target.value.length > 6   ? setstate(hex2rgb(e.target.value)) : setstate(e.target.value);
        settext(e.target.value);
    };

    
    return (
        <div style={{ backgroundColor: `${state.name || DEFAULT_STATE.bacgroundColor}`, height: '100vh', width: '100vw', display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: "center" }}>
            <input style ={{display: "block", margin: '0 auto'}} value={text} onChange={onChange} type="text" />
            <input style={{ backgroundColor: `${state.colorName || DEFAULT_STATE.bacgroundColor}`, color: state.colorName ? "white" : "black" }} value={state.name || state.err || DEFAULT_STATE.name} readOnly/>
        </div>
    );
};

export default InputColor;
