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
            places: [],
            currentPlace: null,
        };
    },
    computed: {
        getLocations() {
            return this.$store.getters.getLocations;
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
