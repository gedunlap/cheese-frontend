import {useState} from "react"

function Show(props) {
    const id = props.match.params.id
    const cheese = props.cheese
    const thisCheese = cheese.find(c => c._id === id)

    const [editForm, setEditForm] = useState(cheese)

    const handleChange = (event) => {
        setEditForm({...editForm, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.updateCheese(editForm, thisCheese._id)
        props.history.push('/')
    }

    const removeCheese = () => {
        props.deleteCheese(thisCheese._id)
        props.history.push('/')
    }

    return (
        <div className="cheese">
            <h1>{thisCheese.name}</h1>
            <h2>{thisCheese.countryOfOrigin}</h2>
            <img src={thisCheese.image} alt={thisCheese.name} />
            <button id="delete" onClick={removeCheese}>
                DELETE
            </button>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={editForm.name}
                    name="name"
                    placeholder="name"
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    value={editForm.countryOfOrigin}
                    name="countryOfOrigin"
                    placeholder="Country Of Origin"
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    value={editForm.image}
                    name="image"
                    placeholder="image URL"
                    onChange={handleChange} 
                />
                <input type="submit" value="Update Cheese" />
            </form>
        </div>
    )
}

export default Show