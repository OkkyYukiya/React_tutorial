export interface CurrentPath {
  currentPath: string
}

export interface authInitialState {
  isOpenLoginModal: boolean
  isLoadingAuth: boolean
  myprofile: {
    nickName: string
    created_at: string
    photoUrl: string
  }
}
