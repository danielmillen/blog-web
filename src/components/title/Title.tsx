import React from 'react';

type Props = {
    title: string;
};

const Title: React.FC<Props> = ({title}) => {
    return (
        <div className="title">
            <h1 className="secondary">{title}</h1>
        </div>
    );
};

export default Title;
