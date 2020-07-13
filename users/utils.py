from django.core.mail import send_mail




class Util:
    @staticmethod
    def sendMail(data):
        send_mail(data['email_subject'], data['email_body'],'pkkapoor98@gmail.com', [data['to_email']], fail_silently=False)