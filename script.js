const locais = [
    {
      nome: "Clínica Sono Vida",
      lat: -29.762,
      lon: -51.147,
      link: "https://www.sono.com.br/"
    },
    {
      nome: "Hospital do Sono São Lucas",
      lat: -29.764,
      lon: -51.149,
      link: "https://hospitalsaolucas.pucrs.br/"
    },
    {
      nome: "Centro de Medicina do Sono",
      lat: -29.765,
      lon: -51.144,
      link: "https://www.centromedicinadosono.com"
    }
  ];

  function mostrarMapa(lat, lon) {
    const map = L.map('map').setView([lat, lon], 14);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap'
    }).addTo(map);

    // Marcador do usuário
    L.marker([lat, lon]).addTo(map)
      .bindPopup("Você está aqui.")
      .openPopup();

    // Marcadores e lista
    locais.forEach(local => {
      L.marker([local.lat, local.lon])
        .addTo(map)
        .bindPopup(`<strong>${local.nome}</strong><br>Especializado em Apneia do Sono`);

      const item = document.createElement('div');
      item.className = "local";
      item.innerHTML = `
        <strong>${local.nome}</strong><br>
        <a href="${local.link}" target="_blank">Acessar</a>
      `;
      document.getElementById('lista-locais').appendChild(item);
    });
  }

  function obterLocalizacao() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const lat = pos.coords.latitude;
          const lon = pos.coords.longitude;
          mostrarMapa(lat, lon);
        },
        (err) => {
          console.warn("Localização não permitida. Usando valor padrão.");
          mostrarMapa(-29.763, -51.146);
        }
      );
    } else {
      mostrarMapa(-29.763, -51.146); 
    }
  }

  obterLocalizacao();