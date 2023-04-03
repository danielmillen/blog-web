import {useMemo} from 'react';

type TeaserResponse = {
    id: number;
    title: string;
    teaserText: string;
    datePublished: number;
};

const useTeasers = (last: number = 0): TeaserResponse[] => {
    const memoizedResponse = useMemo(
        () => [
            {
                id: 0,
                title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia.',
                teaserText:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet blandit sem, vel ullamcorper purus. Nunc volutpat justo tellus. Quisque accumsan sed justo et ullamcorper. Etiam sed euismod leo. In interdum eleifend ligula ut egestas. Donec nunc nisl, accumsan a justo non, egestas efficitur risus. Nullam congue odio et felis.',
                datePublished: 1680487842761,
            },
            {
                id: 1,
                title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis.',
                teaserText:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac tortor libero. In tristique tincidunt pulvinar. Sed volutpat tempor egestas. Morbi vitae orci odio. Nunc porttitor nulla vel congue fringilla. Maecenas eget purus bibendum, hendrerit nisi vel, consequat ipsum. Nam eget sem risus. Nullam tincidunt pellentesque ante et posuere. Quisque.',
                datePublished: 1680488842761,
            },
            {
                id: 2,
                title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porttitor.',
                teaserText:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ornare pharetra suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc faucibus lorem finibus feugiat venenatis. Aliquam erat volutpat. Proin aliquet nunc a laoreet finibus. Nullam semper est sed risus accumsan dapibus. Nullam a elit.',
                datePublished: 1680489842761,
            },
            {
                id: 3,
                title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis.',
                teaserText:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lectus velit, accumsan a tellus nec, commodo lacinia turpis. Praesent ligula ligula, auctor ac dolor eget, rhoncus convallis eros. Mauris nec imperdiet sem, in ullamcorper enim. Phasellus pellentesque dui lacus, ut aliquet lectus ullamcorper et. Integer accumsan, augue id eleifend laoreet.',
                datePublished: 1680490842761,
            },
            {
                id: 4,
                title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu.',
                teaserText:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id dui vel felis sodales facilisis. Pellentesque ac ex sed dui ultricies consectetur. Donec varius ex eleifend, venenatis diam ut, pellentesque nunc. Quisque vehicula mauris euismod malesuada euismod. Pellentesque semper ut orci eget lacinia. In ac justo et risus commodo semper.',
                datePublished: 1680491842761,
            },
        ],
        []
    );

    return memoizedResponse;
};

export default useTeasers;
