import React, { useState } from 'react';
import { CompactPicker } from 'react-color';
import "./styles/colorpicker.css"
import ColorCircle from './ColoCircle';


const ColorPicker = () => {
    const [color, setColor] = useState("#fff");

    //Cambia el estado del color al cambiar de color en el picker
    const handleChangeComplete = (color) => {
        setColor(color.hex)
    }

    return (
        <div className='container'>
            <div className='colors'>
                <ColorCircle background={color} />
            </div>
            <CompactPicker className='color-picker' color={color}
                onChangeComplete={handleChangeComplete}
            />
        </div>
    );
};

export default ColorPicker;
