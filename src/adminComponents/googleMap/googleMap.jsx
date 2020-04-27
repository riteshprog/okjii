import React from "react"
import { compose, withProps, lifecycle } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

export const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBfvdlr4pZ5UbmIM9KzNSASmDy9pZsLQn0&libraries=places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  lifecycle({
    
    componentDidMount() {
      const refs = {}
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position)=>{
          const latLog = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
          this.setState({
            center: latLog, 
            marker: latLog
          })   
        });
      } else {
        console.log(`else`);
      }
      this.setState({
        bounds: null,
        center: {
          lat: 29.0087308, lng: 79.391605
        },
        markers: [],
        marker: {
          lat: 29.0087308, lng: 79.391605
        },
        onMapMounted: ref => {
          refs.map = ref;
        },
        getCenter: () => {
          return this.state.center
        },
        setCenter: (center) => {
          this.setState({center})
        },
        setMarker: (marker) => {
          this.setState({marker})
        },
        onBoundsChanged: () => {
          this.setState({
            bounds: refs.map.getBounds(),
            center: refs.map.getCenter(),
          })
        },
        onSearchBoxMounted: ref => {
          refs.searchBox = ref;
        },
        onPlacesChanged: () => {
          const places = refs.searchBox.getPlaces();
          const bounds = new window.google.maps.LatLngBounds();

          places.forEach(place => {
            if (place.geometry.viewport) {
              bounds.union(place.geometry.viewport)
            } else {
              bounds.extend(place.geometry.location)
            }
          });
          const nextMarkers = places.map(place => ({
            position: place.geometry.location,
          }));
          const nextCenter = []//_.get(nextMarkers, '0.position', this.state.center);

          this.setState({
            center: nextCenter,
            markers: nextMarkers,
          });
        },
      })
    },
  }),
  // withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    // onIdle={()=>{
    //   console.log(`marker position`, props.mapMarkerPostion)
    //   // setInterval(()=>{
    //   //   console.log(`onIdle called`, props.mapMarkerPostion);
    //   //   props.setMarker(props.mapMarkerPostion);
    //   //   props.setCenter(props.mapMarkerPostion);
    //   // }, 3000)
      
    // }}
    ref={props.onMapMounted}
    defaultZoom={15}
    center={props.center}//{props.center}
    onClick={(e)=>{
      props.setMarker(e.latLng)
      const location = {
        lat: e.latLng.lat(),
        lng: e.latLng.lng()
      }
      props.setDefaultCenter(location);
      props.setPreferenceLocationChange(location, 'map')
    }}
    >
    {props.isMarkerShown && <Marker position={props.marker} onClick={props.onMarkerClick} />}
  </GoogleMap>
);

export class MyFancyComponent extends React.PureComponent {
  state = {
    isMarkerShown: false,
  }
  constructor(props){
    super(props);
  }
  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }
  getMapMarkerPostion = () => {
    console.log(`getMapMarkerPostion`, this.props.mapMarkerPostion);
  }

  render() {
    console.log(`this`, this);
    return (
      <MyMapComponent
        isMarkerShown
        mapMarkerPostion={this.props.mapMarkerPostion}
        setPreferenceLocationChange={this.props.setPreferenceLocationChange}
        onMarkerClick={this.handleMarkerClick}
        setDefaultCenter={this.props.setDefaultCenter}
      />
    )
  }
}
// export default MyFancyComponent;