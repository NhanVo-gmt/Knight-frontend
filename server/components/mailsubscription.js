const mailchimp = require('@mailchimp/mailchimp_marketing');

mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_API_SERVER
})

const addMailMember = async (email, firstname, lastname) => {
    try {
        const response = await mailchimp.lists.addListMember(process.env.MAILCHIMP_LIST_ID, {
            email_address: email,
            status: 'subscribed',
            email_type: 'html',
            merge_fields: {
                FNAME: firstname,
                LNAME: lastname
            }
        });
        console.log(response);

        return response;
    }
    catch (err)
    {
        console.log(err);
        return null;
    }
}

module.exports = addMailMember