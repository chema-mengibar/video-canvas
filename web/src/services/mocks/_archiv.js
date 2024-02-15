this.loadStoredConfig();

// this.fetchData().then(() => {
//     // AppRouter.push({ path: '/', replace: true }).then(() => {
//     //     window.location.href = '/'
//     // })
// });


getAssetsPath(imageName) {
  return this.domain + '/data/images/' + imageName
}


storeConfig() {
  localStorage.setItem("cup-config", JSON.stringify(this.config));
}


loadStoredConfig() {

  this._data.config = {
      ...defaultConfig
  }

  try {
      const st = localStorage.getItem("cup-config");
      if (st) {
          this._data.config = JSON.parse(st);




      } else {
          this._data.config = {
              ...defaultConfig
          }
      }
  } catch (e) {
      console.error('[ToolService] loadStoredConfig', e)
      throw new Error('Error in storage')
  }
}


async fetchData() {
  const url = this.domain + '';
  // console.log('[ToolService] fetchData: start');
  this.state = 'loading';

  return fetch(url, {
      method: 'GET',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
  })
      .then((res) => {
          return res.json()
      })
      .then((jsonResponse) => {
          if (jsonResponse) {
              console.log('[ToolService] fetchData:resp', jsonResponse)
              this.SVG = jsonResponse;

              setTimeout(() => {
                  this.state = 'loaded';
              }, 100)

              // return this.SVG;
          }
      }, (error) => {
          this.state = 'loaded';
          console.error('[ToolService] fetchData:', error)
      })
}
