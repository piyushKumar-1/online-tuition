from .models import ContactUsMessage
from django.db.models.signals import post_save
import os
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

#support@learnerzcorner.com
def send_mail(sender, instance, **kwargs):
    message = Mail(
        from_email=instance.email,
        to_emails=['pkkapoor98@gmail.com', 'support@learnerzcorner.com'],
        subject=instance.subject,
        plain_text_content=instance.message
    )
    try:
        sg = SendGridAPIClient(os.environ.get('SENDGRID_API_KEY'))
        response = sg.send(message)
    except Exception as e:
        print(e)


post_save.connect(send_mail, sender=ContactUsMessage, dispatch_uid="created_contact_query")