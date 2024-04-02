const mailchimp = require('@mailchimp/mailchimp_marketing');
const { StatusCodes } = require ('http-status-codes')

mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_API_SERVER
})

const addMailMember = async (req, res) => {
    try {
        const data = req.body;

        const response = await mailchimp.lists.addListMember(process.env.MAILCHIMP_LIST_ID, {
            email_address: data.email,
            status: 'subscribed',
            email_type: 'html',
            merge_fields: {
                FNAME: data.firstname,
                LNAME: data.lastname
            }
        });

        res.status(StatusCodes.OK).json({ response });
        return response;
    }
    catch (err)
    {
        console.log(err);
        return null;
    }
}

module.exports = addMailMember