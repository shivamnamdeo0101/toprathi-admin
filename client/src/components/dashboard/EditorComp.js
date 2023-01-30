import React, { useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // import the styles

function EditorComp({setValue,value}) {
    const fonts = ['Times New Roman', 'Comic Sans MS', 'Arial', 'Courier New', 'Georgia', 'Impact', 'Lucida Console','Open Sans'];

    const toolbarOptions = [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        ['link'],
        [{ 'color': [] }, { 'background': [] }],
       
        [{ 'font': [] }],
        [{ 'align': [] }],
        ['clean']
    ];

    
    const quillRef = useRef(null);

    const handleChange = (v) => {
        setValue(v);
    };

    return (
        <div>
            <ReactQuill
                ref={quillRef}
                value={value}
                onChange={handleChange}
                modules={{ toolbar: toolbarOptions }}
            />
        </div>
    );
}

export default EditorComp;
