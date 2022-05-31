import {React, useState} from 'react'

const AddModal = ({ addModal, addNewProd, products }) => {
    const lastId = products.length + 1

    const closeModal = (e) => {
        e.target.matches('main') || e.target.matches('button') ?
            addModal(false) : addModal(true)
    }
    
    const [newProd, setNewProd] = useState({})
    const handleChange = e => {
        const { name, value } = e.target;
        var n = name == 'id' || name == 'price' ? Number(value) : value
        setNewProd(newProd => ({
            ...newProd,
            [name]: n
        }));
    };


    return (
        <main className="add-modal" onClick={closeModal}>
            <div className='d-flex flex-column add-form  rounded'>
                <h1 className='text-light'>Add Product</h1>

                <div className="ui input add-inp">
                    <input name='id' type="number" placeholder="Id" value={lastId} onChange={handleChange} disabled/>
                </div>
                <div className="ui input add-inp">
                    <input name='category' type="text" placeholder="Category" onChange={handleChange}/>
                </div>
                <div className="ui input add-inp">
                    <input name='title' type="text" placeholder="Title" onChange={handleChange}/>
                </div>
                <div className="ui input add-inp">
                    <input name='model' type="text" placeholder="Model" onChange={handleChange}/>
                </div>
                <div className="ui input add-inp">
                    <input name='price' type="number" placeholder="Price" onChange={handleChange}/>
                </div>
                <button onClick={()=>{addNewProd(newProd)}} className='btn btn-outline-light border-0'>Add</button>
            </div>

        </main>
    )
}

export default AddModal