letter_to_number = {
    "0": "0",
    "1": "1",
    "ABC": "2",
    "DEF": "3",
    "GHI": "4",
    "JKL": "5",
    "MNO": "6",
    "PQRS": "7",
    "TUV": "8",
    "WXYZ": "9",
    "-": "-"
}


def get_phone_from_phrase(phrase):
    phone_number = ''
    if phrase == '':
        raise TypeError('A frase não pode ser vazia')
    if len(phrase) > 30:
        raise ValueError('O tamanho máximo de frase é 30 caracteres')
    try:
        for char in phrase:
            key = [k for k in letter_to_number.keys() if char.upper() in k][0]
            phone_number += letter_to_number[key]
        return phone_number
    except IndexError:
        raise IndexError("""
Caractere inválido.
Utilize apenas letras de A-Z, 1, 0 ou hífen.
""")
