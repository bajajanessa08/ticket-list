import React from 'react';

interface LabelRequiredProps {
    labelText?: string;
    required?: boolean;
    htmlFor?: string;
}

const LabelRequired: React.FunctionComponent<LabelRequiredProps> = ({ labelText, required, htmlFor }) => {
    let className = 'label-required';
    if (required) className = `${className} required`;

    return (
        <label htmlFor={htmlFor} className={className}>
            {labelText}
        </label>
    )
}

LabelRequired.defaultProps = {
    required: false,  
};

export default LabelRequired;