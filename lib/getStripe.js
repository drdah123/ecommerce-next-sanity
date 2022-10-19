import { loadStripe } from "@stripe/stripe-js";

let stripePromies

const getStripe = () => {
    if (!stripePromies) {
        stripePromies = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
    }

    return stripePromies
}

export default getStripe
