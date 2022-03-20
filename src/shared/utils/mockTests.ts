export const mockCreateClient = {
  success: true,
  token: expect.any(String),
  data: {
    user: {
      email: 'pedro@gmail.com',
      role: 2
    },
    client: {
      profile: {
        first_name: 'Pedro',
        last_name: 'Ramirez'
      }
    }
  }
}

export const mockCreateRestaurant = {
  success: true,
  token: expect.any(String),
  data: {
    user: {
      email: 'restaurante@gmail.com',
      role: 3
    },
    restaurant: {
      category_id: 1,
      profile: {
        razon_social: 'Sociedad Anónima',
        ruc: 12345678910,
        nombre_comercial: 'Pedrito Rest',
        description: 'Restaurante de Pedrito',
      }
    }
  }
}
