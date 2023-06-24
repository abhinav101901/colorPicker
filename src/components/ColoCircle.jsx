import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import "./styles/colorcircle.css"

const ColorCircle = (props) => {

    const [colorUnpick, setColorUnpick] = useState("#cccccc");
    const [colorPick, setColorPick] = useState("green");

    const styleUnpick = {
        "background-color": setColorUnpick,
    }

    const stylePick = {
        "background-color": colorPick,
        // "zoom": "1.3"
    }

    const [picked, setPicked] = useState(false);
    const [style, setStyle] = useState(styleUnpick);

    //Cambia el estado del circulo (activado/desactivado)
    const changeState = () => {
        if (picked === false) {
            setPicked(true)
            setStyle(stylePick)
        } else {
            setPicked(false)
            setStyle(styleUnpick)
        }
    }

    //Si el circulo esta activado, cambia al color que haya el en picker
    useEffect(() => {
        if (picked === true) {
            setColorPick(props.background)
            setColorUnpick(props.background)
            setStyle(stylePick)
        }
    }, [props.background, picked, colorPick, colorUnpick]);

    return (
        <div className='circle' onClick={changeState} style={style}>
        </div>
    );
};


ColorCircle.propTypes = {
    background: PropTypes.string,
};

export default ColorCircle;
