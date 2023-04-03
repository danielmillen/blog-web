import React from 'react';

type Props = {
    publishedDate: number;
};

const PublishedDate: React.FC<Props> = ({publishedDate}) => {
    const configuredDate: Date = new Date(publishedDate);
    return (
        <div className="publishedDate primary">
            {configuredDate.toLocaleDateString()}
        </div>
    );
};

export default PublishedDate;
