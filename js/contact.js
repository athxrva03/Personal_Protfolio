emailjs.init(
    "k_ZG3KB0GlAJnCbeQ"
);

const contactForm =
document.getElementById(
    "contact-form"
);

const statusText =
document.getElementById(
    "form-status"
);

contactForm.addEventListener(
    "submit",
    async function(e){

        e.preventDefault();

        const submitBtn =
        this.querySelector("button");

        submitBtn.disabled = true;

        submitBtn.innerText =
        "Sending...";

        const params = {

            from_name:
            document.getElementById(
                "name"
            ).value,

            from_email:
            document.getElementById(
                "email"
            ).value,

            message:
            document.getElementById(
                "message"
            ).value
        };

        try{

            await emailjs.send(

                "service_o75xcok",

                "template_ifjn82i",

                params

            );

            statusText.textContent =
            "Message sent successfully!";

            statusText.style.color =
            "#22c55e";

            contactForm.reset();

        }

        catch(error){

            statusText.textContent =
            "Failed to send message.";

            statusText.style.color =
            "#ef4444";

            console.error(error);
        }

        submitBtn.disabled = false;

        submitBtn.innerText =
        "Send Message";
    }
);