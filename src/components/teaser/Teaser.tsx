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
        <div>
            <Title title={title} />
            <PublishedDate publishedDate={publishedDate} />
            <p className="primary">{teaserText}</p>
        </div>
    );
};

export default Teaser;
