import React, {useState} from 'react';
 

const AddAttentionForm = props => { 
    const initialAttention = 'enter an attention phrase' 

    
    const [ AMessage, setAttention ] = useState(initialAttention)


	const handleInputChangeName = event => {
        console.log("here is chage event :" + event.target);
		const { name, value } = event.target
        setAttention(value)
        console.log("here is attention:" + AMessage);
    }
   
    const insertAttentionApi = async (Attention) => {
       
          props.addSuccess(Attention);
       
    };

    return <div style={{padding: "10px", border: "1px solid green"}}>
        <h4>Add a new Attention!</h4>
        <form onSubmit={e =>{ 
            e.preventDefault(); 
            if (!AMessage ) return
            insertAttentionApi(AMessage);
			setAttention(initialAttention);
        }}>
        Message: <input type="text" name="name" value={AMessage} onChange={handleInputChangeName} />
       {props.resultof != ""  &&        <h2>   {props.resultof}  </h2>      }
             <button type="submit" className="btn btn-primary btn-sm">Send Message as user 1</button>
        </form>
      </div>;
};
 
export default AddAttentionForm;