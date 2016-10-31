export const signup = (user, success, error) => {
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: user,
    success,
    error
  })
}

export const login = (user, success, error) => {
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: user,
    success,
    error
  })
}

export const logout = success => {
  $.ajax({
    type: 'delete',
    url: `/api/session/`,
    success,
  })
}
