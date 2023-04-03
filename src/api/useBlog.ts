import {useMemo} from 'react';

type BlogResponse = {
    id: number;
    title: string;
    body: string;
    datePublished: number;
};

const useBlog = (id: number): BlogResponse => {
    const blogResponse = useMemo(
        () => ({
            id: 0,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia.',
            body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper, nisi a aliquet bibendum, leo ligula accumsan sem, eleifend sodales velit ante at metus. Donec facilisis tincidunt est, ut pellentesque tortor cursus ac. Morbi laoreet pellentesque velit rhoncus dapibus. Cras cursus venenatis diam, a efficitur urna efficitur id. Aenean et sagittis ante. Etiam et erat sit amet mauris blandit lobortis et non dui. Proin nec purus est. Maecenas quis euismod neque, porta finibus dolor. Suspendisse nibh tellus, vulputate vel elementum eleifend, lacinia nec purus.

                Duis vel faucibus ipsum. Nullam malesuada sodales augue, nec volutpat dui tincidunt eu. Donec sit amet eros efficitur purus imperdiet malesuada vel vel risus. Nulla a dictum lectus. Cras vel felis dictum, dictum ante non, accumsan massa. Suspendisse vel sem justo. Proin gravida malesuada ipsum, vel tempus urna tempor quis. Nam aliquam volutpat iaculis. Curabitur faucibus felis non rhoncus ultrices. Nam tincidunt sem sodales nisi ultricies, quis scelerisque erat porta. In accumsan diam eu ante convallis dignissim. Sed ac sapien at lacus blandit facilisis ut volutpat lorem. Maecenas non auctor massa.

                Maecenas commodo turpis in nulla commodo tempor. Aliquam scelerisque posuere eros, ac varius arcu. Ut gravida scelerisque elit eget condimentum. Ut hendrerit, enim in tincidunt dignissim, ante nunc placerat massa, eget efficitur tellus eros quis turpis. Proin risus turpis, ultricies nec orci vel, molestie rutrum lectus. Nam quis tellus metus. Ut eu odio a mi tincidunt tempus ac vitae sem. Quisque sit amet velit venenatis, efficitur turpis in, tincidunt nisi. Vestibulum et neque in odio ultricies vulputate nec vitae nunc. Suspendisse malesuada tortor et magna mattis, a fermentum magna pharetra. Pellentesque id est libero. Integer sodales nisl nisl, at molestie erat consectetur ut. Praesent ac nibh sem. Sed et elementum enim, a molestie nisl. Sed porta neque at nisl posuere pretium.

                Nam in dolor efficitur purus facilisis consectetur. Aliquam sed purus et nibh vehicula rhoncus id non dui. Proin a lacus purus. Integer hendrerit nibh eget ante maximus suscipit. Donec et erat tristique, facilisis mauris non, tincidunt tortor. Donec fermentum ullamcorper magna sed aliquet. Nunc est risus, venenatis vel nulla non, laoreet finibus enim. Donec sodales accumsan metus, vitae vulputate tellus dapibus a. Vivamus ex nunc, elementum malesuada magna vel, lobortis condimentum leo. Donec suscipit blandit leo, sit amet commodo dolor dignissim lacinia. Sed sit amet eros ac ipsum dignissim blandit. Sed vitae eleifend justo, et malesuada lectus. Fusce non justo vehicula, hendrerit nibh ac, vulputate diam.

                Phasellus hendrerit eleifend eros eget imperdiet. Aliquam erat volutpat. Phasellus neque ex, convallis ac tempus quis, iaculis et urna. Proin commodo, nisl at venenatis bibendum, dui diam egestas diam, quis sodales arcu libero sit amet enim. Sed ut lacus enim. Donec sem arcu, rutrum eget velit sagittis, condimentum dignissim turpis. Mauris arcu urna, aliquam eu ligula ac, ornare semper odio. Duis maximus porttitor purus, et imperdiet ipsum elementum sit amet. Morbi finibus lacus quam, ac aliquet risus euismod et. Ut dignissim erat tellus, a semper ipsum facilisis ac. Maecenas finibus consequat purus, in maximus dui venenatis ut. Quisque lacus orci, eleifend et consequat eu, consequat ut erat.

                Morbi convallis justo ipsum, vel sollicitudin sem porta non. Nulla bibendum vel nibh sit amet fringilla. Mauris tempus, sapien ut viverra tempor, nisl libero molestie nisi, sed rutrum purus velit in ligula. Quisque vel laoreet quam. Ut sit amet lorem urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac leo nec dolor vehicula suscipit ac sit amet diam.

                Sed ultrices lectus gravida, commodo felis a, interdum arcu. Integer ut ipsum vitae quam tempor tempor. In hac habitasse platea dictumst. Sed at mi eu dolor fermentum dignissim. Praesent ut blandit ligula. Vivamus ac nisl congue, mattis ante eu, bibendum sapien. Cras ullamcorper lacus turpis, ac semper libero rhoncus vel. Morbi condimentum dui leo, vel consequat diam euismod non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec aliquet elit. Mauris massa mi, sollicitudin vitae sollicitudin et, venenatis at risus. Donec et tellus tempus, finibus velit vitae, aliquet dolor. Cras pellentesque neque ut risus aliquet, eget facilisis augue ultricies. Aliquam eget ligula nec eros vulputate pharetra.

                Vestibulum ex velit, volutpat non malesuada vel, maximus quis mauris. Nunc ac pretium massa. Sed ut diam in ipsum dictum congue. Integer non luctus orci. Aenean interdum in quam rhoncus posuere. Nam volutpat varius dui, at dignissim ante tincidunt non. Etiam tincidunt nec lacus at interdum. Nulla sed dolor eros. Fusce porta scelerisque ex vitae condimentum. Suspendisse a elit at est auctor ullamcorper eget sit amet quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras maximus tortor nec fermentum maximus. Etiam convallis pharetra tellus, eget iaculis ligula. Sed vel tortor rutrum, porttitor libero eu, maximus nibh. Mauris maximus blandit eros, sed condimentum metus interdum id.

                Vestibulum ac condimentum dui, ut egestas dolor. Praesent feugiat purus quis lorem varius, quis laoreet nibh consequat. Suspendisse ac auctor velit, id facilisis turpis. Proin et neque ut ex viverra fringilla quis a urna. Fusce mauris purus, porta at lectus et, congue maximus sapien. Mauris dictum purus quis diam feugiat dictum. Aliquam ultrices quam ut ligula blandit, sed cursus ante commodo. Vivamus ut libero dignissim, scelerisque lacus eget, consequat elit. Vestibulum est nibh, elementum tincidunt massa id, hendrerit imperdiet ex.

                Phasellus vitae dignissim tellus. Praesent facilisis eros sapien, a elementum justo finibus ultrices. Nunc lacus ex, blandit et feugiat eu, placerat quis lacus. Duis vel iaculis diam, ut aliquet diam. Duis scelerisque augue lacus, vel semper ligula posuere ac. Suspendisse bibendum massa ut magna venenatis, vel imperdiet nibh posuere. Nulla placerat auctor neque et auctor. Fusce dapibus lacus dignissim, congue arcu ornare, tempor ligula.

                Suspendisse tempus tempus dolor vitae vulputate. Vivamus rhoncus nisi vel pellentesque pellentesque. Aenean ornare nibh vitae justo sagittis, ut tincidunt orci tempus. In posuere mauris at est sodales, et sollicitudin ipsum egestas. Nam laoreet urna quis justo scelerisque maximus. Aliquam suscipit velit quis lorem dictum varius. Quisque et dolor arcu.

                Fusce sed ex et nisl bibendum finibus. Fusce tempor lorem mattis, suscipit turpis ut, elementum nibh. Praesent sit amet lacus massa. Vivamus nisl risus, euismod ac volutpat vel, elementum in nisl. Cras eget sollicitudin arcu, nec vehicula est. Curabitur sed libero et augue tempus viverra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis a laoreet tellus. Nullam elit nisi, fermentum a augue a, scelerisque tincidunt mi. Morbi a risus nulla. Maecenas id condimentum augue. Sed varius mauris non sem gravida dignissim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

                Proin sit amet lacus vel nulla laoreet hendrerit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla eget urna finibus, fringilla enim imperdiet, facilisis justo. Pellentesque eu urna non elit pharetra suscipit. Quisque sagittis, sapien nec pellentesque finibus, est erat consequat dolor, sed malesuada arcu sapien id urna. Duis sit amet gravida diam. Quisque mattis est vulputate, pharetra eros ut, porta lacus. Ut mattis non nulla et scelerisque. Ut gravida ex mauris, luctus placerat dui sagittis id. Sed accumsan lobortis eros, dapibus congue urna scelerisque in. Sed condimentum orci nec ligula imperdiet, quis pulvinar elit commodo. Ut ultrices vitae lectus ut fermentum. Nunc imperdiet purus nec tellus porta euismod.

                Mauris sagittis sit amet tortor vel hendrerit. Sed tempus feugiat ipsum vel aliquet. Fusce ultricies, diam eget convallis semper, eros lectus congue odio, nec aliquet lectus erat volutpat urna. Phasellus luctus magna sapien, consequat suscipit leo viverra eu. Mauris sem tellus, finibus tristique laoreet sit amet, pellentesque a nunc. Pellentesque nunc lorem, laoreet dapibus pharetra ullamcorper, tempor in est. Morbi sed libero ut diam finibus rutrum. Integer dapibus, nisl eu sodales feugiat, purus mi ornare leo, consequat porta purus sapien non sem. Quisque condimentum neque a vulputate rutrum.

                Nam lobortis posuere vulputate. Cras ipsum est, laoreet rutrum ligula at, pharetra ultricies ligula. Phasellus rhoncus rutrum eros ac posuere. Integer dapibus quam consectetur sapien finibus, ac condimentum neque suscipit. Maecenas ac ultricies felis. Morbi rutrum, sapien congue ultrices porta, leo purus mattis felis, a porta lectus felis in nisi. Aenean consectetur sapien magna, quis tincidunt velit dapibus sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus. In gravida fermentum venenatis. Donec scelerisque euismod massa, eu viverra risus volutpat eget. Vivamus congue dictum nisi, in tristique purus scelerisque vestibulum.`,
            datePublished: 1680487842761,
        }),
        []
    );

    return blogResponse;
};

export default useBlog;
