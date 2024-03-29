import { useState } from "react";
import s from "./Partners.module.scss";

function Partners({partner1,partner2,setPartner1,setPartner2, disabled}) {
    
    const [isEditing, setIsEditing] = useState(false)
    function handleChange(e, setFunction){
        setFunction(e.target.value);
    }
    function handleStatus(){
        setIsEditing(!isEditing);
    }
  return (
    <div className={s.partners}>
        {isEditing ? (
            <div className={s.partners__fields}>
            <input type="text" value={partner1} onChange={(e)=>handleChange(e, setPartner1)}/>
            <input type="text" value={partner2} onChange={(e)=>handleChange(e, setPartner2)}/>
            <button onClick={handleStatus}>Сохранить</button>
            </div>
          ) : (
            <div className={s.partners__fields}>
            <p className={s.partners__name}>{partner1}</p>
            <p className={s.partners__name}>{partner2}</p>
            <button onClick={handleStatus} disabled={disabled}>Редактировать</button>
            </div>
          )}
          
    </div>
    
  );
}

export default Partners;