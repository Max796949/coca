export const useMap = () => {
  initMap();

  async function initMap() {
    await ymaps3.ready;

    const { YMap, YMapDefaultSchemeLayer } = ymaps3;

    // Иницилиазируем карту
    const map = new YMap(
      document.getElementById('map'),

      {
        location: {
          center: [28.090661, 30.764496],
          zoom: 2,
        },
      },
    );

    const mapContainer = document.getElementById('map');

    const waterElement = 'water';

    map.addChild(new YMapDefaultSchemeLayer({
    customization: [
      {
          tags: { all: [waterElement] },
          elements: 'geometry',
          stylers: [
              {
                  "color": "#fff",
              }
          ]
      },

      {
        tags: { all: ['landscape']},
        elements: 'geometry.fill',
        stylers: [
          {
            "color": "#acacb9"
          }
        ]
      },
      {
        tags: { all: ['landscape']},
        types: "polyline",
        elements: 'geometry.outline',
        stylers: [
          {
            "color": "#000"
          }
        ]
      },
  ]
}));

  }
};
