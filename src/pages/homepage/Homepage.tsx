import React from 'react';
import useTeasers from '@api/useTeasers';
import {Teaser} from '@components/teaser';

const Homepage = () => {
    const teasers = useTeasers();
    const teasersArr = teasers.map((teaser) => {
        // const teaserText = `${teaser.teaserText.substring(0, 100)}...`;

        return (
            <div key={teaser.id}>
                <Teaser
                    title={teaser.title}
                    publishedDate={teaser.datePublished}
                    teaserText={teaser.teaserText}
                />
            </div>
        );
    });
    return <div className="teaserCards">{teasersArr}</div>;
};

export default Homepage;
