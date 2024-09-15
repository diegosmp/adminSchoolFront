import api from '@/app/api/api'

export async function isValidateToken(token: string) {
  if (!token) {
    return false
  }

  try {
    await api.get('/users/profile', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    return true
  } catch (error) {
    return false
  }
}
