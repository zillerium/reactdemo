import React, {useRef} from 'react';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({todo, setTodo, handleAdd}: Props) => {
   const inputRef = useRef<HTMLInputElement>(null);   

return (
<form className='input' onSubmit={(e)=>{
   handleAdd(e);
   inputRef.current?.blur();

}}>
  <input 
   type="input"
    ref={inputRef} 
   placeholder="emnter a task"
   value={todo} onChange={(e)=>setTodo(e.target.value)}
   className="input__box" /> 
  <button className='input__submit' type='submit'>Go</button>
</form>
)
}
export default InputField; 
