

;(function(){
    let myMap;

    const init = () => {
        myMap = new ymaps.Map('map__wrapper', {
            center: [56.492377, 84.994452],
            zoom: 13,
            controls: {}
        })
         const coords = [
             [56.480034, 84.981241]
         ];
         const myCollection = new ymaps.GeoObjectCollection({}, {
             draggable: false,
             iconLayout: 'default#image',
             iconImageHref: "./images/icons/marker.svg",
             iconImageSize: [50, 42],
             iconImageOffset: [-3, -42]
         })
    
         coords.forEach(coord => {
             myCollection.add(new ymaps.Placemark(coord))
         })
    
         myMap.geoObjects.add(myCollection)
    
         myMap.behaviors.disable('scrollZoom');
         myMap.controls.add('zoomControl', {
            float: 'none',
            position: {
                right: 40,
                top: 5
            }
        });
    }
    
    ymaps.ready(init);
})()