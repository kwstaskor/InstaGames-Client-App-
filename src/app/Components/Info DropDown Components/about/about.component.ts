import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';
@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy {

    first!: any
    map!: any
    googleapi!: any

    constructor(private _renderer2: Renderer2, @Inject(DOCUMENT) private _document: Document) {
    }

    ngOnInit(): void {
        this.scriptConfig();
        this.mapConfig();
    }

    ngOnDestroy(): void {
        this._renderer2.removeChild(this._document.body, this.first)
        this._renderer2.removeChild(this._document.body, this.map)
        this._renderer2.removeChild(this._document.body, this.googleapi)
    }

    scriptConfig() {
        this.first = this._renderer2.createElement('script');
        this.first.type = "text/javascript"
        this.first.id = 'elementor-frontend-js-before';
        this.first.text = `{
      var elementorFrontendConfig = { "environmentMode": { "edit": false, "wpPreview": false }, "i18n": { "shareOnFacebook": "Share on Facebook", "shareOnTwitter": "Share on Twitter", "pinIt": "Pin it", "download": "Download", "downloadImage": "Download image", "fullscreen": "Fullscreen", "zoom": "Zoom", "share": "Share", "playVideo": "Play Video", "previous": "Previous", "next": "Next", "close": "Close" }, "is_rtl": false, "breakpoints": { "xs": 0, "sm": 480, "md": 768, "lg": 1025, "xl": 1440, "xxl": 1600 }, "version": "3.0.14", "is_static": false, "legacyMode": { "elementWrappers": true }, "urls": { "assets": "https:\/\/iqonic.design\/wp-themes\/streamit_wp\/wp-content\/plugins\/elementor\/assets\/" }, "settings": { "page": [], "editorPreferences": [] }, "kit": { "global_image_lightbox": "yes", "lightbox_enable_counter": "yes", "lightbox_enable_fullscreen": "yes", "lightbox_enable_zoom": "yes", "lightbox_enable_share": "yes", "lightbox_title_src": "title", "lightbox_description_src": "description" }, "post": { "id": 7873, "title": "About%20Us%20%E2%80%93%20Streamit", "excerpt": "", "featuredImage": false } };
    }`;
        this._renderer2.appendChild(this._document.body, this.first);
    }

    mapConfig() {
        //MAP CONFIG
        this.map = this._renderer2.createElement('script');
        this.map.type = "text/javascript"
        this.map.text = `{
      let map;
      let mapPoint;
      let marker;
      function initMap() {

          mapPoint = { lat: 37.985987, lng: 23.729841 };
          map = new google.maps.Map(document.getElementById('map'), {
              center: mapPoint,
              zoom: 15,
              styles: [
                  { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
                  { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
                  { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
                  {
                      featureType: "administrative.locality",
                      elementType: "labels.text.fill",
                      stylers: [{ color: "#d59563" }],
                  },
                  {
                      featureType: "poi",
                      elementType: "labels.text.fill",
                      stylers: [{ color: "#d59563" }],
                  },
                  {
                      featureType: "poi.park",
                      elementType: "geometry",
                      stylers: [{ color: "#263c3f" }],
                  },
                  {
                      featureType: "poi.park",
                      elementType: "labels.text.fill",
                      stylers: [{ color: "#6b9a76" }],
                  },
                  {
                      featureType: "road",
                      elementType: "geometry",
                      stylers: [{ color: "#38414e" }],
                  },
                  {
                      featureType: "road",
                      elementType: "geometry.stroke",
                      stylers: [{ color: "#212a37" }],
                  },
                  {
                      featureType: "road",
                      elementType: "labels.text.fill",
                      stylers: [{ color: "#9ca5b3" }],
                  },
                  {
                      featureType: "road.highway",
                      elementType: "geometry",
                      stylers: [{ color: "#746855" }],
                  },
                  {
                      featureType: "road.highway",
                      elementType: "geometry.stroke",
                      stylers: [{ color: "#1f2835" }],
                  },
                  {
                      featureType: "road.highway",
                      elementType: "labels.text.fill",
                      stylers: [{ color: "#f3d19c" }],
                  },
                  {
                      featureType: "transit",
                      elementType: "geometry",
                      stylers: [{ color: "#2f3948" }],
                  },
                  {
                      featureType: "transit.station",
                      elementType: "labels.text.fill",
                      stylers: [{ color: "#d59563" }],
                  },
                  {
                      featureType: "water",
                      elementType: "geometry",
                      stylers: [{ color: "#17263c" }],
                  },
                  {
                      featureType: "water",
                      elementType: "labels.text.fill",
                      stylers: [{ color: "#515c6d" }],
                  },
                  {
                      featureType: "water",
                      elementType: "labels.text.stroke",
                      stylers: [{ color: "#17263c" }],
                  },
              ],

          });
          marker = new google.maps.Marker({ position: mapPoint, map: map });
      }
    }`;
        this._renderer2.appendChild(this._document.body, this.map);

        //API
        this.googleapi = this._renderer2.createElement('script');
        this.googleapi.type = "text/javascript"
        this.googleapi.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAI4qVWnkN9KAZqF_r1HblpYjBKkEDO8r8&callback=initMap";
        this._renderer2.appendChild(this._document.body, this.googleapi);
    }

}
