def email_validation(email):

    if email == '':
        raise ValueError('Email não pode ser vazio')
    if not isinstance(email, str):
        raise TypeError('Email precisa ser uma string')

    username, domain = email.split('@')
    website, extension = domain.split('.')

    validate_email_username(username)
    validate_email_website(website)
    validate_email_extension(extension)


def validate_email_username(username):
    if not username[0].isalpha():
        raise TypeError('Email precisa começar com uma letra')

    for letter in username:
        if letter.isalnum() or letter == '-' or letter == '_':
            continue
        else:
            raise TypeError('Nome no email deve ter letras, números, - ou _')


def validate_email_website(website):
    if not website.isalnum():
        raise TypeError('Website do email só pode conter letras e números')


def validate_email_extension(extension):
    if len(extension) > 3:
        raise ValueError('Extensão do email pode ter até três caracteres')
