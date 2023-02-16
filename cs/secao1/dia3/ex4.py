from ex3 import email_validation


def validate_emails_list(emails):
    valid_emails = []
    for email in emails:
        try:
            email_validation(email)
            valid_emails.append(email)
        except (TypeError, ValueError) as error:
            print(error)
    return valid_emails
