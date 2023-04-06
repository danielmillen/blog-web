import React from 'react';
import {Title} from '@components/title';
import {PublishedDate} from '@components/date';

type Props = {
    title: string;
    publishedDate: number;
    teaserText: string;
};

const Teaser: React.FC<Props> = ({title, publishedDate, teaserText}) => {
    return (
        <div className="teaserCard">
            <PublishedDate publishedDate={publishedDate} />
            <Title title={title} />
            <p className="primary">{teaserText}</p>
        </div>
    );
};

export default Teaser;
