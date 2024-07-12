// Файл map.js
export const useMap = () => {
  // Код карты:
  async function initMap() {
    await ymaps3.ready;

    const { YMap, YMapDefaultSchemeLayer, YMapPlacemark } = ymaps3;

    let currentTheme = localStorage.getItem('theme') || 'light';

    // Создаем карту
    const map = new YMap(document.getElementById('map'), {
      location: {
        center: [47.024643, 28.831580],
        zoom: 2,
      },
    });

    const waterLayer = new YMapDefaultSchemeLayer({
      theme: 'light',
      zIndex: 0,
      background: {
        stylers: [
          {
            opacity: 0,
          },
        ],
      },
      customization: [
        {
          tags: {
            all: ['water'],
          },
          stylers: [
            {
              color: currentTheme === 'dark' ? '#1e1d25' : '#FFF',
            },
          ],
        },
        {
          tags: {
            all: ['landscape'],
          },
          stylers: [
            {
              color: "#acacb9",
            },
          ],
        },
      ],
    });

    map.addChild(waterLayer);

    window.YMapDefaultSchemeLayer = YMapDefaultSchemeLayer;

    window.waterLayer = waterLayer;
    window.map = map;
  }

  initMap();
};
