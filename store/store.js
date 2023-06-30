import create from 'zustand';

export const useStore = create(
    (set) => ({

        // Cart
        cart: {
            pizzas: []
        },

        // Add Piiza in Cart
        addPizza: (data) =>
            set((state) => ({
                cart: {
                    pizzas: [...state.cart.pizzas, data]
                }
            })),

        // Remove Pizza
        removePizza: (index) =>
            set((state) => ({
                cart: {
                    pizzas: state.cart.pizzas.filter((_, i) => i != index)
                }
            })),

        // Clear Cart
        resetCart: () =>
        set(()=> ({
            cart: {
                pizzas: []
            }
        }))
    })
)