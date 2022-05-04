export type Merchant = {
    name: string;
}

export type paymentPlan = {
    id: string,
    due_date: Date,
    status: string,
    amount: number,
    fee: number
}

export type SinglePayment = {
    status: string,
    id: string,
    created: Date,
    customer_name: string,
    merchant: Merchant
    amount: number
    installmentsCount: number
    paymentPlan: paymentPlan[]
}

export const API_GET_PAYMENT = async (id: string): Promise<SinglePayment> => {
    const res = await fetch('https://cloudrun-frontend-recruitment-test-5hhyjiivra-ew.a.run.app/payments/' + id)
    return res.json();
}