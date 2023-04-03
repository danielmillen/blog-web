import React from 'react';
import {Title} from '@components/title';
import {PublishedDate} from '@components/date';

type Props = {};

const Teaser: React.FC<Props> = () => {
    return (
        <div>
            <Title title={'Title'} />
            <PublishedDate publishedDate={1680487842761} />
            <p className="primary">Teaser Text</p>
        </div>
    );
};

export default Teaser;
