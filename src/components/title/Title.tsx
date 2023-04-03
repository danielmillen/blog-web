import React from "react";

type Props = {
    title: string;
};

const Title: React.FC<Props> = ({ title }) => {
    return (
        <div>
            <h1 className="primary">{title}</h1>
        </div>
    );
};

export default Title;