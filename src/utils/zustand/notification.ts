import { create } from "zustand";
import { persist } from "zustand/middleware";

interface NotificationState{
    showSuccessNotification: boolean;
    setSuccessNotification: (value: boolean) => void;
}

 const useNotificationStore = create<NotificationState>()(
    persist(
        (set) => ({
      showSuccessNotification:false,
      
       //tambahkan product jika ada product baru
      setSuccessNotification: (value) => set({ showSuccessNotification: value }),
      
      
      }),
      {
        name:"notification",
        onRehydrateStorage: () => {
          console.log("Status telah direhidrasi dari local storage");
        },
      }
        )
      )

      export default useNotificationStore;
      
// store/notificationStore.js

// const useNotificationStore = create<NotificationState>(
//     persist(
//     (set,get) => ({
//     showSuccessNotification: false,

//     setSuccessNotification: (value) => set({ showSuccessNotification: value }),
// }),
// name:"notification"


// ))

// export default useNotificationStore;