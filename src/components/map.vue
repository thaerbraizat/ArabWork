<template>
    <div class="map-wrapper" id="mapRef" >
  
        <br />
        <gmap-map :center="getLocations" :zoom="3" style="width: 100%; height: 400px">
            <GmapMarker :position=getLocations :clickable="true" :draggable="false" />
        </gmap-map>
    </div>
</template>
  
<script>
export default {
    name: "GoogleMap",
    data() {
        return {
            // center: { lat: 31.958090, lng: 35.945808 },

            // markers:
            //     { lat: 31.958090, lng: 35.945808 }
            // ,
            places: [],
            currentPlace: null,

            // Draw orange breadcrumb to the gmap
            orangeBreadCrumb: [
                { lat: 45.508, lng: -73.587 },
                { lat: 45.491, lng: -73.487 },
            ],

            // Draw Red breadcrumb to the gmap
            redBreadCrumb: [
                { lat: 45.342, lng: -73.387 },
                { lat: 45.167, lng: -73.187 },
            ],

            // Draw Green breadcrumb to the gmap
            greenBreadCrumb: [
                { lat: 45.491, lng: -73.487 },
                { lat: 45.167, lng: -73.187 },
            ],

            /**
             * Breadcrumb color and line style options to the gmap also can
             * add shapes and direction arrows etc.
             */
            orangeBreadCrumbOptions: {
                strokeColor: "#FFA500",
                strokeOpacity: 1.0,
                strokeWeight: 5,
            },

            /**
             * Breadcrumb color and line style options to the gmap also can
             * add shapes and direction arrows etc.
             */
            redBreadCrumbOptions: {
                strokeColor: "#d43352",
                strokeOpacity: 1.0,
                strokeWeight: 5,
            },

            /**
             * Breadcrumb color and line style options to the gmap also can
             * add shapes and direction arrows etc.
             */
            greenBreadCrumbOptions: {
                strokeColor: "#00FF00",
                strokeOpacity: 1.0,
                strokeWeight: 5,
            },
        };
    },
    computed: {
        getLocations() {
            return this.$store.getters.getLocations;
        },
    },

    mounted() {
        this.geolocate();
    },

    methods: {
        setPlace(place) {
            this.currentPlace = place;
        },
        addMarker() {
            if (this.currentPlace) {
                const marker = {
                    lat: "12.9716",
                    lng: "77.5946",
                };
                this.markers.push({ position: marker });
                this.places.push(this.currentPlace);
                this.center = marker;
                this.currentPlace = null;
            }
        },
        geolocate() {
            navigator.geolocation.getCurrentPosition(() => {
                this.center = {
                    lat: 45.167,
                    lng: -73.187,
                };
            });
        },
    },
};
</script>

<style scoped>
.map-wrapper {
    width: 30%;
    padding: 60px 10px 10px 10px;
}
</style>
