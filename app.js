if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js')
      .then(function(registration){
      console.log('Service Worker regitrado con éxito: ', registration);
    })
    .catch4(function(error){
        console.log('Error al registrar el Service Worker: ', error)
    })
    
  }