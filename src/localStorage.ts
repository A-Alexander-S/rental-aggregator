interface UserlocalStoragee {
  user: {
    username: string,
    avatarUrl: string
  },
  favoritesAmount: number
}

export let localStoragee: UserlocalStoragee = {
  user: {
    username: "Wade Warren",
    avatarUrl: "./img/avatar.png"
  },
  favoritesAmount: 10
}

