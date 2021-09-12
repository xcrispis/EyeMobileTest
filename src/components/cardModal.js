import React, { useState } from 'react';
import '../assets/css/cardModal.css';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CloseIcon from '@material-ui/icons/Close';





const CardModal = ({ handleClose, show, data }) => {

    const showHideClassName = show ? "modal display-block" : "modal display-none";
    let [value, sumValue] = useState(data.priceProduct);
    let [count, setCount] = useState(1);
    let [finalValue, setFinalValue] = useState(0);
    let [finalAmount, setFinalAmount] = useState(1);
    let [txt, setTxt] = useState("");

    let orderItem = {
        itemName: "",
        itemValue: 0,
        itemAmount: 0,
        comment: ""
    };

    const increment = () => {
        setCount(count + 1)
        sumValue(Math.round(count * data.priceProduct));
    }

    const confirm = () => {
        setFinalValue(finalValue + value);
        setFinalAmount(finalAmount + count);
        orderItem.itemName = data.productName;
        orderItem.itemAmount = finalAmount;
        orderItem.itemValue = finalValue;

        let tempArray = [];
        orderItem.comment = txt;

        tempArray = JSON.parse(localStorage.getItem('localStorageOrder'));
        tempArray.push(orderItem);
        localStorage.setItem('localStorageOrder', JSON.stringify(tempArray));

        setFinalValue(0);
        setFinalAmount(1);
        setCount(1)
        sumValue(Math.round(count * data.priceProduct));
        handleClose();
        alert("Item adicionado com sucesso.");
    }


    const close = () => {
        sumValue(data.priceProduct);
        setCount(1);
    }



    return (
        <div className={showHideClassName}>

            <div className="cardModal">
                <CloseIcon className="closeIcon" onClick={() => { close(); handleClose(); }} />
                <div className="imgRetangularModalCard">
                    <img src={data.imgPath} alt={data.altDesc} />
                </div>
                <p className='nameModal'>{data.productName}</p>
                <div className="containerCommentOrder">
                    <TextField onChange={e => setTxt({ txt: e.target.value })} id="multiline" label="Comentários Adicionais" />
                    <div className="priceAndAmountContainer">
                        <div className="plusMinusContainer">
                            <RemoveIcon fontSize="large" onClick={increment}>Subtraia</RemoveIcon>
                            <p>{count}</p>
                            <AddIcon fontSize="large" onClick={increment} />
                        </div>
                    </div>



                    <Button size="medium" variant="contained" color="secondary" onClick={confirm}>Adicionar R${value}</Button>

                </div>


            </div>

        </div>

    );
};

export default CardModal;

