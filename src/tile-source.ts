import { Evented, Style } from 'mapbox-gl';
//import { setType } from 'mapbox-gl/src/source/source';

/**
 * @see https://github.com/mapbox/mapbox-gl-js/blob/master/test/unit/source/source_cache.test.js
 */
class TileSource extends Evented {}

Style.setType('local-tile', TileSource);
