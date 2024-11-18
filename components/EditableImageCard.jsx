import React from 'react';

const EditableImageCard = ({ src, alt, caption, width, height, onEdit }) => {
    return (
        <button 
            className="relative overflow-hidden" 
            onClick={() => {
                console.log('Button clicked');
                onEdit();
            }} 
            style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer' }}
        >
            <img 
                src={src} 
                alt={alt} 
                className="object-cover rounded-xl"
                style={{ width: `${width}px`, height: `${height}px` }}
            />
            <span className="absolute bottom-2 left-2 bg-gray-500 bg-opacity-50 text-white px-2 py-1 rounded-xl text-xs font-rebond">
                {caption}
            </span>
        </button>
    );
};

EditableImageCard.defaultProps = {
    onEdit: () => console.log('No onEdit handler provided'),
};

export default EditableImageCard;
