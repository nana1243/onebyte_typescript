import {useState} from "react";

interface EditorProps {
    handleOnClick : (text:string) => void;
    children?: React.ReactNode;
}

function Editor(props:EditorProps){
    const { handleOnClick  } = props;
    const [text, setText] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }
    const handleClick = () => {
        handleOnClick(text);
        setText('');
    }


    return (
        <>
            <input type="text" value={text} onChange={handleChange} />
            <button onClick={handleClick}>Click</button>
        </>
    );
}

export default Editor;