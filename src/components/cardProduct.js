import React, { Component } from 'react';
import Products from '../products.json';
import '../assets/css/cardProduct.css';
import CardModal from './cardModal.js';




export default class cardProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listaProdutos: [],
            show: false,
        }

        localStorage.setItem('localStorageOrder', JSON.stringify([]));
        this.propData = { productId: 0, productName: "", priceProduct: 0, imgPath: "", altDesc: "" }
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this)
        this.getPropEvent = this.getPropEvent.bind(this);
        this.getProduct();
    }
    

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    getProduct() {
        this.listaProdutos = Products;
    }

    getPropEvent(id, name, price, path, desc) {
        this.propData.productName = name;
        this.propData.priceProduct = price;
        this.propData.imgPath = path;
        this.propData.altDesc = desc;
        this.propData.productId = id;
        this.showModal();
    }


    render() {
        return (
            <div
                ref={node => {
                    this.node = node;
                }}
            >

                <div className="containerCardProduct">
                    {
                        this.listaProdutos.map((e) => {
                            return (
                                <div className="cardProduct" key={e.productId} onClick={() => { this.getPropEvent(e.productId, e.productName, e.priceProduct, e.imgPath, e.altDesc);}}>
                                    <div className="imgRetangularCard">
                                        <img src={e.imgPath} alt={e.altDesc} />
                                    </div>
                                    <p className='nameProduct'>{e.productName}</p>
                                    <div className="cardPrice">R$  {e.priceProduct}</div>
                                </div>
                            );
                        })
                    }
                </div>

                <CardModal show={this.state.show} handleClose={this.hideModal} data={this.propData} />
            </div>

        )
    }

}
