import { Dimensions } from 'react-native';
import Component from 'react';


const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 35.679976;
const LONGITUDE = 139.768458;
const LATITUDE_DELTA = 0.01;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
// 116423, 51613, 17
const OVERLAY_TOP_LEFT_COORDINATE = [35.68184060244454, 139.76531982421875];
const OVERLAY_BOTTOM_RIGHT_COORDINATE = [35.679609609368576, 139.76806640625];
const IMAGE = "https://res.cloudinary.com/fatum/image/upload/v1670756585/Products/home7-product5_vyrdgr.jpg";

export default class ImageOverlayWithURL extends Component {
  static propTypes = {
    provider: MapView.ProviderPropType,
  };

  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      overlay: {
        bounds: [OVERLAY_TOP_LEFT_COORDINATE, OVERLAY_BOTTOM_RIGHT_COORDINATE],
        image: IMAGE,
      },}
    }}
