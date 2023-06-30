import { Modal, useMantineTheme } from "@mantine/core";
import { useState } from "react";
import toast, {Toaster} from "react-hot-toast";
import { useStore } from "../store/store";
import { createOrder } from "../lib/orderHandler";
import css from '../styles/OrderModal.module.css';

export default function OrderModal({ opened, setOpened, PaymentMethod }) {

    const theme = useMantineTheme();
    const [FormData, setFormData] = useState({});

    const handleInput = (e) => {
        setFormData({ ...FormData, [e.target.name]: e.target.value })
    }

    const resetCart = useStore((state) => state.resetCart);
    const total = typeof window !== 'undefined' && localStorage.getItem('total');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const id = await createOrder({ ...FormData, total, PaymentMethod });
        // console.log('Pedido criado com sucesso, id: ', id);
        toast.success('Pedido Realizado!');
        resetCart();
        {
            typeof window !== 'undefined' && localStorage.setItem('order', id);
        }
    }

    return (
        <Modal
            overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
            overlayOpacity={0.55}
            overlayBlur={3}
            opened={opened}
            onClose={() => setOpened(null)}
        >
            {/* Modal content */}
            <form onSubmit={handleSubmit} className={css.formContainer}>
                <input onChange={handleInput} type="text" name="name" required placeholder="Nome" />
                <input onChange={handleInput} type="text" name="phone" required placeholder="Telefone" />
                <textarea onChange={handleInput} name="address" rows={3} required placeholder="Endereço"></textarea>

                <span>
                    Você vai pagar <span>R$ {total}</span> na entrega
                </span>

                <button type="submit" className="btn">Finalizar Pedido</button>
            </form>
            <Toaster />
        </Modal>
    )
};
