import { useState } from 'react'
import data from './data';
import './style.css';

function Accordian () {

    const [selected,setSelected] = useState(null);
    const [enableMulti,setEnableMulti] = useState(false);
    const [multiSelected,setMultiSelected] = useState([]);

    const handleSelected = (id) => {

        id === selected ? setSelected(null) : setSelected(id);
        
    }

    const handleSetEnableMulti = () => {
        setEnableMulti(!enableMulti);
    }

    const handleMultiSelect = (id) => {
        let cpyMulti = [...multiSelected];

        const index = cpyMulti.indexOf(id);

        if(index === -1){
            cpyMulti.push(id);
        } else {
            cpyMulti.splice(index, 1)
        }

        setMultiSelected(cpyMulti);

    }

    return (
        <>
            <h1>Accordian Component</h1>
            <div>
                <div>
                    <button onClick={handleSetEnableMulti}>{enableMulti ? 'Change Single Select' : 'Change Multi Select'}</button>
                </div>
                {
                    data && data.length > 0 
                    ? (
                        data.map((dataItem) => (
                            <div key={dataItem.id}>
                                <div className='box' onClick={() => enableMulti ? handleMultiSelect(dataItem.id) : handleSelected(dataItem.id)}>
                                    <h3>{dataItem.question}</h3>
                                    <span> + </span>
                                </div>

                                {
                                    enableMulti ? multiSelected.indexOf(dataItem.id) !== -1 && <div>
                                        <p>{dataItem.answer}</p>
                                    </div> : selected === dataItem.id && <div>
                                        <p>{dataItem.answer}</p>
                                    </div>
                                }
                                
                            </div>
                        ))
                    ) 
                    : <div>No Data Found !</div>
                }
            </div>
        </>
    )
}

export default Accordian;