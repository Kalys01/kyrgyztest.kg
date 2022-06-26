<template>
  <div class="bg-white w-[calc(100% - 20px)] sm:w-[calc(100%-200px)] mt-32 sm:mt-0 right-0 h-[500px] rounded-md overflow-hidden">
    <GoogleMap
      :apiKey="apiKey"
      libraries="geometry,drawing,places"
      :options="mapProps.options"
      :markers="mapProps.markers"
      @map-created="onMapCreated"
      @markers-created="onMarkersCreated"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, watch } from "vue";
import { GoogleMap } from "./TheGoogleMap";
export default defineComponent({
  name: "App",
  components: {
    GoogleMap,
  },
  setup() {
    const options = {
      center: { lat: 42.832789, lng: 74.605906 },
      zoom: 17,
    };
    const markers = [
      {
        position: { lat: 42.832789, lng: 74.605906  },
        title: "position1",
        draggable: false,
      }
    ];
    
    const mapProps = reactive({
      options,
      markers
    });
    const visibles = reactive({
      markers: true
    });
    watch(
      () => visibles.markers,
      (value) => (mapProps.markers = value ? markers : [])
    );
    
    return {
      mapProps,
      visibles,
      apiKey: process.env.VUE_APP_GOOGLE_MAPS_API_KEY,
      onMapCreated: (map: google.maps.Map) => console.log("map: ", map),
      onMarkersCreated: (markers: google.maps.Marker[]) =>
        console.log("markers: ", markers)
    };
  },
});
</script>
