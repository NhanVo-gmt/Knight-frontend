'use server'

const subscribeUrl = "http://localhost:8080/subscribe";

export async function subscribe(prev: any, formData: FormData) {
    
    await fetch(subscribeUrl, {
        body: JSON.stringify({
            email: formData.get('email')
        }),

        headers: {
            'Content-Type': 'application/json',
        },

        method: 'POST',
    });
}