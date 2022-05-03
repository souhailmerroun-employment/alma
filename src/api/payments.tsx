export type Merchant = {
    name: string;
}

export type Payment = {
    status: string,
    id: string,
    created: Date,
    customer_name: string,
    merchant: Merchant
    amount: number
    installmentsCount: number
}

export const API_GET_PAYMENTS = async (): Promise<Payment[]> => {
    const res = await fetch('https://cloudrun-frontend-recruitment-test-5hhyjiivra-ew.a.run.app/payments')
    return res.json();
}