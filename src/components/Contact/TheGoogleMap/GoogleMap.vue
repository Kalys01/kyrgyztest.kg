<template>
  <div ref="googleMapRef" :style="{ height: height, width: width }" />
</template>

<script lang="ts">
/// <reference types="googlemaps" />
/* eslint-disable no-undef */
import { defineComponent, onMounted, PropType, ref, watch } from "vue";
import {
  loadGoogleMapsScript,
  GoogleMapsScriptLoadParams,
} from "./GoogleMapLoader";
type Props = {
  apiKey: string;
  libraries: string;
  height: string;
  width: string;
  options: google.maps.MapOptions;
  markers: google.maps.MarkerOptions[];
};
export default defineComponent({
  name: "GoogleMap",
  props: {
    apiKey: {
      type: String,
      required: true,
    },
    libraries: {
      type: String,
      required: true,
      default: "geometry,drawing,places",
    },
    height: {
      type: String,
      required: false,
      default: "100%",
    },
    width: {
      type: String,
      required: false,
      default: "100%",
    },
    options: {
      type: Object as PropType<google.maps.MapOptions>,
      required: true,
    },
    markers: {
      type: Array as PropType<google.maps.MarkerOptions[]>,
      required: false,
      default: () => [],
    }
  },

  setup(props: Props, { emit }) {
    let map = {} as google.maps.Map<Element>;
    let markers = [] as google.maps.Marker[];
    
    function createMap(
      mapElement: HTMLElement,
      option: google.maps.MapOptions
    ): google.maps.Map<Element> {
      const map = new google.maps.Map(mapElement, { ...option });
      emit("map-created", map);
      return map;
    }
    function createMarkers(
      map: google.maps.Map<Element>,
      options: google.maps.MarkerOptions[]
    ): google.maps.Marker[] {
      const markers = options.map(
        (option) => new google.maps.Marker({ ...option, map: map })
      );
      emit("markers-created", markers);
      return markers;
    }
    
    const googleMapRef = ref<HTMLElement>();
    onMounted(() => {
      if (!googleMapRef.value) throw new Error("googleMapRef is undefined");
      loadGoogleMapsScript({
        key: props.apiKey,
        libraries: props.libraries,
      } as GoogleMapsScriptLoadParams)
        .then(() => {
          const mapElement = googleMapRef.value as HTMLElement;
          if (!mapElement)
            throw new Error("[GoogleMap] Failed to reference 'mapElement'");
          map = createMap(mapElement, props.options);
          markers = createMarkers(map, props.markers);
        })
        .catch((error) => console.error(error));
    });
    watch(
      () => props.options,
      (value) => map.setOptions(value)
    );
    watch(
      () => props.markers,
      (value) => {
        markers.forEach((marker) => marker.setMap(null));
        markers = createMarkers(map, value);
      }
    )
   
    return {
      googleMapRef
    }
  }
})
</script>