import create from 'zustand'

interface LoginModalStore{

    showLoginModal: boolean;
    setShowLoginModal: (by: boolean) => void;
    show: () => void;
}

export const useLoginModalStore = create<LoginModalStore>(set => ({
    showLoginModal: false,
    setShowLoginModal: (showLoginModal) => set({showLoginModal}),
    show: () => set({showLoginModal : true})
}))