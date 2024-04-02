'use server'

const subscribeUrl = "http://localhost:8080/subscribe";



export async function subscribe(prev: any, formData: FormData) {
    try {

        const email = formData.get("email");
        const firstname = formData.get("firstname");
        const lastname = formData.get("lastname");

        const data = {
            email: email,
            firstname: firstname ? firstname : "",
            lastname: lastname ? lastname : "",
        };

        const res = await fetch(subscribeUrl, {
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
        });
        console.log(res);
        
    } catch (error) {
        console.log(error);
    }
}