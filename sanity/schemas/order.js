export default {
    name: 'order',
    title: 'Pedido',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Nome',
            type: 'string',
            options: {
                maxLength: 40
            }

        },
        {
            name: 'phone',
            title: 'Telefone',
            type: 'string',
            options: {
                maxLength: 15
            }

        },
        {
            name: 'address',
            title: 'Endereço',
            type: 'string',
            options: {
                maxLength: 100
            }

        },
        {
            name: 'method',
            title: 'Método de Pagamento',
            type: 'number'
        },
        {
            name: 'total',
            title: 'Total',
            type: 'number'
        },
        {
            name: 'status',
            title: 'Status',
            type: 'number'
        }
    ]
}